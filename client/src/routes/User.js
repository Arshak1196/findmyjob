import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/user/Home'
import Login from '../pages/user/Login'
import Register from '../pages/user/Register'
import NotLoggedInUser from './NotLoggedInUser'
import LoggedInUser from './LoggedInUser'

function User() {
    return (
        <>
            <Routes>
                <Route element={<NotLoggedInUser />}>
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Route>
                <Route element={<LoggedInUser />} >
                    <Route path='/' element={<Home />} />
                </Route>
            </Routes>
        </>
    )
}

export default User