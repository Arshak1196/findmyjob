import { combineReducers } from 'redux';
import authReducer from './auth/authReducers';
import jobPostReducer from './postJob/postJobReducers';
import jobsReducer from './jobs/jobsReducers'
import savedJobsReducer from './savedJobs/savedJobsReducers';
import appliedJobsReducer from './appliedJobs/appliedJobsReducers'

const rootReducer = combineReducers({
    auth: authReducer,
    savedJobs: savedJobsReducer,
    appliedJobs:appliedJobsReducer,
    postJob: jobPostReducer,
    jobs: jobsReducer,

})

export default rootReducer