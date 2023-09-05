import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import styled from '@emotion/styled';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import EmailIcon from '@mui/icons-material/Email';

const DashboardSidebar = () => {
    const [open, setOpen] = useState('');
    const toggle = (id) => {
        if (open === id) {
        setOpen();
        } else {
        setOpen(id);
        }
    };

    const AdminDashboardLink = styled(Link)({
      '&:hover': {
        backgroundColor: 'lightgray'
      }
    })

  return (
    <Box className="dashboardSidebar position-fixed" width='400px' p={2} sx={{display: {xs: "none", sm: "block"}}} height='100vh'>
      <Box pt={10} width='100%'>
        <Typography variant='h5' className='mb-4 fw-bold'><AdminPanelSettingsIcon/>ADMIN PANEL</Typography>
        <AdminDashboardLink to="/admin" className='btn p-3 border-bottom rounded-0 mb-3 d-flex align-items-center'><HomeIcon className='me-2'/>Admin Dashboard</AdminDashboardLink>
        <AdminDashboardLink to="/admin/customers-list" className='btn p-3 border-bottom rounded-0 mb-3 d-flex align-items-center'><PeopleAltIcon className='me-2'/>Customers</AdminDashboardLink>
        <AdminDashboardLink to="/admin/orders-list" className='btn p-3 border-bottom rounded-0 mb-3 d-flex align-items-center'><ProductionQuantityLimitsIcon className='me-2'/>Orders</AdminDashboardLink>
        <AdminDashboardLink to="/admin/messages-list" className='btn p-3 border-bottom rounded-0 mb-3 d-flex align-items-center'><EmailIcon className='me-2'/>Messages</AdminDashboardLink>
      </Box>
    </Box>
  )
}

export default DashboardSidebar;
