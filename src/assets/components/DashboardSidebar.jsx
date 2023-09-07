import React, { useEffect, useState } from 'react';
import { Box, Typography, Badge } from '@mui/material';
import { Link } from "react-router-dom";
import styled from '@emotion/styled';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EmailIcon from '@mui/icons-material/Email';
import LoyaltyIcon from '@mui/icons-material/Loyalty';

const DashboardSidebar = () => {
    const [emails, setEmails] = useState(
      JSON.parse(localStorage.getItem("ContactForm")) || []
    );

    useEffect(() => {
        // Save the customers data to localStorage whenever it changes
        localStorage.setItem("ContactForm", JSON.stringify(emails));
    }, [emails]);

    const [customersDetails, setCustomersDetails] = useState(
      JSON.parse(localStorage.getItem("ServiceSection")) || []
    );

    useEffect(() => {
        // Save the customers data to localStorage whenever it changes
        localStorage.setItem("ServiceSection", JSON.stringify(customersDetails));
    }, [customersDetails]);

    const [subscribers, setSubscribers] = useState(
      JSON.parse(localStorage.getItem("Footer")) || []
    );

    useEffect(() => {
        // Save the customers data to localStorage whenever it changes
        localStorage.setItem("Footer", JSON.stringify(subscribers));
    }, [subscribers]);


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
    <>
      <Box className="dashboardSidebar position-fixed h-100 p-3 d-none d-lg-block">
          <Box pt={10}>
            <Typography variant='h5' className='mb-4 fw-bold d-flex'><AdminPanelSettingsIcon/><span className='d-none d-xl-block'>ADMIN PANEL</span></Typography>
            <AdminDashboardLink to="/admin" className='btn p-3 border-bottom rounded-0 mb-3 d-flex align-items-center fw-bold fs-5'><HomeIcon className='me-2'/><span className='d-none d-xl-block'>Admin Dashboard</span></AdminDashboardLink>
            <AdminDashboardLink to="/admin/customers-list" className='btn p-3 border-bottom rounded-0 mb-3 d-flex align-items-center'><Badge badgeContent={customersDetails.length} color="error" className='me-3'><PeopleAltIcon color="black"/></Badge><span className='d-none d-xl-block'>Customers</span></AdminDashboardLink>
            {/* <AdminDashboardLink to="/admin/orders-list" className='btn p-3 border-bottom rounded-0 mb-3 d-flex align-items-center'><Badge badgeContent={4} color="error" className='me-3'><ShoppingCartIcon color="black"/></Badge><span className='d-none d-xl-block'>Orders</span></AdminDashboardLink> */}
            <AdminDashboardLink to="/admin/messages-list" className='btn p-3 border-bottom rounded-0 mb-3 d-flex align-items-center'><Badge badgeContent={emails.length} color="error" className='me-3'><EmailIcon color="black"/></Badge><span className='d-none d-xl-block'>Messages</span></AdminDashboardLink>
            <AdminDashboardLink to="/admin/subscribers-list" className='btn p-3 border-bottom rounded-0 mb-3 d-flex align-items-center'><Badge badgeContent={subscribers.length} color="error" className='me-3'><LoyaltyIcon color="black"/></Badge><span className='d-none d-xl-block'>Subscribers</span></AdminDashboardLink>
          </Box>
      </Box>
    </>
  )
}

export default DashboardSidebar;
