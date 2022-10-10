import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/user/Home'
import Login from '../pages/user/Login'
import Register from '../pages/user/Register'
import NotLoggedInUser from './NotLoggedInUser'
import LoggedInUser from './LoggedInUser'
import Connection from '../pages/user/Connection'
import Jobs from '../pages/user/Jobs'

function User() {
    return (
        <>
            <Routes>
                <Route element={<NotLoggedInUser/>} >
                    <Route path='/login' element={<Login/>} />
                    <Route path='/register' element={<Register/>} />
                </Route >
                <Route element={<LoggedInUser/>} >
                    <Route exact path='/' element={<Home/>} />
                    <Route path='/connections' element={<Connection page='friends'/>} />
                    <Route path='/connections/requests' element={<Connection page='requests'/>} />
                    <Route path='/jobs' element={<Jobs/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default User