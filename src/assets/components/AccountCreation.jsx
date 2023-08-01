import { Box, Container } from '@mui/material';
import React, {useState, useEffect } from 'react';
import SignupForm from '../components/SignupForm';
import styled from '@emotion/styled';

const AccountCreation = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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

    const userInformations = localStorage.getItem("SignupForm") ? JSON.parse(localStorage.getItem("SignupForm")) : [];
    

    const [accountInfoArray, setAccountInfoArray] = useState(userInformations);

    useEffect(() => {
      localStorage.setItem("SignupForm", JSON.stringify(accountInfoArray))
    }, [accountInfoArray]);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (firstName && lastName && email && userName && password && confirmPassword !== "") {
          const accountInfo = {firstName, lastName, email, userName, password};

            setAccountInfoArray([...accountInfoArray, accountInfo]);

            setFirstName("");
            setLastName("");
            setEmail("");
            setUserName("");
            setPassword("");
            setConfirmPassword("");

            alert('You have created your account')
        } else {
          alert("Please dont leave an empty input")
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
