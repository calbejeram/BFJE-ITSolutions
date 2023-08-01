import styled from '@emotion/styled';
import { Box, Grid, Typography, Container, Button, Stack, Link } from '@mui/material';
import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import Footer from './Footer';

const ContactSection = () => {
    const StyledContainer = styled(Container)({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        // height: '100vh'
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

    const StyledLink = styled(Link)({
        color: 'cyan',
        fontWeight: 'bold',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
            color: 'white'
        }
    });

    const [contactFirstName, setContactFirstName] = useState('');
    const [contactLastName, setContactLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [message, setMessage] = useState('');

    const handleContactFirstName = (event) => {
        setContactFirstName(event.target.value);
    };

    const handleContactLastName = (event) => {
        setContactLastName(event.target.value);
    };

    const handleEmailAddress = (event) => {
        setEmailAddress(event.target.value);
    };

    const handleContactNumber = (event) => {
        setContactNumber(event.target.value);
    };

    const handleMessage = (event) => {
        setMessage(event.target.value);
    };

    const sentMessage = localStorage.getItem("ContactForm") ? JSON.parse(localStorage.getItem("ContactForm")) : [];

    const [messageArray, setMessageArray] = useState(sentMessage);

    useEffect(() => {
        localStorage.setItem("ContactForm", JSON.stringify(messageArray))
      }, [messageArray]);

      const handleSubmit = (event) => {
        event.preventDefault();

        if (contactFirstName && contactLastName && emailAddress && message !== "" && contactNumber > 0) {
          const messageInfo = {contactFirstName, contactLastName, emailAddress, contactNumber, message};

            setMessageArray([...messageArray, messageInfo]);

            setContactFirstName("");
            setContactLastName("");
            setEmailAddress("");
            setContactNumber("");
            setMessage("");

            alert('You have created your account')
        } else {
          alert("Please dont leave an empty input")
        }
    };

    

  return (
    <Box className='contactSection'>
        <StyledContainer maxWidth='lg'>
            <Grid container gap={2}>
                <Grid xs={12} md={5.5} sx={{ mt: {xs: 13, lg: 10}}}>
                    <Typography variant='h5' sx={{ color: 'white', textTransform: 'uppercase', mb: 2, fontWeight: 'bold' }}>
                        Contact Us
                    </Typography>
                    <Typography paragraph color='white'>
                        For inquiries, you may contact us at <StyledLink component='a' href='mailto:bjfitsolutions@gmail.com'>bjfitsolutions@gmail.com</StyledLink> or complete the form below and expect a response within 1 working day.
                    </Typography>
                    <ContactForm contactFirstName={contactFirstName} contactLastName={contactLastName} emailAddress={emailAddress} contactNumber={contactNumber} message={message} handleContactFirstName={handleContactFirstName} handleContactLastName={handleContactLastName} handleEmailAddress={handleEmailAddress} handleContactNumber={handleContactNumber} handleMessage={handleMessage} handleSubmit={handleSubmit}/>
                </Grid>
                <Grid xs={12} md={6} mt={15}>
                    
                </Grid>
            </Grid>
        </StyledContainer>

        <Footer/>
    </Box>
  )
};

export default ContactSection;
