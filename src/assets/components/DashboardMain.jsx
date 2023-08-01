import { Box } from '@mui/material'
import React from 'react'
import UserInfo from './UserInfo';


const DashboardMain = () => {
  return (
    <Box flex={4} p={5}>
        
        <UserInfo />
    </Box>
  )
}

export default DashboardMain;
