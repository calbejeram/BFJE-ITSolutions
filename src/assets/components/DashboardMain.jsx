import { Box } from '@mui/material'
import React from 'react'
import UserDashboard from './UserDashboard'

const DashboardMain = (props) => {
  return (
    <Box flex={4}>
        {props=<UserDashboard/>}
    </Box>
  )
}

export default DashboardMain
