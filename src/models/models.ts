export enum Languages {
    "ALL" = "ALL",
    "Javascript" = "Javascript",
    "CSS" = "CSS",
    "Ruby" = "Ruby",
    "Java" = "Java",
    "Python" = "Python",
}

export interface IPlayer {
    id: number;
    login: string;
    name: string;
    html_url: string;
    avatar_url: string;
}

export interface IPopularPlayer extends IPlayer {
    stargazers_count: number;
}

export interface IProfile extends IPlayer {
    followers: number
    following: number
    company: string
    location: string
    blog: string
    public_repos: number
}

export type LoadingState = 'idle' | 'loading' | 'error';