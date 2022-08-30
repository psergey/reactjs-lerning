import axios from "axios";

const id = 'YOUR_CLIENT_ID';
const sec = 'YOUR_SECRET_ID';
const params = `?client_id=${id}&client_secret=${sec}`;

const PlayersProvider = {
    getPorfile: async (username) => {
        const response = await axios.get(`https://api.github.com/users/${username}${params}`);
        return response.data;
    },
   
    getRepositories: async (username) => {
        const response = await axios.get(`https://api.github.com/users/${username}/repos${params}`);
        return response.data;
    },
    
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