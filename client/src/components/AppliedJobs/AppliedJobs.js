import React from 'react'
import { useSelector } from 'react-redux'
import DataTable from 'react-data-table-component'
import { Button, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function AppliedJobs() {
  let { appliedJobs, loading } = useSelector((state) => state.appliedJobs)
  const navigate = useNavigate()

  const columns = [
    {
      name: "Company",
      selector: (row) => row.company,
      sortable: true
    },
    {
      name: "Designation",
      selector: (row) => row.designation,
    },
    {
      name: "View",
      selector: (row) => <><Button onClick={()=>{navigate(`/jobs/details/${row._id}`)}}>Details</Button></>
    },
    {
      name: " Status",
      selector: (row) => row.applicationStatus.status,
    },

  ] 


  if (loading) {
    return <div className='bgcWhite post-heading'>
      <h2>Loading...</h2>
      <CircularProgress />
    </div>
  }
  return (
    <>
      <div className='bgcWhite post-heading'>
        <h2>MANAGE YOUR APPLICATIONS</h2>
      </div>
      <div className='bgcWhite post-heading'>
        <DataTable columns={columns}
          data={appliedJobs}
          pagination
          fixedHeader
          fixedHeaderScrollHeight='900px'
          highlightOnHover
          persistTableHead
          subHeader
          style={{ "border": "1px solid" }} />
      </div>
    </>
  )
}

export default AppliedJobs