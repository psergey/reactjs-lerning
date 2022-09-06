import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser, setUserState } from "./usersActions";
import { selectCurrentUser } from "./usersSlice";

const User = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser);
    const [user, setUser] = useState(currentUser);

    const onFormSubmitHandler = (event) => {
        event.preventDefault();
        dispatch(editUser(user.firstName, user.lastName));
    }

    const onChangeHandler = (event) => {
        setUser((prevState) => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    const onUserStateChangeHanlder = (event) => {
        setUser((prevState) => {
            return {
                ...prevState,
                [event.target.name]: event.target.checked
            }
        })
        // this is for USER_ACTIONS.SET_STATUS demo.
        // all changes should be saved in store in onFormSubmitHandler
        dispatch(setUserState(event.target.checked));
    }

    return (
        <>
        <form onSubmit={onFormSubmitHandler}>
            <div>
                <label htmlFor="firstName">First Name:</label>
                <input
                    id='firstName'
                    type='text' 
                    name='firstName' 
                    value={user.firstName}
                    onChange={onChangeHandler} />
            </div>
            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input 
                    id='lastName'
                    type='text' 
                    name='lastName'
                    value={user.lastName}
                    onChange={onChangeHandler} />
            </div>
            <div>
                <label htmlFor="isActive">{!user.isActive ? 'Activate' : 'Disable'}</label>
                <input 
                    id='isActive'
                    type='checkbox' 
                    name='isActive'
                    checked={user.isActive}
                    onChange={onUserStateChangeHanlder} />
            </div>
            <button>Save</button>
        </form>        
        <span>{JSON.stringify(currentUser)}</span>
        </>
    )

}

export default User;