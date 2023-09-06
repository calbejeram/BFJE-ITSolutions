import React from 'react';
import DashboardNavbar from '../components/DashboardNavbar';
import DashboardSidebar from '../components/DashboardSidebar';
import DashboardMain from '../components/DashboardMain';
import { Col, Row } from 'reactstrap';
import { Box, Stack } from '@mui/material';

const Dashboard = () => {
  document.title = "Admin Dashboard";
  return (
    <>
        <Box>
          <DashboardNavbar/>
          <Box className="container-fluid">
            <Row>
              <Col xs={12} lg={2} className='p-0'>
                <DashboardSidebar/>
              </Col>
              <Col xs={12} lg={10} className='p-0'>
                <DashboardMain/>
              </Col>
            </Row>
          </Box>
        </Box>
    </>
  );
};

export default Dashboard;
