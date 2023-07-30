import styled from '@emotion/styled';
import { Box, Container } from '@mui/material';
import React from 'react';
import SignupForm from '../components/SignupForm';

const Signup = () => {
  const StyledContainer = styled(Container)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  });

  return (
    <Box className='signup'>
      <StyledContainer className='signupContainer'>
          <SignupForm/>
      </StyledContainer>
    </Box>
  );
};

export default Signup;
