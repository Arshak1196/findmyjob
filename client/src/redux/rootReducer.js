import {combineReducers} from 'redux';
import authReducer from './auth/authReducers';


const rootReducer = combineReducers({
    auth:authReducer,
})

export default rootReducer