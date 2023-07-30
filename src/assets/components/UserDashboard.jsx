import { Box, FormGroup, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Input, Label, Row } from 'reactstrap';
import HomeIcon from '@mui/icons-material/Home';
import AccountInformation from '../components/AccountInformation';
import SignupForm from '../components/SignupForm';

const UserDashboard = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleFirstName = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastName = (event) => {
        setLastName(event.target.value);
    };

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleUserName = (event) => {
        setUserName(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const LoadData = localStorage.getItem("InventoryForm") ? JSON.parse(localStorage.getItem("InventoryForm")) : [];
    

    const [accountInfoArray, setAccountInfoArray] = useState(LoadData);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (firstName !== "") {
            const accountInfo = { firstName, lastName, email, userName, password };
            console.log(accountInfo)

            setAccountInfoArray([...accountInfoArray, accountInfo]);

            setFirstName("");
            setLastName("");
            setEmail("");
            setUserName("");
            setPassword("");
        } else {
            alert("Invalid product amount");
        };
    };

        useEffect(() => {
        localStorage.setItem("SignupForm", JSON.stringify(accountInfoArray))
    }, [accountInfoArray]);

  return (
    <Box>
        <Container className='container pt-5'>
            <Row>
                <Col className='d-flex align-items-center'>
                  <HomeIcon style={{ fontSize: '70'}}/>
                  <Stack className='d-flex justify-content-center'>
                      <Typography variant='h5' fontWeight='bold'>User Dashboard</Typography>
                      <Typography variant='body2'>You can view all of your account information here</Typography>
                  </Stack>
                </Col>
            </Row>
            <Row>
                <AccountInformation firstName={firstName} lastName={lastName} email={email} userName={userName} password={password} handleFirstName={handleFirstName} handleLastName={handleLastName} handleEmail={handleEmail} handleUserName={handleUserName} handlePassword={handlePassword} handleSubmit={handleSubmit} />

                <AccountInformation AccountInfo={accountInfoArray}/>
            </Row>
        </Container>
    </Box>
  )
}

export default UserDashboard
