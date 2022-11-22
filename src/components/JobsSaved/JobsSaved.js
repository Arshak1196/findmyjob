import { useSelector } from 'react-redux'
import { CircularProgress } from '@mui/material'
import JobBox from '../JobBox/JobBox'

function JobsSaved() {
  const { savedJobs, loading, error } = useSelector((state) => state.savedJobs)
  console.log(savedJobs)
  return (
    <>
      <div className='bgcWhite post-heading'>
        <h2>SAVED JOBS</h2>
      </div>

      {loading ?
        <div className='bgcWhite addPost preview '>
          <h2>Loading...</h2>
          <CircularProgress />
        </div> : savedJobs ?
          <>
            {savedJobs.map((job) => {
              return (
                <JobBox key={job._id} job={job} />
              )
            })}
          </>
          : <div className='bgcWhite addPost preview '>
            <img className='search-image'
              src='https://cdn.searchenginejournal.com/wp-content/uploads/2017/06/shutterstock_268688447.jpg' alt='search' />
          </div>
      }

    </>
  )
}

export default JobsSaved