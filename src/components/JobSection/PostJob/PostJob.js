import PostJobForm from '../PostJobForm/PostJobForm'
import './PostJob.css'

function PostJob() {
  return (
    <>
    <div className='bgcWhite post-heading'>
        <h2>POST A JOB</h2>
    </div>
    <div className='bgcWhite post-heading'>
        <PostJobForm/>
    </div>
    </>
  )
}

export default PostJob