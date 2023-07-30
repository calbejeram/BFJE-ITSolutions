import { Box, Stack } from '@mui/material';
import React from 'react';
import DashboardNavbar from '../components/DashboardNavbar';
import DashboardSidebar from '../components/DashboardSidebar';
import DashboardMain from '../components/DashboardMain';

const Dashboard = () => {
  return (
    <Box>
        <DashboardNavbar/>
        <Stack direction='row'>
            <DashboardSidebar/>
            <DashboardMain/>
        </Stack>
    </Box>
  );
};

export default Dashboard;
