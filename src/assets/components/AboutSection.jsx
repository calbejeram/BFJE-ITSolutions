import { Box, Grid, Typography, Button, Stack } from '@mui/material';
import { Container } from 'reactstrap';
import React from 'react';
import styled from '@emotion/styled';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import SchoolIcon from '@mui/icons-material/School';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import BadgeIcon from '@mui/icons-material/Badge';
import WorkIcon from '@mui/icons-material/Work';

const team = [
    {
        name: 'Jerammy Calbe',
        school: 'https://kodego.ph',
        portfolio: 'https://calbejeram.github.io/Portfolio/',
        image: 'https://cdn-icons-png.flaticon.com/512/21/21104.png',
        jobTitle: '20 years of experience as Software Engineer'
    },
    {
        name: 'Barry Paje',
        school: 'https://kodego.ph',
        portfolio: 'https://calbejeram.github.io/Portfolio/',
        image: 'https://cdn-icons-png.flaticon.com/512/21/21104.png',
        jobTitle: '20 years of experience as Software Engineer'
    },
    {
        name: 'Frank Bernardo',
        school: 'https://kodego.ph',
        portfolio: 'https://calbejeram.github.io/Portfolio/',
        image: 'https://cdn-icons-png.flaticon.com/512/21/21104.png',
        jobTitle: '20 years of experience as Software Engineer'
    },
    {
        name: 'Erick Laurel',
        school: 'https://kodego.ph',
        portfolio: 'https://calbejeram.github.io/Portfolio/',
        image: 'https://cdn-icons-png.flaticon.com/512/21/21104.png',
        jobTitle: '20 years of experience as Software Engineer'
    }
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
        <Grid xs={12} lg={5.9} key={person.name} pb={10}>
            <Stack direction='row' gap={3} className='flex-column flex-lg-row d-flex align-items-center justify-content-center'>
                <img src={person.image} alt="" className='w-25' />
                <Stack direction='column' className='text-center text-lg-start'>
                    <Typography variant='h6' fontWeight='bold' textTransform='uppercase'>
                        <BadgeIcon className='me-2'/>
                        {person.name}
                    </Typography>
                    <Typography paragraph>
                        <SchoolIcon className='me-2'/>
                        Studied <span className='fw-bold text-info'>Fullstack Web Development</span> at <a href={person.school} target='_Blank' className='text-decoration-none text-info fw-bold'>KodeGo</a>
                    </Typography>
                    <Button href={person.portfolio} target='_Blank' variant='outlined' className=''>
                        <OpenInNewIcon className='me-2'/>
                        See Portfolio
                    </Button>
                </Stack>
            </Stack>
        </Grid>
        );
    });


  return (
    <Box className='aboutSection'>
        <StyledContainer className='container'>
            <Grid container>
                <Grid xs={12} md={6}>
                <Typography variant='h3' sx={{ color: 'white', textTransform: 'uppercase' }}>
                    Reliable and Innovative IT Solutions
                </Typography>
                <StyledButton href='#team'>
                    Meet our team
                    <SouthEastIcon/>
                </StyledButton>
                </Grid>
            </Grid>
        </StyledContainer>

        <Box id='team'>
            <Container>
                <Grid container py={10}>
                    <Grid xs={12} md={12}>
                        <Stack direction='column' className='text-center'>
                            <Typography variant='h5'>Meet our team</Typography>
                            <Typography variant='h4'>KodeGo Students</Typography>
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
                        <Stack direction='column' className='text-center text-lg-start text-white'>
                            <Typography variant='h3'>Passion for excellence</Typography>
                            <Typography paragraph>Our people are the heart of our business. Our success is driven by their skills, experience and passion for delivering the highest standards of service. Ours is a team of people who put the customer first, and do not compromise on quality and performance.</Typography>
                            <Button variant='outlined' className='text-white w-50'>Join our team and Collaborate</Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </Box>
  );
};

export default AboutSection;
