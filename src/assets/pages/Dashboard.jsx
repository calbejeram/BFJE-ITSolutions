import { Box, Stack } from '@mui/material';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import DashboardNavbar from '../components/DashboardNavbar';
import DashboardSidebar from '../components/DashboardSidebar';
import DashboardMain from '../components/DashboardMain';

const Dashboard = () => {
  return (
    <>
        <DashboardNavbar/>
        <DashboardMain/>
    </>
  );
};

export default Dashboard;
