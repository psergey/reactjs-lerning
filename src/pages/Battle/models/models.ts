import { Profile } from "../../../models/models"

export interface Fighter 
{
    id: FighterIds
    name: string
    imageUrl?: string
}

export type FighterIds = "player1" | "player2"


export interface FightResult {
    profile: Profile
    score: number
}