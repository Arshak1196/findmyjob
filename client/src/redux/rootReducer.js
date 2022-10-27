import {combineReducers} from 'redux';
import authReducer from './auth/authReducers';
import jobPostReducer from './postJob/postJobReducers';
import  jobsReducer from './jobs/jobsReducers'
import savedJobsReducer from './savedJobs/savedJobsReducers';



const rootReducer = combineReducers({
    auth:authReducer,
    savedJobs:savedJobsReducer,
    postJob:jobPostReducer,
    jobs:jobsReducer,
        
})

export default rootReducer