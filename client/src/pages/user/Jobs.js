import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import AppliedJobs from '../../components/AppliedJobs/AppliedJobs'
import Footer from '../../components/Footer/Footer'
import JobDetails from '../../components/JobDetails/JobDetails'
import JobSearch from '../../components/JobSearch/JobSearch'
import JobsSaved from '../../components/JobsSaved/JobsSaved'
import NavBar from '../../components/NavBar/NavBar'
import PostedJobs from '../../components/PostedJobs/PostedJobs'
import PostJob from '../../components/PostJob/PostJob'
import UserSidebar from '../../components/UserSidebar/UserSidebar'

function Jobs({ section }) {
  return (
    <Grid container style={{ backgroundColor: 'rgba(0, 0, 0, 0.22)' }}>
      <NavBar />
      <Grid container >
        <Grid item md={3} sx={{ width: '100%' }}>
          <UserSidebar page={'jobs'} />
        </Grid>
        <Grid item md={7}>
          <Container sx={{ pt: '2.5rem', overflowY: 'scroll', height: '90.3vh' }}>
            {(section === 'search') && <JobSearch />}
            {(section === 'save') && <JobsSaved />}
            {(section === 'detail') && <JobDetails />}
            {(section === 'applied') && < AppliedJobs />}
            {(section === 'post') && <PostJob />}
            {(section === 'posted') && < PostedJobs />}

          </Container>
        </Grid>
        <Grid item md={2}>
          <Footer />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Jobs