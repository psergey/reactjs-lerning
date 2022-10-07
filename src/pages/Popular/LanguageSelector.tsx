import React from 'react';
import { Languages } from '../../models/models';
import classes from './LanguageSelector.module.css'

interface Props
{
    isLoading: boolean;
    selectedLanguage: Languages,
    onSelectLanguage(language: Languages): void
}

const LanguageSelector: React.FC<Props> = ({isLoading, selectedLanguage, onSelectLanguage}): JSX.Element => {
    return (
        <ul className={classes.languages}>
            {Object.values(Languages).map(language => (
                <li 
                    key={language}
                    className={selectedLanguage === language ? classes.active : null}
                    onClick={ !(isLoading || selectedLanguage === language) ? () => onSelectLanguage(language) : undefined }>
                    {language}
                </li>)
            )}
        </ul>
    );
}

export default LanguageSelector;