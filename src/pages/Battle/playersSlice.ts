import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Fighter, FighterIds } from "./models/models";

const initialState = {
    player1: null as null | Fighter,
    player2: null as null | Fighter,
}

export const playersSlice = createSlice({
    name: 'players',
    initialState,
    reducers: {
        playerSelected(state, action: PayloadAction<Fighter>) {
            const {id, name} = action.payload;
            state[id] = {
                id,
                name,
                imageUrl: `https://github.com/${name}.png?size=200`
            };
        },
        playerReset(state, action: PayloadAction<FighterIds>) {
            state[action.payload] = null;
        }
    }
});

export const { playerSelected, playerReset } = playersSlice.actions;