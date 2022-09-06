import { USER_ACTIONS } from "./usersActions";

const initialState = {
    firstName: 'John',
    lastName: 'Doe',
    isActive: true
}

const usersReducer = (state = initialState, action) => {
    if (action.type === USER_ACTIONS.EDIT) {
        const user = action.payload
        return {
            ...state,
            firstName: user.firstName,
            lastName: user.lastName,
        }
    }

    if (action.type === USER_ACTIONS.SET_STATUS) {
        return {
            ...state,
            isActive: action.payload
        }
    }
    
    return state;
}

export default usersReducer;

export const selectCurrentUser = (state) => state.users;