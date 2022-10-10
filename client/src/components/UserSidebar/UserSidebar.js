import React from 'react'
import ManageConnections from '../ManageConnections/ManageConnections'
import ManageJobs from '../ManageJobs/ManageJobs'
import PendingRequests from '../PendingRequests/PendingRequests'
import ProfileCard from '../ProfileCard/ProfileCard'
import './UserSidebar.css'


function UserSidebar({ page }) {
  if (page === 'home') {
    return (
      <div className='bck-white'>
        <ProfileCard />
        <PendingRequests />
      </div>
    )
  } else if (page === 'connection') {
    return (
      <div className='bck-white'>
        <ManageConnections />
      </div>
    )
  } else if (page === 'jobs') {
    return (
      <div className='bck-white'>
        <ManageJobs />
      </div>
    )
  }

}

export default UserSidebar