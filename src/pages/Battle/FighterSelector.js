import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PlayerInput from "./PlayerInput";
import PlayerPreview from "./PlayerPreview";
import classes from './FighterSelector.module.css'

const FighterSelector = () => {
    const [players, setPlayers] = useState({
        'player1': null,
        'player2': null,
    });
    const location = useLocation();

    const onSubmitHandler = (id, userName) => {
        setPlayers({
            ...players,
            [id]: {
                id,
                name: userName,
                imageUrl: `https://github.com/${userName}.png?size=200`
            }
        });
    }

    const onResetHandler = (id) => {
        setPlayers({
            ...players,
            [id]: null
        });
    }

    return (
    <form>
        <div className={classes.row}>
            {!players['player1'] ? 
                <PlayerInput 
                    id="player1"
                    label="Player 1"
                    class={classes.column}
                    onSubmit={onSubmitHandler} 
                /> :
                <PlayerPreview 
                    name={players['player1'].name}
                    avatarUrl={players['player1'].imageUrl}>
                    <button className={classes.reset} onClick={() => onResetHandler('player1')}>Reset</button> 
                </PlayerPreview>
            }
            {!players['player2'] ? 
                <PlayerInput 
                    id="player2"
                    label="Player 2"
                    class={classes.column}
                    onSubmit={onSubmitHandler} 
                /> :
                <PlayerPreview 
                    name={players['player2'].name}
                    avatarUrl={players['player2'].imageUrl}>
                    <button className={classes.reset} onClick={() => onResetHandler('player2')}>Reset</button> 
                </PlayerPreview>
            }            
        </div>
        {players['player1'] && players['player2'] && 
            <Link className="button" 
                to={{
                    pathname: `${location.pathname}/results`,
                    search: `firstPlayer=${players['player1'].name}&secondPlayer=${players['player2'].name}`
                }}>
                Fight
            </Link>} 
    </form>           
    )
}

export default FighterSelector;