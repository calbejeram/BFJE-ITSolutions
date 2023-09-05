import React from 'react';
import { Box, Stack } from '@mui/material';
import ContactSection from '../components/ContactSection';

const Contacts = () => {
  document.title = "Contact Us | BFJE IT Solutions";
  return (
    <Box>
      <Stack>
        <ContactSection/>
      </Stack>
    </Box>
  );
};

export default Contacts;
