import React from 'react';
import styled from '@emotion/styled';
import AccountCreation from '../components/AccountCreation';
import { Box, Container } from '@mui/material';

const Signup = () => {
  document.title = "Signup | BFJE IT Solutions";

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
