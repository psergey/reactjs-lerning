import { IProfile } from "../../../models/models";
import PlayersProvider from "../../../services/playersApi";
import { IFightResult } from "../models/models";

const getTotalStarts = (repos: any) : number => repos.reduce((total: number, item: any) => total + item.stargazers_count, 0);

const calculateScore = (profile: IProfile, repositories: any): number => {
    const followers = profile.followers;
    const stars = getTotalStarts(repositories);

    return followers * 3 + stars;
};

const getUserData = async (userName: string) : Promise<IFightResult> => {
    const [profile, repos] = await Promise.all([
        PlayersProvider.getPorfile(userName),
        PlayersProvider.getRepositories(userName)
    ]);

    return {
        profile,
        score: calculateScore(profile, repos)
    }
};

const fight = async (players: string[]) : Promise<IFightResult[]> => {
    var results = await Promise.all(players.map(getUserData));
    return results.sort((first: IFightResult, second: IFightResult) => second.score - first.score);
}

export {
    fight
}