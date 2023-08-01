import styled from '@emotion/styled';
import { Box, Container, FormGroup, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SignupForm from '../components/SignupForm';
import { Col, Form, Input, Label, Row } from 'reactstrap';
import Login from '../pages/Login'
import AccountCreation from '../components/AccountCreation';

const Signup = () => {
  const StyledContainer = styled(Container)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  });
  
  return (
    <Box className='signup'>
      <StyledContainer className='signupContainer'>
          <AccountCreation/>
      </StyledContainer>
    </Box>
  );
};

export default Signup;
