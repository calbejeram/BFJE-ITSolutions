import { Box, FormGroup, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Input, Label, Row } from 'reactstrap';
import HomeIcon from '@mui/icons-material/Home';
import AccountInformation from '../components/AccountInformation';
import SignupForm from '../components/SignupForm';

const UserDashboard = () => {
    
  return (
    <Box>
        <Container className='container pt-5'>
            <Row>
                <Col className='d-flex align-items-center'>
                  <HomeIcon style={{ fontSize: '70'}}/>
                  <Stack className='d-flex justify-content-center'>
                      <Typography variant='h5' fontWeight='bold'>User Dashboard</Typography>
                      <Typography variant='body2'>You can view all of your account information here</Typography>
                  </Stack>
                </Col>
            </Row>
            <Row>
                <AccountInformation/>
            </Row>
        </Container>
    </Box>
  )
}

export default UserDashboard;
