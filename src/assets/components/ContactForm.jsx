import { Box } from '@mui/material';
import React from 'react';
import {
    Form,
    FormGroup,
    Label,
    Col,
    Input,
    FormText,
    Button
} from 'reactstrap';

const ContactForm = () => {
  return (
    <Box>
        <Form>
  <FormGroup row>
    <Label
      for="first-name"
      sm={3}
    >
      First Name
    </Label>
    <Col sm={9}>
      <Input
        id="firstName"
        name="firstName"
        placeholder="First Name"
        type="text"
        required
      />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="last-name"
      sm={3}
    >
      Last Name
    </Label>
    <Col sm={9}>
      <Input
        id="lastName"
        name="lastName"
        placeholder="Last Name"
        type="text"
        required
      />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="email"
      sm={3}
    >
      Email
    </Label>
    <Col sm={9}>
      <Input
        id="email"
        name="email"
        placeholder="Your email address"
        type="email"
        required
      />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="number"
      sm={3}
    >
      Mobile Number
    </Label>
    <Col sm={9}>
      <Input
        id="phoneNumber"
        name="phoneNumber"
        placeholder="00-000-000-000"
        type="number"
        required
      />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="message"
      sm={3}
    >
      Message
    </Label>
    <Col sm={9}>
      <Input
        id="message"
        name="message"
        type="textarea"
        placeholder="Type your message here"
        required
      />
    </Col>
  </FormGroup>
  <FormGroup
    check
    row
  >
    <Col
      sm={{
        offset: 3,
        size: 15
      }}
    >
      <Button className='btn btn-primary'>
        Send
      </Button>
    </Col>
  </FormGroup>
</Form>
    </Box>
  )
};

export default ContactForm;
