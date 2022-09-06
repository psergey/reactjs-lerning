export const USER_ACTIONS = {
    EDIT: 'users/edit',
    SET_STATUS: 'users/toggle_status'
} 

export const editUser = (firstName, lastName) => {
    return {
        type: USER_ACTIONS.EDIT,
        payload: {
            firstName,
            lastName
        }
    }
}

export const setUserState = (isActive) => {
    return {
        type: USER_ACTIONS.SET_STATUS,
        payload: isActive
    }
}