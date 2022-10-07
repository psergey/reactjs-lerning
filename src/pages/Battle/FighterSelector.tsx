import { Link, useLocation } from "react-router-dom";
import PlayerInput from "./PlayerInput";
import PlayerPreview from "./PlayerPreview";
import classes from './FighterSelector.module.css'
import { playerSelected, playerReset } from "./playersSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { FighterIds } from "./models/models";

const FighterSelector: React.FC = (): JSX.Element => {
    const location = useLocation();
    const dispatch = useAppDispatch();
    const { player1, player2 } = useAppSelector(state => state.players);
    
    const onSubmitHandler = (id: FighterIds, name: string): void => {
        dispatch(playerSelected({id, name}));
    }

    const onResetHandler = (id: FighterIds): void => {
        dispatch(playerReset(id))
    }

    return (
    <form>
        <div className={classes.row}>
            {!player1 ? 
                <PlayerInput 
                    id="player1"
                    label="Player 1"
                    className={classes.column}
                    onSubmit={onSubmitHandler} 
                /> :
                <PlayerPreview 
                    name={player1.name}
                    avatarUrl={player1.imageUrl}>
                    <button className={classes.reset} onClick={() => onResetHandler('player1')}>Reset</button> 
                </PlayerPreview>
            }
            {!player2 ? 
                <PlayerInput 
                    id="player2"
                    label="Player 2"
                    className={classes.column}
                    onSubmit={onSubmitHandler} 
                /> :
                <PlayerPreview 
                    name={player2.name}
                    avatarUrl={player2.imageUrl}>
                    <button className={classes.reset} onClick={() => onResetHandler('player2')}>Reset</button> 
                </PlayerPreview>
            }            
        </div>
        {player1 && player2 && 
            <Link className="button" 
                to={{
                    pathname: `${location.pathname}/results`,
                    search: `firstPlayer=${player1.name}&secondPlayer=${player2.name}`
                }}>
                Fight
            </Link>} 
    </form>           
    )
}

export default FighterSelector;