import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/user/Home'
import Login from '../pages/user/Login'
import Register from '../pages/user/Register'
import NotLoggedInUser from './NotLoggedInUser'
import LoggedInUser from './LoggedInUser'
import Connection from '../pages/user/Connection'
import Jobs from '../pages/user/Jobs'
import { useDispatch, useSelector } from 'react-redux'
import { fetchJobs } from '../redux/jobs/jobsActions'
import { fetchSavedJobs } from '../redux/savedJobs/savedJobsActions'
import { fetchAppliedJobs } from '../redux/appliedJobs/appliedJobsActions'

function User() {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
    const { loading } = useSelector((state) => state.postJob)
    useEffect(() => {
        if (user) {
            dispatch(fetchJobs(user.token))
        }
    }, [loading, user])
    useEffect(() => {
        if (user) {
            dispatch(fetchSavedJobs(user.token))
        }
    }, [user])
    useEffect(()=>{
        if(user){
            dispatch(fetchAppliedJobs(user.token))
        }
    },[user])

    
    return (
        <>
            <Routes>
                <Route element={<NotLoggedInUser />} >
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Route >
                <Route element={<LoggedInUser />} >
                    <Route exact path='/' element={<Home />} />

                    <Route path='/connections' element={<Connection page='friends' />} />
                    <Route path='/connections/requests' element={<Connection page='requests' />} />

                    <Route path='/jobs' element={<Jobs section='search' />} />
                    <Route path='/jobs/saved' element={<Jobs section='save' />} />
                    <Route path='/jobs/details/:jobId' element={<Jobs section='detail' />} />
                    <Route path='/jobs/appliedjobs' element={<Jobs section='applied' />} />

                    <Route path='/post-job' element={<Jobs section='post' />} />
                    <Route path='/postedJobs' element={<Jobs section='posted' />} />
                    <Route path='/postedJobs/:jobId' element={<Jobs section='applicants' />} />
                </Route>
            </Routes>
        </>
    )
}

export default User