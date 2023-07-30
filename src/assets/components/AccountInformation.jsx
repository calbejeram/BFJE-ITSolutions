import { Box, FormGroup, Typography } from '@mui/material';
import React from 'react';
import { Col, Container, Form, Input, Label, Row } from 'reactstrap';

const AccountInformation = ({ AccountInfo }) => {
  return (
    <Box>
        <Row className='mt-5'>
            <Col>
                <Typography variant='h4'>Hello, Jeram</Typography>
            </Col>
        </Row>
        <Row className='pt-3 pb-5 px-5 bg-secondary bg-opacity-50 mt-4'>
            <Col className='pb-3'>
                <Typography variant='h5' fontWeight='bold'>Account Information</Typography>
            </Col>
            {AccountInfo.map((info) => {
                <Form>
                        <Row>
                    <Col md={6} className='mb-3'>
                        <FormGroup>
                            <Label>First Name:</Label>
                            <Input
                            id="firstName"
                            name="firstName"
                            type="text"
                            value={info.firstName}
                            readOnly
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6} className='mb-3'>
                        <FormGroup>
                        <Label>Last Name:</Label>
                            <Input
                            id="lastName"
                            name="lastName"
                            type="text"
                            value={info.lastName}
                            readOnly
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup className='mb-3'>
                    <Label>Email:</Label>
                    <Input
                    id="email"
                    name="email"
                    type='email'
                    value={info.email}
                    readOnly
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Username:</Label>
                    <Input
                    id="userName"
                    name="userName"
                    type='text'
                    value={info.userName}
                    readOnly
                    />
                </FormGroup>
                </Form>
            })}
        </Row>
    </Box>
  )
}

export default AccountInformation
