import React from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import HomeSection from '../components/HomeSection';
import BackToTop from '../components/BackToTop'
import { Box, Stack } from '@mui/material';

const Home = () => {
  document.title = "BFJ Web Design";
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
