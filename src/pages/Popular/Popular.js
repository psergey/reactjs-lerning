import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/ui/Loader/Loader";
import LanguageSelector from "./LanguageSelector";
import Players from "./Players";
import { fetchPopularPlayers, languageChanged } from "./popularSlice";

const Popular = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();
    const { language, playersInfo, status, errorMessage } = useSelector(state => state.populars);

    useEffect(() => {
        dispatch(languageChanged(searchParams.get("language") ?? "ALL"))
    }, [searchParams]);

    useEffect(() => {
        dispatch(fetchPopularPlayers(language));
    }, [language]);
    
    const selectLanguageHandler = async (language) => {
        setSearchParams({ language: language });
        dispatch(languageChanged(language));
    }

    let content;
    if (status === 'loading')
        content = <Loader />;
    else if (status === 'error')
        content = <h1 className="error">{errorMessage ? errorMessage : "Ups, something went wrong..."}</h1>;
    else 
        content = <Players playersInfo={playersInfo} />;
    
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