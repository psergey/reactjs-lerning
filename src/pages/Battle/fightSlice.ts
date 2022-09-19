import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoadingState } from "../../models/models";
import { fight as playersFight } from './services/ResultService';
import { FightResult } from "./models/models";

export const fight = createAsyncThunk('fight/action', async (players: any[]) => await playersFight(players));
const initialState = {
    status: 'idle' as LoadingState,
    fightResults: [] as FightResult[],
    errorMessage: null as null | string | undefined
}

export const fightSlice = createSlice({
    name: 'fight',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fight.pending, (state, _) => {
            state.status = 'loading';
            state.errorMessage = null;
        }).addCase(fight.fulfilled, (state, action) => {
            state.status = 'idle';
            state.fightResults = action.payload;
        }).addCase(fight.rejected, (state, action) => {
            state.status = 'error';
            state.errorMessage = action.error.message;
        })
    }
});