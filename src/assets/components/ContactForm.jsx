import React from 'react';
import { Box, Button, Grid } from '@mui/material';
import styled from '@emotion/styled';
import SendIcon from '@mui/icons-material/Send';
import {
    Form,
    FormGroup,
    Label,
    Col,
    Input,
    Container
} from 'reactstrap';

const ContactForm = ({ contactFirstName, contactLastName, emailAddress, contactNumber, message, handleContactFirstName, handleContactLastName, handleEmailAddress, handleContactNumber, handleMessage, handleSubmit }) => {

  return (
    <Box>
        <Container className='container'>
            <Grid container>
              <Grid xs={12} lg={12}>
                <Box>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for='firstName' className='fw-bold text-white'>First Name:</Label>
                            <Input type='text' for='firstName' id='firstName' placeholder='e.g. Juan' value={contactFirstName} onChange={handleContactFirstName} ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for='lastName' className='fw-bold text-white'>Last Name:</Label>
                            <Input type='text' for='lastName' id='firstName' placeholder='e.g. Dela Cruz' value={contactLastName} onChange={handleContactLastName} ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for='email' className='fw-bold text-white'>Email Address:</Label>
                            <Input type='email' for='email' id='email' placeholder='e.g. JuanDelaCruz@youremail.com' value={emailAddress} onChange={handleEmailAddress} ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for='mobileNumber' className='fw-bold text-white'>Contact number:</Label>
                            <Input type='number' for='mobileNumber' id='mobileNumber' placeholder='e.g. 09-123-456-789' maxLength={11} value={contactNumber} onChange={handleContactNumber}  ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for='message' className='fw-bold text-white'>Message:</Label>
                            <Input type='textarea' for='message' id='message' placeholder='Type your message here...' value={message} onChange={handleMessage}  ></Input>
                        </FormGroup>
                        <FormGroup check inline className='mb-3 text-white'>
                            <Input type="checkbox"/>
                            <Label check>I have read and agree to BFJE privacy policy.</Label>
                        </FormGroup>
                        <FormGroup>
                            <Button type='submit' size='large' variant='contained'>Send<SendIcon className='ms-2 mb-1'/></Button>
                        </FormGroup>
                    </Form>
                </Box>
              </Grid>
            </Grid>
        </Container>
    </Box>
  );
};

export default ContactForm;
