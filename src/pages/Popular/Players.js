import classes from './Players.module.css'

const Players = (props) => {
    return (
        <ul className={classes['popular-list']}>
            {props.playersInfo.map(function (info, index) {
                return (
                    <li key={info.name} className={classes['popular-item']}>
                        <div className={classes['popular-rank']}>#{index + 1}</div>
                        <ul className={classes['space-list-items']}>
                            <li>
                                <img 
                                    className={classes.avatar}
                                    src={info.owner.avatar_url} 
                                    alt={'Avatar for ' + info.owner.login}
                                />
                            </li>
                            <li><a href={info.html_url}>{info.name}</a></li>
                            <li>@{info.owner.login}</li>
                            <li>{info.stargazers_count} start</li>
                        </ul>
                    </li>     
                )
            })}
        </ul>        
    );
}

export default Players;