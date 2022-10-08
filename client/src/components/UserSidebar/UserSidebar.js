import React from 'react'
import PendingRequests from '../PendingRequests/PendingRequests'
import ProfileCard from '../ProfileCard/ProfileCard'
import './UserSidebar.css'


function UserSidebar() {
  return (
    <div className='bck-white'>
        <ProfileCard/>
        <PendingRequests/>
    </div>
  )
}

export default UserSidebar