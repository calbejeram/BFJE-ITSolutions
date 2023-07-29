import styled from '@emotion/styled';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import React from 'react';


const Hero = () => {
  const HeroSection = styled(Box)({
    height: '100vh',
  });

  const StyledContainer = styled(Container)({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  });

  const StyledButton = styled(Button)({
    border: '2px solid cyan',
    color: 'cyan',
    padding: '17px 25px',
    fontSize: '20px',
    '&:hover': {
      backgroundColor: 'cyan',
      color: 'black'
    }

  });

  return (
    <HeroSection id="#" className='heroSection'>
        <StyledContainer maxWidth="lg">
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
            <Grid xs={12} md={6}>
              <Typography variant='h2' sx={{ textTransform: 'uppercase'}}>
                Trusted <span className='text-white fw-bold'>IT Solution</span> Partner
              </Typography>
              <StyledButton href='/services'>
                Get Started
              </StyledButton>
            </Grid>
          </Grid>
        </StyledContainer>
    </HeroSection>
  );
};

export default Hero;
