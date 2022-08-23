import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Loader from "../../components/ui/Loader/Loader";
import LanguageSelector from "./LanguageSelector";
import Players from "./Players";
import PlayersProvider from "./services/playersApi";

const Popular = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [selectedLanguage, setLanguage] = useState();
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);
    const [playersInfo, setPlayersInfo] = useState([]);

    useEffect(() => {
        const getPopulars = async () => {
            try
            {
                const language = searchParams.get("language") ?? "ALL";
                setLanguage(language);

                const data = await PlayersProvider.populars(language);
                setPlayersInfo(data);
            }
            catch
            {
                setError(true);
                setPlayersInfo([]);
            }
            finally
            {
                setLoading(false);
            }
        }

        getPopulars();
    }, [searchParams]);
    
    const selectLanguageHandler = async (language) => {
        try
        {
            setLoading(true);
            setError(false);
            setLanguage(language);
            setSearchParams({ language: language });

            const data = await PlayersProvider.populars(language);
            setPlayersInfo(data);
        }
        catch {
            setError(true);
            setPlayersInfo([]);
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <>
            <LanguageSelector
                isLoading={isLoading}
                selectedLanguage={selectedLanguage}
                onSelectLanguage={selectLanguageHandler} />
            {isLoading ? <Loader /> : (playersInfo.length > 0 && <Players playersInfo={playersInfo} />)}
            {isError && <h1 className="error">Ups, something went wrong...</h1>}
        </>
    )
}

export default Popular;