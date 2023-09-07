import React from 'react';
import { Box } from '@mui/material';
import AboutSection from '../components/AboutSection';
import BackToTop from '../components/BackToTop';

const About = () => {
  document.title = "About Us | BFJ Web Design";
  return (
    <Box>
      <AboutSection/>
      <BackToTop/>
    </Box>
  );
};

export default About;
