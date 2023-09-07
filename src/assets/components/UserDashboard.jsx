import React, { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Button, Card, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';

const UserDashboard = () => {
  document.title = "Admin Dashboard";

  const [inbox, setEmails] = useState(
    JSON.parse(localStorage.getItem("ContactForm")) || []
  );

  const [customers, setCustomers] = useState(
    JSON.parse(localStorage.getItem("ServiceSection")) || []
  );

  const [subscribers, setSubscribers] = useState(
    JSON.parse(localStorage.getItem("Footer")) || []
  );

  const inboxCount = inbox.length;
  const customersCount = customers.length;
  const subscribersCount = subscribers.length;

  return (
    <Box className="mt-5">
        <Container className='container pt-5'>
            <Row>
                <Col xs={12} className='d-flex align-items-center'>
                  <Stack className='d-flex justify-content-center w-100'>
                      <Typography variant='h3' fontWeight='bold' className='bg-info bg-gradient p-3 rounded-3 bg-opacity-50 mb-2'><HomeIcon fontSize='3rem' className='me-2'/>Admin Dashboard</Typography>
                      <Typography variant='body2' className='bg-info p-3 rounded-3 bg-opacity-50 mb-3'><ViewCarouselIcon className='me-1'/>You can view all the Customers, Orders and Messages here.</Typography>
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
                      <PeopleAltIcon className='me-1'/>
                      Customers
                    </CardTitle>
                    <CardText>
                      You can see the total of customers.
                    </CardText>
                    <CardText>
                        <Typography variant='h1' className='text-center fw-bold'>{customersCount}</Typography>
                      </CardText>
                  </Card>
                </Col>
                <Col xs={12} md={4}>
                  <Card
                      body
                      className="my-2 bg-warning"
                    >
                      <CardTitle tag="h5">
                        <EmailIcon className='me-1'/>
                        Messages
                      </CardTitle>
                      <CardText>
                        You can see the total of messages sent.
                      </CardText>
                      <CardText>
                        <Typography variant='h1' className='text-center fw-bold'>{inboxCount}</Typography>
                      </CardText>
                    </Card>  
                </Col>
                <Col xs={12} md={4}>
                  <Card
                      body
                      className="my-2 bg-info"
                    >
                      <CardTitle tag="h5">
                        <ShoppingCartIcon className='me-1'/>
                        Subscribers
                      </CardTitle>
                      <CardText>
                        You can see the total news letter subscriber here.
                      </CardText>
                      <CardText>
                        <Typography variant='h1' className='text-center fw-bold'>{subscribersCount}</Typography>
                      </CardText>
                    </Card>
                </Col>
            </Row>
        </Container>
    </Box>
  )
}

export default UserDashboard;
