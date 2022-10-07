import React from 'react';
import classes from './PlayerPreview.module.css'

const PlayerPreview: React.FC<{name: string, avatarUrl: string | undefined, children: JSX.Element}> = (props): JSX.Element => (
<div className={classes.column}>
    <img src={props.avatarUrl} className={classes.avatar} alt='Avatar' />
    <h2 className={classes.username}>{props.name}</h2>
    {props.children}
</div>
)

export default PlayerPreview;