export enum Languages {
    "ALL" = "ALL",
    "Javascript" = "Javascript",
    "CSS" = "CSS",
    "Ruby" = "Ruby",
    "Java" = "Java",
    "Python" = "Python",
}

export interface Player {
    id: number;
    login: string;
    name: string;
    html_url: string;
    avatar_url: string;
}

export interface PopularPlayer extends Player {
    stargazers_count: number;
}

export interface Profile extends Player {
    followers: number
    following: number
    company: string
    location: string
    blog: string
    public_repos: number
}

export type LoadingState = 'idle' | 'loading' | 'error';