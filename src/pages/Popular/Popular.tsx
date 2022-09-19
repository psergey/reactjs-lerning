import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Loader from "../../components/ui/Loader/Loader";
import LanguageSelector from "./LanguageSelector";
import Players from "./Players";
import { fetchPopularPlayers, languageChanged } from "./popularSlice";
import { Languages } from "../../models/models";
import { useAppDispatch, useAppSelector } from "../../hooks";

const Popular = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useAppDispatch()
    const { language, players, status, errorMessage } = useAppSelector(state => state.populars);

    useEffect(() => {
        dispatch(languageChanged(searchParams.get("language") ?? Languages.ALL))
    }, [searchParams]);

    useEffect(() => {
        dispatch(fetchPopularPlayers(language));
    }, [language]);
    
    const selectLanguageHandler = async (language: Languages) => {
        setSearchParams({ language: language });
        dispatch(languageChanged(language));
    }

    let content;
    if (status === 'loading')
        content = <Loader />;
    else if (status === 'error')
        content = <h1 className="error">{errorMessage ? errorMessage : "Ups, something went wrong..."}</h1>;
    else 
        content = <Players players={players} />;
    
    return (
        <>
            <LanguageSelector
                isLoading={status === 'loading'}
                selectedLanguage={language}
                onSelectLanguage={selectLanguageHandler} />
            {content}
        </>
    )
}

export default Popular;