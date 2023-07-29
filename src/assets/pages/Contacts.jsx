import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import ContactSection from '../components/ContactSection';
import ContactForm from '../components/ContactForm';

const Contacts = () => {
  return (
    <Box>
      <Stack>
        <ContactSection/>
      </Stack>
    </Box>
  );
};

export default Contacts;
