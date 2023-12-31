import React, {useState, useEffect } from 'react';
import styled from '@emotion/styled';
import SignupForm from '../components/SignupForm';
import { Box, Container } from '@mui/material';

const AccountCreation = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

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

    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    };

    const [accountInfoArray, setAccountInfoArray] = useState(userInformations);
    
    const userInformations = localStorage.getItem("SignupForm") ? JSON.parse(localStorage.getItem("SignupForm")) : [];


    useEffect(() => {
      localStorage.setItem("SignupForm", JSON.stringify(accountInfoArray))
    }, [accountInfoArray]);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (firstName && lastName && email && userName && password && confirmPassword !== "") {
          const accountInfo = {firstName, lastName, email, userName, password};

            setAccountInfoArray([...accountInfoArray, accountInfo]);
            const Swal = require('sweetalert2');

            setFirstName("");
            setLastName("");
            setEmail("");
            setUserName("");
            setPassword("");
            setConfirmPassword("");

            Swal.fire({
              title: 'Successfully Created Account',
              text: "You have successfully created a new account",
              icon: 'success',
              showCancelButton: false,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Go to Login Page'
            }).then((result) => {
              if (result.isConfirmed) {
                window.location.href = "/login";
              }
            });
        } else {
          const Swal = require('sweetalert2')
          Swal.fire({
            title: "Error on Creating an Account!",
            text: "Please don't leave an empty input field!",
            icon: "error"
          });
        }
    };

  const StyledContainer = styled(Container)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  });

  return (
    <Box className='signup'>
      <StyledContainer className='signupContainer'>
          <SignupForm firstName={firstName} lastName={lastName} email={email} userName={userName} password={password} handleFirstName={handleFirstName} handleLastName={handleLastName} handleEmail={handleEmail} handleUserName={handleUserName} handlePassword={handlePassword} handleConfirmPassword={handleConfirmPassword} handleSubmit={handleSubmit} />
      </StyledContainer>
    </Box>
  );
};

export default AccountCreation;
