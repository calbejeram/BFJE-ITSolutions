import React, { useState } from 'react';
import logobrand from '../images/BFJELogobrand.png';
import { Box, FormGroup, Stack, TextField, Typography, Button} from '@mui/material';
import { Form, Input, Label } from 'reactstrap';
import { AccountCircle } from '@mui/icons-material';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const LoginForm = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = (event) => {
        event.preventDefault();

        console.log(username)
        console.log(password)
    };
    
  return (
    <>
    <Box className='bg-white bg-opacity-75 rounded-3 p-4' sx={{ width: '400px', height: '450px'}}>
        <Box className='d-flex align-items-center justify-content-center'>
            <img src={logobrand} alt="Logo Brand" style={{ width: '80px', m: 0}}/>
        </Box>
        <Typography className='text-center fw-bold fs-4 mb-2'>
            <AdminPanelSettingsIcon/>
            ADMIN LOGIN
        </Typography>
        <hr />
        <Form onSubmit={handleLogin}>
            <FormGroup className='mb-3'>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <AccountCircle sx={{ mr: 1, my: 0.5 }} />
                    <TextField type='email' className="w-100" id="username" label="Username" variant="standard" value={username} onChange={handleUsernameChange} />
                </Box>
            </FormGroup>
            <FormGroup className='mb-3'>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <VpnKeyOutlinedIcon sx={{ mr: 1, my: 0.5 }} />
                    <TextField type='password' className="w-100" id="password" label="Password" variant="standard" value={password} onChange={handlePasswordChange} />
                </Box>
            </FormGroup>
            <FormGroup className='mb-3'>
                <Stack direction='row' spacing={1}>
                    <Input type='checkbox'/>
                    <Label check>Show Password</Label>
                </Stack>
            </FormGroup>
            <Button type='submit' variant="contained" className='w-100'>Login</Button>
        </Form>
    </Box>
    </>
  );
};

export default LoginForm;
