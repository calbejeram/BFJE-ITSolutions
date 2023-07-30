import { Box, Stack } from '@mui/material';
import React from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import HomeSection from '../components/HomeSection';

const Home = () => {
  return (
    <Box>
        <Stack direction="column">
            <Hero/>
            <HomeSection/>
            <Footer/>
        </Stack>
    </Box>
  );
};

export default Home;
