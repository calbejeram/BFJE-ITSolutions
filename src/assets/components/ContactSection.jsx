import styled from '@emotion/styled';
import { Box, Grid, Typography, Container, Button, Stack } from '@mui/material';
import React from 'react';
import ContactForm from './ContactForm';

const ContactSection = () => {
    const StyledContainer = styled(Container)({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
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
            <Grid container gap={2}>
                <Grid xs={12} md={5.5} mt={10}>
                    <Typography variant='h3' sx={{ color: 'white', textTransform: 'uppercase', mb: 3 }}>
                        Contact Us
                    </Typography>
                    <ContactForm/>
                </Grid>
                <Grid xs={12} md={6} mt={15}>
                    <Stack>
                        <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5081.2613252797455!2d121.04741829212122!3d14.541217018438173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8f3fa2994af%3A0x89c988af4760e40a!2sBonifacio%20Global%20City%2C%20Taguig%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1690615268691!5m2!1sen!2sph"} width="100%" height="350" style={{ border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Stack>
                    <Stack className='text-white' my={3}>
                        <Typography variant='h4' fontWeight='bold'>Head Office | BGC</Typography>
                        <Typography variant='h6'>100th Floor, 2506, General Mac Arthur Highway</Typography>
                        <Typography variant='h6'>Bonifacio Global City 2506</Typography>
                        <Typography>Tel. Number <a href={"tel:09123456789"} >091234556789</a> </Typography>
                    </Stack>
                </Grid>
            </Grid>
        </StyledContainer>
    </Box>
  )
};

export default ContactSection;
