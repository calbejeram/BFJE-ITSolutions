import { Box, Stack } from '@mui/material';
import React from 'react';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <Box>
        <Stack direction="column">
            <Hero/>
        </Stack>
    </Box>
  );
}

export default Home;
