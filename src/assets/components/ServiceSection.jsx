import React from 'react';
import styled from '@emotion/styled';
import { Box, Grid, Typography, Button, Stack, Card, CardContent, CardMedia, CardActions, Container } from '@mui/material'
import { List } from 'reactstrap';
import Footer from './Footer';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const offeredServices = [
    {
        src: 'https://img.freepik.com/premium-vector/download-this-cloud-computing-vector-flat-character-avatar_203633-1564.jpg?w=2000',
        title: 'Cloud Services',
        description: 'Cloud services are essential for modern enterprises, providing seamless data accessibility, unmatched scalability, and cost-efficiency. With enhanced data security, automatic backups, and disaster recovery capabilities, the cloud ensures the safety and continuity of critical operations.'
    },
    {
        src: 'https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg',
        title: 'IT Services',
        description: 'IT services are essential for businesses, providing expert support, robust cybersecurity, seamless cloud solutions, and data backup strategies.Organizations can focus on core objectives and stay competitive in the digital world. Lorem ipsum dolor sit amet, consectetur adipiscing'
    },
    {
        src: 'https://img.freepik.com/free-vector/website-creator-concept-illustration_114360-2766.jpg?w=2000',
        title: 'Website Creations',
        description: 'Website creation is essential for online success. With our creative design, user-friendly navigation, it connects businesses with their audience and drives growth. We Professional website creators blend creativity and technical expertise to craft tailored online solutions. Lorem ipsum dolor sit amet'
    }
];

const serviceItem = [
    {
        src: 'https://timcorp.net.ph/wp-content/themes/yootheme/cache/icon_03-3281cd5f.png',
        title: 'Project Management Excellence',
        description: 'Our functional and technical project managers are all ITIL-certified.'
    },
    {
        src: 'https://timcorp.net.ph/wp-content/themes/yootheme/cache/icon_01-c3116234.png',
        title: 'Validated Expertise',
        description: 'We have certified technical specialists for various technology platforms.'
    },
    {
        src: 'https://timcorp.net.ph/wp-content/themes/yootheme/cache/icon_02-a7f119ca.png',
        title: 'Focus on Business Impact',
        description: 'We partner with clients to help them realize returns on their technology investments.'
    }
];

