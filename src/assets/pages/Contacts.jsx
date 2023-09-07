import React from 'react';
import { Box, Stack } from '@mui/material';
import ContactSection from '../components/ContactSection';

const Contacts = () => {
  document.title = "Contact Us | BFJ Web Design";
  return (
    <Box>
      <Stack>
        <ContactSection/>
      </Stack>
    </Box>
  );
};

export default Contacts;
