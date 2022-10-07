import React, { ChangeEvent, MouseEvent, useState } from "react";

interface Props 
{
    id: string
    label: string
    className: string
    onSubmit(id: string, name: string): void
}

const PlayerInput: React.FC<Props> = ({id, label, className, onSubmit}): JSX.Element => {
    
    const [userName, setUserName] = useState<string>('');
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void  => {
        setUserName(event.target.value);
    }
    const onSubmitHandler = (event: MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        onSubmit(id, userName);
    } 

    return (
        <div className={className}>
            <label htmlFor="">{label}</label>
            <input 
                type='text'
                autoComplete="off"
                placeholder="Github user"
                value={userName}
                onChange={(event) => onChangeHandler(event)} />
            <button 
                className="button"
                disabled={!userName}
                onClick={onSubmitHandler}>
                Choose Player
            </button>
        </div>
    )
}

export default PlayerInput;