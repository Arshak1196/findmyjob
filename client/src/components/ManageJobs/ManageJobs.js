import React, { useState } from 'react'
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import WorkIcon from '@mui/icons-material/Work';
import NextWeekIcon from '@mui/icons-material/NextWeek';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom'
import './ManageJobs.css'

function ManageJobs() {
    const navigate = useNavigate()
    const [open, setOpen] = useState(true);
    const handleClick = () => {
        setOpen(!open);     
    };
    const [open1, setOpen1] = useState(false);
    const handleClick1 = () => {
        setOpen1(!open1);
    };
    return (
        <div className='connection'>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <WorkIcon />
                    </ListItemIcon>
                    <ListItemText primary="Apply for a Job" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }} onClick={()=>{navigate('/jobs')}}>
                            <ListItemText primary="Search" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText primary="Saved Jobs" onClick={()=>{navigate('/jobs/saved')}}/>
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText primary="View My Applications" />
                        </ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton onClick={handleClick1}>
                    <ListItemIcon>
                        <NextWeekIcon />
                    </ListItemIcon>
                    <ListItemText primary="Post a Job" />
                    {open1 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open1} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }} onClick={()=>{navigate('/post-job')}}>
                            <ListItemText primary="Post new Job" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} onClick={()=>{navigate('/postedJobs')}}>
                            <ListItemText primary="Manage your Applications" />
                        </ListItemButton>
                    </List>
                </Collapse>

            </List>
        </div>
    )
}

export default ManageJobs