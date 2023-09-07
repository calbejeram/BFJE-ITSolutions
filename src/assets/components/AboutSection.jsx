import React from 'react';
import jeram from '../images/jeram.png';
import barrie from '../images/barrie.jpg';
import frank from '../images/frank.jpg';
import styled from '@emotion/styled';
import Footer from './Footer';
import { Col, Row } from 'reactstrap';
import { DoubleArrow, School, OpenInNew, Badge, Groups, IntegrationInstructions } from '@mui/icons-material';
import { Box, Grid, Typography, Button, Stack, Container } from '@mui/material';

const team = [
    {
        name: 'Jerammy Calbe',
        school: 'https://kodego.ph',
        portfolio: 'https://calbejeram.github.io/Portfolio/',
        image: jeram,
        jobTitle: '20 years of experience as Software Engineer',
        alt: "Jeram's Photo"
    },
    {
        name: 'Barry Paje',
        school: 'https://kodego.ph',
        portfolio: 'https://barrypage.github.io/Portfolio/',
        image: barrie,
        jobTitle: '20 years of experience as Software Engineer',
        alt: "Barry's Photo"
    },
    {
        name: 'Frank Bernardo',
        school: 'https://kodego.ph',
        portfolio: 'https://calbejeram.github.io/Portfolio/',
        image: frank,
        jobTitle: '20 years of experience as Software Engineer',
        alt: "Frank's Photo"
    },
];

const AboutSection = () => {
    const StyledContainer = styled(Container)({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100vh'
    });

    const StyledButton = styled(Button)({
        border: '2px solid cyan',
        padding: '10px 20px',
        color: 'white',
        margin: '20px 0px',
        '&:hover': {
            backgroundColor: 'cyan',
            color: 'black'
        }
    });

    const person = team.map((person) => {
        return (
        <Grid xs={12} lg={3.8} key={person.name} pb={10} className='border p-4 mb-5 rounded-3 bg-primary bg-opacity-25 bg-gradient'>
            <Stack direction='row' gap={3} className='flex-column flex-lg-row d-flex align-items-center justify-content-center'>
                <img src={person.image} alt={person.alt} className='w-25 rounded-circle' />
                <Stack direction='column' className='text-center text-lg-start'>
                    <Typography variant='h6'>
                        <Badge className='me-2'/>
                        {person.name}
                    </Typography>
                    <Typography variant='subtitle'>
                        <IntegrationInstructions className='me-2'/>
                        Fullstack Web Developer
                    </Typography>
                    <Typography paragraph>
                        <School className='me-2'/>
                        Studied <span className='fw-bold'>Fullstack Web Development</span> at <a href={person.school} target='_Blank' className='text-decoration-none fw-bold text-info'>KodeGo</a>
                    </Typography>
                    <Button href={person.portfolio} target='_Blank' variant='outlined' className='text-black'>
                        See Portfolio
                        <OpenInNew className='ms-2'/>
                    </Button>
                </Stack>
            </Stack>
        </Grid>
        );
    });


  return (
    <Box className='aboutSection'>
        <StyledContainer maxWidth='lg'>
            <Grid container>
                <Grid xs={12} md={6}>
                    <Typography variant='h4' sx={{ color: 'white', textTransform: 'uppercase', mb: 2, fontWeight: 'bold' }}>
                        Reliable and Innovative Web Design
                    </Typography>
                    <Typography paragraph color='white'>
                        Your Vision, Our Innovation: Building a Digital Future Together
                    </Typography>
                    <StyledButton href='#team'>
                        Meet our team
                        <DoubleArrow fontSize='large'/>
                    </StyledButton>
                </Grid>
            </Grid>
        </StyledContainer>

        <Box id='team'>
            <Container>
                <Grid container py={10}>
                    <Grid xs={12} md={12}>
                        <Stack direction='column' className='text-center'>
                            <Typography variant='h5' textTransform='uppercase' fontWeight='bold'>
                                <Groups fontSize='large' className='me-2'/>
                                Meet our team
                            </Typography>
                            <Typography variant='subtitle'>At BFJ Web Design, our success is driven by the talent, dedication, and passion of our team members. We take pride in introducing you to the individuals who make our organization thrive. Get to know the faces behind our brand. Our talented team members are the heart and soul of BFJE IT Solutions. Get to know them better below!.</Typography>
                        </Stack>
                    </Grid>
                </Grid>
                <Grid container gap={2}>
                    {person}
                </Grid>
            </Container>
        </Box>
        
        <Box className='excellence'>
            <Container>
                <Grid container py={10}>
                    <Grid xs={12} md={6}>
                        
                    </Grid>
                    <Grid xs={12} md={6}>
                        <Stack direction='column' className='d-flex align-items-center align-items-lg-start text-center text-lg-start'>
                            <Typography variant='h5' textTransform='uppercase' fontWeight='bold'>Passion for excellence</Typography>
                            <Typography paragraph>Our people are the heart of our business. Our success is driven by their skills, experience and passion for delivering the highest standards of service. Ours is a team of people who put the customer first, and do not compromise on quality and performance.</Typography>
                            <Button variant='outlined' className='w-75'>Join our team and Collaborate</Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
        <Box>
            <Container className='learnMore my-5'>
                <Row className='d-flex align-items-center justify-content-center'>
                    <Col xs={12} md={4} className='d-flex flex-column align-items-center justify-content-center' sx={{ height: '20vh'}}> 
                        <Typography variant='h5' fontWeight='bold' textTransform='uppercase' className='pt-5 mt-5 text-center text-lg-start'>
                            Learn more about BFJ Web Design Managed Services
                        </Typography>
                        <Button variant='outlined' sx={{ my: 5, width: '200px'}} href='/contacts'>
                            Inquire now
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Box>
        <Footer/>
    </Box>
  );
};

export default AboutSection;
