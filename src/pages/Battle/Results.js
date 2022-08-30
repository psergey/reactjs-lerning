import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Loader from '../../components/ui/Loader/Loader';
import Player from './Player';
import { fight } from './services/ResultService';
import classes from './FighterSelector.module.css'

const Results = () => {
    const [searchParams] = useSearchParams();
    const [playersResult, setPlayersResult] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const doFight = async () => {
            try
            {
                setLoading(true);
                setError(null);

                const results = await fight([...searchParams.values()]);
                setPlayersResult(results);   
            }
            catch(ex) {
                setError('Unable to get result!');
            }
            finally
            {
                setLoading(false);
            }
        }

        doFight();
    }, []);

    return (
        <>
            {error && 
                <div>
                    <h1 className="error">{error}</h1>
                    <Link to="/battle" className="button">Back to Players</Link>
                </div>
            }
            {isLoading ? 
                <Loader /> :     
                !error && <div className={classes.row}>
                <Player
                    status={playersResult[0].score === playersResult[1].score ? 'draw' : 'winner'}
                    score={playersResult[0].score}
                    profile={playersResult[0].profile} />
                <Player
                    status={playersResult[0].score === playersResult[1].score ? 'draw' : 'loser'}
                    score={playersResult[1].score}
                    profile={playersResult[1].profile} />
            </div>}
        </>
    )
}

export default Results;