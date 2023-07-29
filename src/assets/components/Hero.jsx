import styled from '@emotion/styled';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import React from 'react';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';


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
    padding: '10px 20px',
    color: 'white',
    margin: '20px 0px',
    '&:hover': {
        backgroundColor: 'cyan',
        color: 'black'
    }
  });

  return (
    <HeroSection id="#" className='heroSection'>
        <StyledContainer maxWidth="lg">
          <Grid container>
            <Grid xs={12} md={6}>
              <Typography variant='h3' sx={{ textTransform: 'uppercase', color: 'white', mb: 2, fontWeight: 'bold' }}>
                Go beyond adapting to the new norm
              </Typography>
              <Typography paragraph sx={{ color: 'white' }}>Future-proof your business with BJFE IT Solutions</Typography>
              <StyledButton href='/services'>
                Let's Get Started
                <DoubleArrowIcon fontSize='large'/>
              </StyledButton>
            </Grid>
          </Grid>
        </StyledContainer>
    </HeroSection>
  );
};

export default Hero;
