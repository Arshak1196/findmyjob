import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

function NotLoggedInUser() {
    const user = useSelector((state) => state.auth.user)
    return user ? <Navigate to='/' /> : <Outlet/>
}

export default NotLoggedInUser