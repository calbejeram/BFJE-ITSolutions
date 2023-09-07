import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import ContactForm from './ContactForm';
import Footer from './Footer';
import { Box, Grid, Typography, Container, Link } from '@mui/material';

const ContactSection = () => {

    const StyledLink = styled(Link)({
        color: 'cyan',
        fontWeight: 'bold',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
            color: 'cyan'
        }
    });

    const [contactFirstName, setContactFirstName] = useState("");
    const [contactLastName, setContactLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [message, setMessage] = useState("");

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
            const Swal = require('sweetalert2')

            setContactFirstName("");
            setContactLastName("");
            setEmailAddress("");
            setContactNumber("");
            setMessage("");

            Swal.fire({
                title: 'Message sent successfully',
                text: "Expect a response within 1 working day",
                icon: 'success',
                showConfirmButton: false,
                timer: 1400
              });

              setTimeout(() => window.location.reload(), 1300);

        } else {
            const Swal = require('sweetalert2')
            Swal.fire({
              title: "Message cannot be sent",
              text: "Please fill out all the input fields!",
              icon: "error"
            });
        }

    };

  return (
    <Box className='contactSection'>
        <Container maxWidth='lg' className='d-flex flex-column align-items-center justify-content-center'>
            <Grid container>
                <Grid xs={12} md={5.5} sx={{ mt: {xs: 13, lg: 10}}}>
                    <Typography variant='h5' sx={{ color: 'white', textTransform: 'uppercase', mb: 2, fontWeight: 'bold' }}>
                        Contact Us
                    </Typography>
                    <Typography paragraph color='white'>
                        For inquiries, you may contact us at <StyledLink component='a' href='mailto:bfjwebdesign@gmail.com'>bfjwebdesign@gmail.com</StyledLink> or complete the form below and expect a response within 1 working day.
                    </Typography>
                    <ContactForm contactFirstName={contactFirstName} contactLastName={contactLastName} emailAddress={emailAddress} contactNumber={contactNumber} message={message} handleContactFirstName={handleContactFirstName} handleContactLastName={handleContactLastName} handleEmailAddress={handleEmailAddress} handleContactNumber={handleContactNumber} handleMessage={handleMessage} handleSubmit={handleSubmit}/>
                </Grid>
                <Grid xs={12} md={6} mt={15}>
                    
                </Grid>
            </Grid>
        </Container>
        <Footer/>
    </Box>
  )
};

export default ContactSection;
