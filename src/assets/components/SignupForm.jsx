import styled from '@emotion/styled';
import { Box, Stack, Typography, Link } from '@mui/material';
import React from 'react';
import { Form, Row, Col, FormGroup, Label, Input, Button, } from 'reactstrap';
import logobrand from '../BFJElogobrand.png';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

const SignupForm = ({firstName, lastName, email, userName, password, handleFirstName, handleLastName, handleEmail, handleUserName, handlePassword, handleSubmit}) => {
    const StyledBox = styled(Box)({
        width: '600px',
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
        <Typography className='text-center small mb-2'>
            It's quick and easy
        </Typography>
        <hr />
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Input
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        type="text"
                        value={firstName}
                        onChange={handleFirstName}
                        />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        type="text"
                        value={lastName}
                        onChange={handleLastName}
                        />
                    </FormGroup>
                </Col>
            </Row>
                <FormGroup>
                    <Input
                    id="email"
                    name="email"
                    placeholder="Your email"
                    type='email'
                    value={email}
                    onChange={handleEmail}
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                    id="userName"
                    name="userName"
                    placeholder="Create a Username"
                    type='text'
                    value={userName}
                    onChange={handleUserName}
                    />
                </FormGroup>
            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Input
                        id="password"
                        name="password"
                        type='password'
                        placeholder='Create a Password'
                        value={password}
                        onChange={handlePassword}
                        />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type='password'
                        placeholder='Confirm your Password'
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={12} className='mb-3'>
                    <FormGroup check>
                        <Input
                        id="agreement"
                        name="agreement"
                        type="checkbox"
                        />
                        <Label
                        check
                        for="agreement"
                        className='small'
                        >
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
                        <StyledLink component='a' href='/login'>Login</StyledLink>
                    </Stack>
                </Col>
            </Row>
        </Form>
    </StyledBox>
  )
};

export default SignupForm;
