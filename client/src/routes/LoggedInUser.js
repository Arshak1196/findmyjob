import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Login from '../pages/user/Login'

function LoggedInUser() {
    const user = useSelector((state) => state.auth.user)
    return user ? <Outlet /> : <Login />
}

export default LoggedInUser