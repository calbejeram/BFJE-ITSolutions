import { Box } from '@mui/material'
import React from 'react'
import UserDashboard from './UserDashboard'

const DashboardMain = () => {
  return (
    <Box flex={4} p={5}>
        <UserDashboard />
    </Box>
  )
}

export default DashboardMain
