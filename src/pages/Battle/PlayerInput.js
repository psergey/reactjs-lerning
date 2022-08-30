import { useState } from "react";

const PlayerInput = (props) => {
    
    const [userName, setUserName] = useState('');
    const onChangeHandler = (event) => {
        setUserName(event.target.value);
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();
        props.onSubmit(props.id, userName);
    } 

    return (
        <div className={props.class}>
            <label htmlFor="">{props.label}</label>
            <input 
                type='text'
                autoComplete="off"
                placeholder="Github user"
                value={userName}
                onChange={(event) => onChangeHandler(event)} />
            <button 
                className="button"
                disabled={!userName}
                onClick={onSubmitHandler}
                >
                Choose Player
            </button>
        </div>
    )
}

export default PlayerInput;