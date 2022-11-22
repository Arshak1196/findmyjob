import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ManageConnections.css'

function ManageConnections() {
  const navigate=useNavigate()
  return (
    <div className='connection'>
      <h3 className='connection-heading'>Manage my network</h3>
      <Button
        sx={{ mb: 1 }}
        onClick={()=>navigate('/connections')}>
        My Friends
      </Button>
      <br />
      <Button
      onClick={()=>navigate('/connections/requests')}>
        Pending Requests
      </Button>
    </div>
  )
}

export default ManageConnections