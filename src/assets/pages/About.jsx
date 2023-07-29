import styled from '@emotion/styled';
import { Container, Typography, Box } from '@mui/material';
import React from 'react';
import AboutSection from '../components/AboutSection';
import BackToTop from '../components/BackToTop';

const About = () => {

  return (
    <Box>
      <AboutSection/>
      <BackToTop/>
    </Box>
  );
};

export default About;
