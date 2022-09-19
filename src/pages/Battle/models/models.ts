import { type } from "os"
import { Profile } from "../../../models/models"

export interface Fighter 
{
    id: FighterIds
    name: string
    imageUrl?: string
}

export type FighterIds = 'player1' | 'player2'

export interface FightResult {
    profile: Profile
    score: number
}

export type FightStatus = 'win' | 'loose' | 'draw'