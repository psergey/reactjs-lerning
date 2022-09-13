import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/ui/Loader/Loader';
import Player from './Player';
import classes from './FighterSelector.module.css'
import { fight } from './fightSlice';

const Results = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const { status, fightResults, errorMessage } = useSelector(state => state.fight);

    useEffect(() => {
        dispatch(fight([...searchParams.values()]))
    }, [dispatch, searchParams])
    
    return (
        <>
            {status === 'error' && 
                <div>
                    <h1 className="error">{errorMessage}</h1>
                    <Link to="/battle" className="button">Back to Players</Link>
                </div>
            }
            {status === 'loading' ? 
                <Loader /> :     
                !status !== 'error' && fightResults.length === 2 && <div className={classes.row}>
                <Player
                    status={fightResults[0].score === fightResults[1].score ? 'draw' : 'winner'}
                    score={fightResults[0].score}
                    profile={fightResults[0].profile} />
                <Player
                    status={fightResults[0].score === fightResults[1].score ? 'draw' : 'loser'}
                    score={fightResults[1].score}
                    profile={fightResults[1].profile} />
            </div>}
        </>
    )
}

export default Results;