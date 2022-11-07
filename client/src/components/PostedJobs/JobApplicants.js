import React, { useEffect, useReducer } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import DataTable from 'react-data-table-component'
import { CloudinaryContext, Transformation } from 'cloudinary-react'
import * as JobsAPI from '../../api/JobRequests'
import { fetchJobApplicantReducer } from '../../functions/reducers'
import { FETCH_JOB_APPLICANTS_FAILURE, FETCH_JOB_APPLICANTS_START, FETCH_JOB_APPLICANTS_SUCCESS } from '../../functions/types'
import { Button, CircularProgress } from '@mui/material'

function JobApplicants() {
    const { user } = useSelector((state) => state.auth)
    const { jobId } = useParams()

    const [{ loading, applicants, error }, dispatch] = useReducer(
        fetchJobApplicantReducer, {
        loading: false,
        applicants: null,
        error: false
    })

    useEffect(() => {
        getApplicants()
    }, [])

    const getApplicants = async () => {
        dispatch({ type: FETCH_JOB_APPLICANTS_START })
        try {
            const result = await JobsAPI.fetchJobApplicants(jobId, user.token)
            dispatch({ type: FETCH_JOB_APPLICANTS_SUCCESS, payload: result.data })
        } catch (error) {
            dispatch({ type: FETCH_JOB_APPLICANTS_FAILURE, payload: error.response.data.message })
        }
    }
    let columns = []
    console.log(applicants?.length)
    if (applicants?.length) {
        columns = [
            {
                name: "Name",
                selector: (row) => `${row.fname} ${row.lname}`,
                sortable: true
            },
            {
                name: "Email",
                selector: (row) => row.email,
            },
            {
                name: "Mobile",
                selector: (row) => row.phone,
            },
            {
                name: "Qualification",
                selector: (row) => row.qualification,
            },
            {
                name: "Status",
                selector: (row) => <p style={{ 'textTransform': 'capitalize' }}>{row.status}</p>
            },
            {
                name: "Resume",
                selector: (row) => 
                <>
                    <CloudinaryContext cloudName="dyhxxmucn">
                        <a href={row.resume} download>Download
                        </a>
                    </CloudinaryContext>
                </>
            }
        ]
    }



    console.log(applicants)

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
            <div className='bgcWhite post-heading' style={{ 'minHeight': '79%' }} >
                <DataTable columns={columns}
                    data={applicants ? applicants : ''}
                    pagination
                    fixedHeader
                    fixedHeaderScrollHeight='900px'
                    highlightOnHover
                    subHeader
                    style={{ "border": "1px solid" }} />
            </div>
        </>
    )
}

export default JobApplicants