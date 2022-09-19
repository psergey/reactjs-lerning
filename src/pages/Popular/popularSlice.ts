import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Languages, LoadingState, PopularPlayer } from "../../models/models";
import PlayersProvider from "../../services/playersApi";

export const fetchPopularPlayers = createAsyncThunk('popular/fetchPopularPlayers', async (language: Languages) => {
    const response = await PlayersProvider.populars(language)
    return response
})

const initialState  = {
    language: Languages.ALL,
    players: [] as PopularPlayer[],
    status: 'idle' as LoadingState,
    errorMessage: null as null | string | undefined
};

export const popularSlice = createSlice({
    name: 'populars',
    initialState,
    reducers: {
        languageChanged(state, action) {
            state.language = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPopularPlayers.pending, (state, _) => { 
                state.status = 'loading';
                state.errorMessage = '';
            })
            .addCase(fetchPopularPlayers.fulfilled, (state, action) => {
                state.status = 'idle';
                state.players = action.payload;
            })
            .addCase(fetchPopularPlayers.rejected, (state, action) => {
                state.status = 'error';
                state.errorMessage = action.error.message;
            })
    }
});

export const { languageChanged } = popularSlice.actions

export default popularSlice.reducer;