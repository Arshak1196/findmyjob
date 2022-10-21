import {combineReducers} from 'redux';
import authReducer from './auth/authReducers';
import jobPostReducer from './postJob/postJobReducers';
import  jobsReducer from './jobs/jobsReducers'



const rootReducer = combineReducers({
    auth:authReducer,
    postJob:jobPostReducer,
    jobs:jobsReducer,
        
})

export default rootReducer