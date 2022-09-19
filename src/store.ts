import { configureStore } from '@reduxjs/toolkit'
import {popularSlice} from './pages/Popular/popularSlice'
import {playersSlice} from './pages/Battle/playersSlice'
import {fightSlice} from './pages/Battle/fightSlice'

export const store = configureStore({
    reducer: {
        [popularSlice.name]: popularSlice.reducer,
        [playersSlice.name]: playersSlice.reducer,
        [fightSlice.name]: fightSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
