const PlayersProvider = {
    populars: async (language) => {
        const encodeURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + language + '&sort=stars&order=desc&type=Repositories');
        const response = await fetch(encodeURI);
        if (response.status === 200) {
            return (await response.json()).items;
        } else {
            throw 'Error fetching users data'
        }
    }
}

export default PlayersProvider