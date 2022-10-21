import * as React from 'react';
import DataTable from 'react-data-table-component'
import { useSelector } from 'react-redux';

import { Button, CircularProgress } from '@mui/material';

function PostedJobs() {
   
    let { jobs, loading } = useSelector((state) => state.jobs)

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
            name: " No .of Applicants",
            selector: (row) => row.applicationStatus.length,
        },
        {
            name: " Status",
            selector: (row) => (row.isOpen) ? 'Open':'Close',
        },
        {
            name: "View",
            selector: (row) => <><Button>Details</Button></>
        },
        {
            name: "Applicants",
            selector: (row) => <><Button>Applicants</Button></>
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
            <div className='bgcWhite post-heading'>
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
