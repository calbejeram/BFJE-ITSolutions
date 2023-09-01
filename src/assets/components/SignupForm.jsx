import styled from '@emotion/styled';
import { Box, Stack, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import React from 'react';
import { Form, Row, Col, FormGroup, Label, Input, Button, } from 'reactstrap';
import logobrand from '../BFJElogobrand.png';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

const SignupForm = ({ firstName, lastName, email, userName, password, confirmPassword, handleFirstName, handleLastName, handleEmail, handleUserName, handlePassword, handleConfirmPassword, handleSubmit }) => {
    
    const StyledBox = styled(Box)({
        width: 'auto',
        height: 'auto',
        borderRadius: '10px',
        padding: '25px'
    });

    const StyledLink = styled(Link)({
        color: 'blue',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline'
        }
    });

  return (
    <StyledBox className='bg-white bg-opacity-75'>
        <Box className='d-flex align-items-center justify-content-center'>
            <img src={logobrand} alt="Logo Brand" style={{ width: '80px', m: 0}}/>
        </Box>
        <Typography className='text-center fw-bold fs-4 mb-2'>
            <PersonAddAlt1Icon fontSize='large' className='me-2'/>
            ACCOUNT CREATION
        </Typography>
        <hr />
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col xs={12} md={6}>
                    <FormGroup className='mb-3'>
                        <Input id="firstName" name="firstName" placeholder="First Name" type="text" value={firstName} onChange={handleFirstName}/>
                    </FormGroup>
                </Col>
                <Col xs={12} md={6}>
                    <FormGroup className='mb-3'>
                        <Input id="lastName" name="lastName" placeholder="Last Name" type="text" value={lastName} onChange={handleLastName}/>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <FormGroup className='mb-3'>
                        <Input id="email" name="email" placeholder="Your email" type='email' value={email} onChange={handleEmail} />
                    </FormGroup>
                </Col>
                <Col xs={12}>
                    <FormGroup className='mb-3'>
                        <Input id="userName" name="userName" placeholder="Create a username" type='userName' value={userName} onChange={handleUserName} />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <FormGroup className='mb-3'>
                        <Input id="password" name="password" type='password' placeholder='Create a Password' value={password} onChange={handlePassword}/>
                    </FormGroup>
                </Col>
                <Col xs={12} md={6}>
                    <FormGroup className='mb-3'>
                        <Input id="confirmPassword" name="confirmPassword" type='password' placeholder='Confirm your Password' value={confirmPassword} onChange={handleConfirmPassword}/>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={12} className='mb-3'>
                    <FormGroup check>
                        <Input id="agreement" name="agreement" type="checkbox" />
                        <Label check for="agreement" className='small' >
                        By registering, you agreed to <span className='fw-bold'>BFJE IT Solutions</span> <span><StyledLink href='#'>Terms of Service</StyledLink></span> and <span><StyledLink href='#'>Privacy Policy</StyledLink></span>
                        </Label>
                    </FormGroup>
                </Col>
                <Col lg={12} className='mb-3'>
                    <Button type='submit' className='btn btn-info w-100'>
                        Create Account
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Stack direction='row' className='d-flex justify-content-center' spacing={1}>
                        <Typography paragraph>Already have an account?</Typography>
                        <StyledLink to="/login">Login</StyledLink>
                    </Stack>
                </Col>
            </Row>
        </Form>
    </StyledBox>
  )
};

export default SignupForm;
