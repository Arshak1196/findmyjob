import { useReducer, useState } from 'react';
import { Button, CircularProgress, Grid, InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { searchJobsReducer } from '../../functions/reducers';
import { JOB_SEARCH_FAILURE, JOB_SEARCH_START, JOB_SEARCH_SUCCESS } from '../../functions/types';
import * as JobsAPI from '../../api/JobRequests'
import './JobSearch.css'
import { useSelector } from 'react-redux';


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
    dispatch({ type: JOB_SEARCH_START });
      if (jobSearchTerm) {
        try {
          const result = await JobsAPI.searchJobs(key, user.token)
          console.log(result)
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
      {!jobSearchTerm &&
        <div className='bgcWhite addPost preview '>
          <img className='search-image'
            src='https://cdn.searchenginejournal.com/wp-content/uploads/2017/06/shutterstock_268688447.jpg' alt='search' />
        </div>
      }
      {loading &&
        <div className='bgcWhite addPost preview '>

          <h2>Loading...</h2>
          <CircularProgress />
        </div>
      }
      {jobSearchTerm &&
        <>
          <div className='bgcWhite addPost preview '>
            {error &&
              <>
                <h2>Something went wrong</h2>
              </>}
            {(jobs) &&
              <Grid>
                {jobs.map((job) => {
                  return (
                    <p>{job.company}</p>
                  )
                })}
              </Grid>}
          </div>
        </>
      }
    </>
  )
}

export default JobSearch