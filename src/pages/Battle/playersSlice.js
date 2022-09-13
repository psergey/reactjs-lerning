import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    player1: null,
    player2: null,
}

export const playersSlice = createSlice({
    name: 'players',
    initialState,
    reducers: {
        playerSelected(state, action) {
            const {id, userName: name} = action.payload;
            state[id] = state[id] ?? {};
            state[id].id = id;
            state[id].name = name;
            state[id].imageUrl = `https://github.com/${name}.png?size=200`;
        },
        playerReset(state, action) {
            state[action.payload] = null;
        }
    }
});

export const { playerSelected, playerReset } = playersSlice.actions;