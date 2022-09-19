import { Profile } from "../../../models/models";
import PlayersProvider from "../../../services/playersApi";
import { FightResult } from "../models/models";

const getTotalStarts = (repos: any) : number => repos.reduce((total: number, item: any) => total + item.stargazers_count, 0);

const calculateScore = (profile: Profile, repositories: any): number => {
    const followers = profile.followers;
    const stars = getTotalStarts(repositories);

    return followers * 3 + stars;
};

const getUserData = async (userName: string) : Promise<FightResult> => {
    const [profile, repos] = await Promise.all([
        PlayersProvider.getPorfile(userName),
        PlayersProvider.getRepositories(userName)
    ]);

    return {
        profile,
        score: calculateScore(profile, repos)
    }
};

const fight = async (players: string[]) : Promise<FightResult[]> => {
    var results = await Promise.all(players.map(getUserData));
    return results.sort((first: FightResult, second: FightResult) => second.score - first.score);
}

export {
    fight
}