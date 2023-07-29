import styled from '@emotion/styled';
import { Box, Grid, Typography, Container, Button } from '@mui/material';
import React from 'react';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import ContactForm from './ContactForm';

const ContactSection = () => {
    const StyledContainer = styled(Container)({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100vh'
    });

    const StyledButton = styled(Button)({
        border: '2px solid cyan',
        padding: '10px 20px',
        color: 'white',
        margin: '20px 0px',
        '&:hover': {
            backgroundColor: 'cyan',
            color: 'black'
        }
    });


  return (
    <Box className='contactSection'>
        <StyledContainer className='container'>
            <Grid container>
                <Grid xs={12} md={6}>
                <Typography variant='h3' sx={{ color: 'white', textTransform: 'uppercase', mb: 3 }}>
                    Contact Us
                </Typography>
                <ContactForm/>
                </Grid>
            </Grid>
        </StyledContainer>
    </Box>
  )
};

export default ContactSection;
