import styled from '@emotion/styled';
import { Box, FormGroup, Link, Stack, Typography } from '@mui/material';
import React from 'react';
import { Button, Form, Input, Label } from 'reactstrap';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LockIcon from '@mui/icons-material/Lock';
import logobrand from '../BFJElogobrand.png';
import LoginIcon from '@mui/icons-material/Login';

const LoginForm = () => {

    const StyledBox = styled(Box)({
        width: '400px',
        height: '450px',
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
            <LoginIcon fontSize='large' className='me-2'/>
            USER LOGIN
        </Typography>
        <hr />
        <Form>
            <FormGroup className='mb-3'>
                <Stack direction='row'>
                    <Label for='username'><AccountBoxIcon fontSize='large' className='mt-2'/></Label>
                    <Input type='text' for='username' placeholder='Username'></Input>
                </Stack>
            </FormGroup>
            <FormGroup className='mb-3'>
                <Stack direction='row'>
                    <Label for='password'><LockIcon fontSize='large' className='mt-2'/></Label>
                    <Input type='password' for='password' placeholder='Password'></Input>
                </Stack>
            </FormGroup>
            <FormGroup className='mb-3'>
                <Stack direction='row' spacing={1}>
                    <Input type='checkbox'/>
                    <Label check>Show Password</Label>
                </Stack>
            </FormGroup>
            <FormGroup className='mb-3'>
                <Button type='submit' className='btn btn-info' href='/dashboard'>Login</Button>
            </FormGroup>
        </Form>
        <Stack direction='row' spacing={1} className='d-flex align-items-center justify-content-center'>
            <Typography>Don't have an Account?</Typography>
            <StyledLink component='a' href='/signup'>Signup</StyledLink>
        </Stack>
    </StyledBox>
  );
};

export default LoginForm;
