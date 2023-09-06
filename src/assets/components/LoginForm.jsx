import React, { useState } from 'react';
import logobrand from '../images/BFJELogobrand.png';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InfoIcon from '@mui/icons-material/Info';
import { Box, FormGroup, Stack, TextField, Typography, Button, IconButton, Input, Popover } from '@mui/material';
import { Form, Label } from 'reactstrap';
import { AccountCircle } from '@mui/icons-material';

const LoginForm = () => {

    // LOGIN
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
        const Swal = require("sweetalert2");

        if (username === "Admin" && password === "Jerampogi") {
            setUsername("");
            setPassword("");
            
            window.location.href = "/admin";
        } else {
            setUsername("");
            setPassword("");

            Swal.fire({
                icon: "error",
                text: "Invalid Username or Password, Please try again!"
            });
        }
    };

    // SHOW PASSWORD
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
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
        <div className="alert alert-info">
            Username: <span className='fw-bold'>Admin</span> <br />
            Password: <span className="fw-bold">Jerampogi</span>
        </div>
        <hr />
        <Form onSubmit={handleLogin}>
            <FormGroup className='mb-3'>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <AccountCircle sx={{ mr: 1, my: 0.5 }} />
                    <TextField type='text' className="w-100" id="username" placeholder="Username" variant="standard" value={username} onChange={handleUsernameChange} />
                </Box>
            </FormGroup>
            <FormGroup className='mb-3'>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <VpnKeyOutlinedIcon sx={{ mr: 1, my: 0.5 }} />
                    <Input
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        placeholder='Password'
                        value={password} onChange={handlePasswordChange}
                    className='w-100'/>
                </Box>
            </FormGroup>
            <Button type='submit' variant="contained" className='w-100'>Login</Button>
        </Form>
    </Box>
    </>
  );
};

export default LoginForm;
