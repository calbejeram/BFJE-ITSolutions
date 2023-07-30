import { Box, Container } from '@mui/material';
import React from 'react';
import LoginForm from '../components/LoginForm';
import styled from '@emotion/styled';

const Login = () => {
  const StyledContainer = styled(Container)({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  });
  
  return (
    <Box className='login'>
      <StyledContainer>
          <LoginForm/>
      </StyledContainer>
    </Box>
  );
};

export default Login;
