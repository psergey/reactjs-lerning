import PlayerPreview from "./PlayerPreview";
import classes from './Player.module.css';
import { IProfile } from "../../models/models";
import { FightStatus } from "./models/models";

interface Props {
    status: FightStatus
    score: number
    profile: IProfile
}

const Player: React.FC<Props> = ({status, score, profile}) => {
    return (
        <div className={classes.column}>
            <h2 className={classes.status + ' ' + classes[status]}>{status}</h2>
            <h3 style={{textAlign: 'center'}}>Score: {score}</h3>
            <PlayerPreview 
                name={profile.login}
                avatarUrl={profile.avatar_url}>
                <ul className={classes['profile-items']}>
                    {profile.name && <li>{profile.name}</li>}
                    {profile.location && <li>{profile.location}</li>}
                    {profile.company && <li>{profile.company}</li>}
                    <li>Followers: {profile.followers}</li>
                    <li>Following: {profile.following}</li>
                    <li>Public Repos: {profile.public_repos}</li>
                    {profile.blog && <li><a href={profile.blog}>{profile.blog}</a></li>}
                </ul>
            </PlayerPreview>
        </div>
    )
}

export default Player;