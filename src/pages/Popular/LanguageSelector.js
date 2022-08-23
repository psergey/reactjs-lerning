import classes from './LanguageSelector.module.css'

const LanguageSelector = ({isLoading, selectedLanguage, onSelectLanguage}) => {
    const Languages = ["ALL", "Javascript", "CSS", "Ruby", "Java", "Python"];
    return (
        <ul className={classes.languages}>
            {Languages.map(language => (
                <li 
                    key={language}
                    className={selectedLanguage === language ? classes.active : null}
                    onClick={ !(isLoading || selectedLanguage === language) ? () => onSelectLanguage(language) : null }>
                    {language}
                </li>)
            )}
        </ul>
    );
}

export default LanguageSelector;