import { combineReducers } from 'redux'
import usersReducer from './pages/users/usersSlice';

const rootReducer = combineReducers({
    users: usersReducer
  })

export default rootReducer;