import React from 'react';
import { IPopularPlayer } from '../../models/models';
import classes from './Players.module.css'

const Players: React.FC<{players: IPopularPlayer[]}> = ({players}) => {
    return (
        <ul className={classes['popular-list']}>
            {players.map(function (player, index) {
                return (
                    <li key={player.name} className={classes['popular-item']}>
                        <div className={classes['popular-rank']}>#{index + 1}</div>
                        <ul className={classes['space-list-items']}>
                            <li>
                                <img 
                                    className={classes.avatar}
                                    src={player.avatar_url} 
                                    alt={'Avatar for ' + player.login}
                                />
                            </li>
                            <li><a href={player.html_url}>{player.name}</a></li>
                            <li>@{player.login}</li>
                            <li>{player.stargazers_count} start</li>
                        </ul>
                    </li>     
                )
            })}
        </ul>        
    );
}

export default Players;