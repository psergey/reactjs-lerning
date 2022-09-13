import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import PlayersProvider from "../../services/playersApi";

export const fetchPopularPlayers = createAsyncThunk('popular/fetchPopularPlayers', async (language) => {
    const response = await PlayersProvider.populars(language)
    return response
})

const initialState = {
    language: 'ALL',
    playersInfo: [],
    status: 'idle',
    errorMessage: null
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
                state.errorMessage = null;
            })
            .addCase(fetchPopularPlayers.fulfilled, (state, action) => {
                state.status = 'idle';
                state.playersInfo = action.payload;
            })
            .addCase(fetchPopularPlayers.rejected, (state, action) => {
                state.status = 'error';
                state.errorMessage = action.error.message;
            })
    }
});

export const { languageChanged } = popularSlice.actions

export default popularSlice.reducer;