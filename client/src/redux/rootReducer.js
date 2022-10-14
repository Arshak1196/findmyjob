import {combineReducers} from 'redux';
import authReducer from './auth/authReducers';
import jobPostReducer from './postJob/postJobReducers';


const rootReducer = combineReducers({
    auth:authReducer,
    job:jobPostReducer
})

export default rootReducer