const ServiceSection = () => {

    const StyledContainer = styled(Container)({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100vh'
    });

    const StyledContainer1 = styled(Container)({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    });

    const StyledContainer2 = styled(Container)({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
    
    const serviceGrid = offeredServices.map((item) => {
        return (
            <Grid xs={12} md={3.8} key={item.src}>
                <Card>
                    <CardMedia
                    component="img"
                    height="300"
                    image={item.src}
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item.description}
                    </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="large" color="primary">
                            Learn more
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        );
    });

    const serviceItem1 = serviceItem.map((item) => {
        return (
        <Grid container>
            <Grid xs={12} lg={2}>
                <img src={item.src} alt="" />
            </Grid>
            <Grid xs={12} lg={10}>
                <Stack direction='column'>
                    <Typography variant='h6' fontWeight='bold'>
                        {item.title}
                    </Typography>
                    <Typography paragraph>
                        {item.description}
                    </Typography>
                </Stack>
            </Grid>
        </Grid>
        );
    });

  return (
    <Box className="serviceSection">
        {/* Service Hero Section */}
        <StyledContainer maxWidth='lg'>
            <Grid container>
                <Grid xs={12} md={6}>
                    <Typography variant='h4' sx={{ textTransform: 'uppercase', color: 'white', mb: 2, fontWeight: 'bold' }}>
                        Connecting Possibilities, Delivering Solutions
                    </Typography>
                    <Typography paragraph sx={{ color: 'white' }}>
                        Your Partner for Top-Notch Services
                    </Typography>
                    <StyledButton href='#services'>
                        See our services
                        <DoubleArrowIcon fontSize='large'/>
                    </StyledButton>
                </Grid>
            </Grid>
        </StyledContainer>

        {/* Services Section */}
        <StyledContainer1 className='container' id='services'>
            <Typography variant='h5' sx={{ textTransform: 'uppercase', pt: 10, pb: 5, fontWeight: 'bold'}}>
                <MiscellaneousServicesIcon fontSize='large' className='me-2'/>
                Services
            </Typography>
            <Grid container sx={{pb: 5}} gap={3}>
                { serviceGrid }
            </Grid>
        </StyledContainer1>

        <StyledContainer2 className='container' id='services'>
            <Grid container my={5} gap={5}>
                    <Grid xs={12} md={5}>
                        <Typography variant='h5' sx={{ display: 'flex', alignItems: 'center', textTransform: 'uppercase', mb: 2, fontWeight: 'bold'}}>
                            Business Applications
                        </Typography>
                        <Typography variant='h6'>
                            Implementing business applications requires strong functional and technical project management capabilities. Our team has over two decades of experience delivering solutions in the areas of revenue generation, efficiency and productivity, compliance and risk management.
                        </Typography>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <img src={'https://timcorp.net.ph/wp-content/themes/yootheme/cache/business-applciations-1da37089.png'} alt="Business Photo" className='img-fluid rounded-3' />
                    </Grid>
            </Grid>
        </StyledContainer2>

        <StyledContainer2 className='container'>
            <Grid container my={10} gap={5}>
                <Grid xs={12} md={5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}} className='text-center text-lg-start'>
                    <Typography variant='h6'>
                        We approach all IT infrastructure projects with an eye towards optimization and how enhancements support your business goals - be it enabling agility, enhancing security posture, scaling the business, or ensuring business continuity.
                    </Typography>
                </Grid>
                <Grid xs={12} md={6} className='text-center text-lg-start'>
                    {serviceItem1}
                </Grid>
            </Grid>
        </StyledContainer2>

        <StyledContainer1 className='container'>
            <Grid container mt={7} gap={5}>
                <Grid xs={12} md={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Stack direction='column'>
                        <Typography variant='h6' fontWeight='bold' >
                            Why outsource to BJFE IT Solutions?
                        </Typography>
                        <Typography variant='h5' fontWeight='bold' textTransform='uppercase' color='#1B66AD' >
                            We go the extra mile
                        </Typography>
                        <Typography paragraph >
                            We treat every client as a partner. Beyond providing reliable managed services and helping you anticipate and respond to issues; we also help you uncover opportunities to deliver value and innovation to the business.
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
            <Grid container gap={3}>
                <Grid xs={12} lg={3.7}>
                    <Stack direction='column'>
                        <Typography variant='h6' fontWeight='bold' color='#1B66AD'>Flexibility</Typography>
                        <Typography paragraph>Outsource only what you need to, whether you need just monitoring for a specific technology or a fully managed solution.</Typography>
                    </Stack>
                </Grid>
                <Grid xs={12} lg={3.7}>
                    <Stack direction='column'>
                        <Typography variant='h6' fontWeight='bold' color='#1B66AD'>Technology Expertise</Typography>
                        <Typography paragraph>We have highly-experienced, certified engineers and technology specialists whose expertise spans across tools and platforms.</Typography>
                    </Stack>
                </Grid>
                <Grid xs={12} lg={3.7}>
                    <Stack direction='column'>
                        <Typography variant='h6' fontWeight='bold' color='#1B66AD'>Service Excellence</Typography>
                        <Typography paragraph>Our ITIL-based framework enables us to consistently deliver on SLAs and provide the reliability you need.</Typography>
                    </Stack>
                </Grid>
            </Grid>
        </StyledContainer1>

        <StyledContainer2 className='container'>
            <Grid container my={10} gap={5}>
                <Grid xs={12} md={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Stack direction='column'>
                        <Typography variant='h5' textTransform='uppercase' color='#1B66AD' fontWeight='bold'>
                            Need an experienced partner for your business solution projects?
                        </Typography>
                        <Button sx={{ width: 200, mt: 3}} variant='outlined' href='/contacts'>
                            Contact Us
                            <ArrowCircleRightIcon className='ms-2' fontSize='large'/>
                        </Button>
                    </Stack>
                </Grid>
                <Grid xs={12} md={7}>
                    <Stack>
                        <Typography variant='h6' fontWeight='bold' color='#1B66AD'>Our expertise covers:</Typography>
                        <List>
                            <Typography>
                                <CheckCircleIcon className='me-1'/>
                                Banking (core banking, treasury and other line-of-business applications)
                            </Typography>
                            <Typography>
                                <CheckCircleIcon className='me-1'/>
                                Human Resources Information Systems (HRIS)
                            </Typography>
                            <Typography>
                                <CheckCircleIcon className='me-1'/>
                                Audit Management, Risk and Governance
                            </Typography>
                            <Typography>
                                <CheckCircleIcon className='me-1'/>
                                Customer Relationship Management (CRM)
                            </Typography>
                            <Typography>
                                <CheckCircleIcon className='me-1'/>
                                Warehousing
                            </Typography>
                            <Typography>
                                <CheckCircleIcon className='me-1'/>
                                The next wave of Application-as-a-Service Solutions
                            </Typography>
                        </List>
                    </Stack>
                </Grid>
            </Grid>
        </StyledContainer2>
        
        <Footer/>
    </Box>
  );
};

export default ServiceSection;
