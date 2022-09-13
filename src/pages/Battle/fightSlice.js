import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fight as playersFight } from './services/ResultService';

export const fight = createAsyncThunk('fight/action', async (players) => await playersFight(players));
const initialState = {
    status: 'idle',
    fightResults: [],
    errorMessage: null
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