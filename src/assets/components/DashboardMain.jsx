import React from 'react'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom';
import DashboardNavbar from './DashboardNavbar';



const DashboardMain = () => {
  return (
    <Box flex={4}>
        <Outlet/>
    </Box>
  )
}

export default DashboardMain;
