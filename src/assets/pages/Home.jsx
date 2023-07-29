import { Box, Stack } from '@mui/material';
import React from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <Box>
        <Stack direction="column">
            <Hero/>
            <Footer/>
        </Stack>
    </Box>
  );
};

export default Home;
