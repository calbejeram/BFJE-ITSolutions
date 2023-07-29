import { Box, Button, Grid } from '@mui/material';
import React from 'react';
import {
    Form,
    FormGroup,
    Label,
    Col,
    Input,
    Container
} from 'reactstrap';
import SendIcon from '@mui/icons-material/Send';
import styled from '@emotion/styled';

const ContactForm = () => {

  const StyledButton = styled(Button)({
    color: 'white',
    border: '2px solid cyan',
    '&:hover': {
      backgroundColor: 'skyblue'
    }
  })
  return (
    <Box>
        <Container className='container'>
            <Grid container>
              <Grid xs={12} lg={12}>
                <Box>
                    <Form>
                        <FormGroup>
                            <Label for='firstName' className='fw-bold text-white'>First Name:</Label>
                            <Input type='text' for='firstName' id='firstName' placeholder='First Name' required></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for='lastName' className='fw-bold text-white'>Last Name:</Label>
                            <Input type='text' for='lastName' id='firstName' placeholder='Last Name' required></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for='email' className='fw-bold text-white'>Email Address:</Label>
                            <Input type='email' for='email' id='email' placeholder='youremail@email.com' required></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for='mobileNumber' className='fw-bold text-white'>Contact number:</Label>
                            <Input type='number' for='mobileNumber' id='mobileNumber' placeholder='00-000-000-000' maxLength={11} required ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for='message' className='fw-bold text-white'>Message:</Label>
                            <Input type='textarea' for='message' id='message' placeholder='Type your message here...' required ></Input>
                        </FormGroup>
                        <FormGroup check inline className='mb-3 text-white'>
                            <Input type="checkbox" required/>
                            <Label check>I have read and agree to BFJE privacy policy.</Label>
                        </FormGroup>
                        <FormGroup>
                            <StyledButton type='submit' size='large'>Send<SendIcon className='ms-2 mb-1'/></StyledButton>
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
