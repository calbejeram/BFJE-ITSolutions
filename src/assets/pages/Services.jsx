import React from 'react';
import ServiceSection from '../components/ServiceSection';
import BackToTop from '../components/BackToTop';
import { Box } from '@mui/material';

const Services = () => {
  document.title = "Services | BFJE IT Solutions";
  return (
    <Box>
        <ServiceSection/>
        <BackToTop/>
    </Box>
  );
};

export default Services;
