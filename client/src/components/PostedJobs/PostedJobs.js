import * as React from 'react';
import DataTable from 'react-data-table-component'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify'
import { Button, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import * as JobsAPI from '../../api/JobRequests'
import { closeAppliedJob, openAppliedJob } from '../../redux/jobs/jobsActions';

function PostedJobs() {
    const { user } = useSelector((state) => state.auth)
    let { jobs, loading } = useSelector((state) => state.jobs)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleJobStatus = async (id) => {
        try {
            let status = await JobsAPI.changeJobStatus(id, user.token)
            if (status.data.open) {
                toast.success('Job is open for Users')
                dispatch(openAppliedJob(id))                
            } else {
                toast.warn('Job is Closed, Users can`t further apply for this Job')
                dispatch(closeAppliedJob(id))
            }
        } catch (error) {
            console.log(error)
            toast.warn(error.response.data.message)
        }
    }

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
            name: "Applicants",
            selector: (row) => row.applicationStatus.length,
        },
        {
            name: "Options",
            selector: (row) => <Button onClick={() => { handleJobStatus(row._id) }}>{(row.isOpen) ? 'Close' : 'Open'}</Button>,
        },
        {
            name: "Applicants",
            selector: (row) => <><Button onClick={() => { navigate(`/postedJobs/${row._id}`) }}>Applicants</Button></>
        }
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
            <div className='bgcWhite post-heading' style={{ 'minHeight': '79%' }}>
                <DataTable columns={columns}
                    data={jobs}
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


export default PostedJobs
