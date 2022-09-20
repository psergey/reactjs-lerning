import axios from "axios";
import { Languages, IPopularPlayer, IProfile } from "../models/models";

const id = 'YOUR_CLIENT_ID';
const sec = 'YOUR_SECRET_ID';
const params = `?client_id=${id}&client_secret=${sec}`;

const PlayersProvider = {
    getPorfile: async (username: string): Promise<IProfile> => {
        const response = await axios.get(`https://api.github.com/users/${username}${params}`);
        const profile = response.data;
        return {
            id: profile.id,
            login: profile.login,
            name: profile.name,
            html_url: profile.html_url,
            avatar_url: profile.avatar_url,
            location: profile.location,
            company:  profile.company,
            blog:  profile.blog,
            followers: profile.followers,
            following: profile.following,
            public_repos: profile.public_repos,
        }
    },
   
    getRepositories: async (username: string): Promise<any[]> => {
        const response = await axios.get(`https://api.github.com/users/${username}/repos${params}`);
        return response.data;
    },
    
    populars: async (language: Languages): Promise<IPopularPlayer[]> => {
        const encodeURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);
        const response = await fetch(encodeURI);
        if (response.status === 200) {
            return (await response.json()).items.map((item: any) => ({
                id: item.owner.id,
                login: item.owner.login,
                name: item.name,
                html_url: item.owner.html_url,
                avatar_url: item.owner.avatar_url,
                stargazers_count: item.stargazers_count
            }) as IPopularPlayer);
        } else {
            throw 'Error fetching users data'
        }
    }
}

export default PlayersProvider