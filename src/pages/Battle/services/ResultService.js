import PlayersProvider from "../../../services/playersApi";

const getTotalStarts = (repos) => repos.reduce((total, item) => total + item.stargazers_count, 0);

const calculateScore = (profile, repositories) => {
    const followers = profile.followers;
    const stars = getTotalStarts(repositories);

    return followers * 3 + stars;
};

const getUserData = async (userName) => {
    const [profile, repos] = await Promise.all([
        PlayersProvider.getPorfile(userName),
        PlayersProvider.getRepositories(userName)
    ]);

    return {
        profile,
        score: calculateScore(profile, repos)
    }
};

const fight = async (players) => {
    var results = await Promise.all(players.map(getUserData));
    return results.sort((first, second) => second.score - first.score);
}

export {
    fight
}