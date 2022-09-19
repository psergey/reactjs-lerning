import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Loader from '../../components/ui/Loader/Loader';
import Player from './Player';
import classes from './FighterSelector.module.css'
import { fight } from './fightSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';

const Results: React.FC = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useAppDispatch();
    const { status, fightResults, errorMessage } = useAppSelector(state => state.fight);
    
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
                status === 'idle' && fightResults.length === 2 && <div className={classes.row}>
                <Player
                    status={fightResults[0].score === fightResults[1].score ? 'draw' : 'win'}
                    score={fightResults[0].score}
                    profile={fightResults[0].profile} />
                <Player
                    status={fightResults[0].score === fightResults[1].score ? 'draw' : 'loose'}
                    score={fightResults[1].score}
                    profile={fightResults[1].profile} />
            </div>}
        </>
    )
}

export default Results;