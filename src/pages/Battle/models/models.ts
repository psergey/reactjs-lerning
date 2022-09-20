import { IProfile } from "../../../models/models"

export interface IFighter 
{
    id: FighterIds
    name: string
    imageUrl?: string
}

export type FighterIds = 'player1' | 'player2'

export interface IFightResult {
    profile: IProfile
    score: number
}

export type FightStatus = 'win' | 'loose' | 'draw'