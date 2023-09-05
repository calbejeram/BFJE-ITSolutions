import { Box, Container } from '@mui/material';
import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import styled from '@emotion/styled';

const Login = () => {
  document.title = "Login | BFJE IT Solutions";

  const [username, setUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleUserName = (event) => {
      setUsername(event.target.value)
  }
  const handlePassword = (event) => {
      setLoginPassword(event.target.value)
  }

  const StyledContainer = styled(Container)({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  });

  const handleLogin = (event) => {
    event.preventDefault();

  }
  
  return (
    <Box className='login'>
      <StyledContainer>
          <LoginForm username={username} password={loginPassword} handleUsername={handleUserName} handlePassword={handlePassword} handleLogin={handleLogin}/>
      </StyledContainer>
    </Box>
  );
};

export default Login;
