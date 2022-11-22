import { useReducer, useState } from 'react';
import { Button, CircularProgress, InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';
import { searchJobsReducer } from '../../functions/reducers';
import { JOB_SEARCH_FAILURE, JOB_SEARCH_START, JOB_SEARCH_SUCCESS } from '../../functions/types';
import * as JobsAPI from '../../api/JobRequests'
import JobBox from '../JobBox/JobBox';
import './JobSearch.css'


function JobSearch() {
  const { user } = useSelector((state) => state.auth)
  const [jobSearchTerm, setJobSearchTerm] = useState('')
  let [{ loading, jobs, error }, dispatch] = useReducer(
    searchJobsReducer,
    {
      loading: false,
      jobs: null,
      error: false
    }
  )


  const jobSearch = async () => {
    const key = { designation: jobSearchTerm }
    if (jobSearchTerm) {
      dispatch({ type: JOB_SEARCH_START });
      try {
        const result = await JobsAPI.searchJobs(key, user.token)
        dispatch({ type: JOB_SEARCH_SUCCESS, payload: result.data })
      } catch (error) {
        dispatch({ type: JOB_SEARCH_FAILURE, payload: error.response.data.message })
      }
    }
  };

  return (
    <>
      <div className='bgcWhite addPost'>
        <h3>Serch for jobs</h3>
        <TextField
          size='small'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant='outlined'
          sx={{ borderRadius: '8px', mb: 2, mt: 1, width: '80%', mr: 3 }}
          placeholder='Designation'
          value={jobSearchTerm}
          onChange={(e) => setJobSearchTerm(e.target.value)}
        />
        <Button
          className='search-btn'
          size='small'
          variant='contained'
          onClick={jobSearch}
          sx={{ backgroundColor: 'rgba(53, 75, 152, 0.82)', px: 3, mt: 1.5 }}>
          Search
        </Button>
      </div>
      <hr />

      {loading ?
        <div className='bgcWhite addPost preview '>
          <h2>Loading...</h2>
          <CircularProgress />
        </div>
        : error ?
          <div className='bgcWhite addPost preview '>
            <h2>Something went wrong</h2>
          </div>
          : jobs ?
            <>
              {(jobs.length) ? <>
                {jobs.map((job) => {
                  return (
                    <JobBox key={job._id} job={job} />
                  )
                })}
              </> :
                <div className='bgcWhite addPost preview '>
                  <h2>No results found</h2>
                </div>}
            </>
            : <div className='bgcWhite addPost preview '>
              <img className='search-image'
                src='https://cdn.searchenginejournal.com/wp-content/uploads/2017/06/shutterstock_268688447.jpg' alt='search' />
            </div>

      }

    </>
  )
}

export default JobSearch