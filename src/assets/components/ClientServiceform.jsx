import styled from '@emotion/styled';
import { Box, Stack, Typography, Link } from '@mui/material';
import React from 'react';
import { Form, Row, Col, FormGroup, Label, Input, Button, } from 'reactstrap';
import logobrand from '../BFJElogobrand.png';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

const ClientServiceform = ({
    userID,
    userName,
    userEmail,
    userContact,
    userWebpackage,
    userPackagetitle,
    userPackagedescription,
    userPackageprice,
    userImage,
    userStatus,
    handleUserName,
    handleUserEmail,
    handleContact,
    handleWebpackage,
    handlePackagetitle,
    handlePackagedescription,
    handlePackageprice,
    handleImage,
    handleStatus,
    handleAvail }) => {
    
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
            Service Request Form
        </Typography>
        <Typography className='text-center small mb-2'>
            It's quick and easy
        </Typography>
        <hr />
        <Form onSubmit={handleAvail}>
            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Input id="userName" name="userName" placeholder="Username" type="text" value={userName} onChange={handleUserName}/>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Input id="email" name="email" placeholder="Email" type="email" value={userEmail} onChange={handleUserEmail}/>
                    </FormGroup>
                </Col>
            </Row>
                <FormGroup>
                    <Input id="contact" name="contact" placeholder="+63 xxx xxx xxxx" type='number' value={userContact} onChange={handleContact} />
                </FormGroup>
                
            <Row>
                <Col md={6}>
                <FormGroup>
                    <Input id="webpackage" name="webpackage" placeholder= "WebPackage number" type='number' value={userWebpackage} onChange={handleWebpackage}/>
                </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Input id="title" name="title" type='text' placeholder='Title' value={userPackagetitle} onChange={handlePackagetitle}/>
                    </FormGroup>
                </Col>
                
                
                    <FormGroup>
                        <Input id="description" name="description" type='text' placeholder='Description' value={userPackagedescription} onChange={handlePackagedescription}/>
                    </FormGroup>
                
            </Row>
            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Input id="packageprice" name="packageprice" type='number' placeholder='Price' value={userPackageprice} onChange={handlePackageprice}/>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Input id="userimg" name="userimg" type='text' placeholder='image' value={userImage} onChange={handleImage}/>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col lg={12} className='mb-3'>
                    <Button type='submit' className='btn btn-info w-100' >
                        Avail Service
                    </Button>
                </Col>
            </Row>
            
        </Form>
    </StyledBox>
  )
};

export default ClientServiceform;
