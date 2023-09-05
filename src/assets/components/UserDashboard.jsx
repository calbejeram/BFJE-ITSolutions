import React, { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Button, Card, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import HomeIcon from '@mui/icons-material/Home';

const UserDashboard = () => {
  document.title = "Admin Dashboard";

  const [emails, setEmails] = useState(
    JSON.parse(localStorage.getItem('Footer')) || []
  );

  const emailsCount = emails.length;

  return (
    <Box>
        <Container className='container pt-5'>
            <Row>
                <Col xs={12} className='d-flex align-items-center'>
                  <Stack className='d-flex justify-content-center w-100'>
                      <Typography variant='h3' fontWeight='bold' className='bg-info bg-gradient p-3 rounded-3 bg-opacity-50 mb-2'><HomeIcon fontSize='3rem' className='me-2'/>Admin Dashboard</Typography>
                      <Typography variant='body2' className='bg-info p-3 rounded-3 bg-opacity-50 mb-3'>You can view all the Customers, Orders and Messages here.</Typography>
                  </Stack>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={4}>
                  <Card
                    body
                    className="my-2 bg-success bg-gradient bg-opacity-75"
                  >
                    <CardTitle tag="h5">
                      Overall Customers
                    </CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <CardText>
                        <Typography variant='h1' className='text-center fw-bold'>{emailsCount}</Typography>
                      </CardText>
                    <Button color="primary">
                      View Customers
                    </Button>
                  </Card>
                </Col>
                <Col xs={12} md={4}>
                  <Card
                      body
                      className="my-2 bg-info"
                    >
                      <CardTitle tag="h5">
                        Orders
                      </CardTitle>
                      <CardText>
                        With supporting text below as a natural lead-in to additional content.
                      </CardText>
                      <CardText>
                        <Typography variant='h1' className='text-center fw-bold'>15</Typography>
                      </CardText>
                      <Button color="primary">
                        View Orders
                      </Button>
                    </Card>
                </Col>
                <Col xs={12} md={4}>
                  <Card
                      body
                      className="my-2 bg-warning"
                    >
                      <CardTitle tag="h5">
                        Messages
                      </CardTitle>
                      <CardText>
                        With supporting text below as a natural lead-in to additional content.
                      </CardText>
                      <CardText>
                        <Typography variant='h1' className='text-center fw-bold'>15</Typography>
                      </CardText>
                      <Button color="primary">
                        View Messages
                      </Button>
                    </Card>  
                </Col>
            </Row>
        </Container>
    </Box>
  )
}

export default UserDashboard;
