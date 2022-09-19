import classes from './PlayerPreview.module.css'

const PlayerPreview = (props:{name: string, avatarUrl: string | undefined, children: any}) => (
<div className={classes.column}>
    <img src={props.avatarUrl} className={classes.avatar} alt='Avatar' />
    <h2 className={classes.username}>{props.name}</h2>
    {props.children}
</div>
)

export default PlayerPreview;