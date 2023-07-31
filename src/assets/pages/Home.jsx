import { Box, Stack } from '@mui/material';
import React from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import HomeSection from '../components/HomeSection';
import BackToTop from '../components/BackToTop'

const Home = () => {
  return (
    <Box>
        <Stack direction="column">
            <Hero/>
            <HomeSection/>
            <Footer/>
            <BackToTop/>
        </Stack>
    </Box>
  );
};

export default Home;
