import styled from '@emotion/styled';
import React from 'react';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { Link } from 'react-router-dom';
import { Box, Container, Grid, Typography } from '@mui/material';


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

  const StyledLink = styled(Link)({
    border: '2px solid cyan',
    padding: '20px 20px',
    color: 'white',
    borderRadius: '5px',
    textDecoration: 'none',
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
              <Typography paragraph sx={{ color: 'white', marginBottom: '2rem' }}>Future-proof your business with BJFE IT Solutions</Typography>
              <StyledLink to="/services">
                Let's Get Started
                <DoubleArrowIcon fontSize='large'/>
              </StyledLink>
            </Grid>
          </Grid>
        </StyledContainer>
    </HeroSection>
  );
};

export default Hero;
