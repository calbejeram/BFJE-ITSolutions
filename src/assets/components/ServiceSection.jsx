import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Footer from './Footer';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { Form, Input, Label, List } from 'reactstrap';
import { Box, Grid, Typography, Button, Stack, Card, CardContent, CardMedia, CardActions, Container, FormGroup, Select } from '@mui/material'

const offeredServices = [
    
    {
        src: 'https://i0.wp.com/articles.connectnigeria.com/wp-content/uploads/2022/08/featured-images-60ec0df4948ae-sej-1520x800-1.png?fit=1520%2C800&ssl=1',
        title: 'Frontend Development',
        description: "Are you looking to enhance your online presence, improve user engagement, and boost your brand's credibility? Our frontend web development services are tailored to help you achieve these goals and more. We specialize in creating stunning, responsive, and user-friendly websites that not only captivate your audience but also deliver a seamless and enjoyable browsing experience. Lorem ipsum dolor sit amet and consectetur adipiscing elit."
    },
    {
        src: 'https://launchpadbyvog.com/wp-content/uploads/2020/06/back-3-1.jpg',
        title: 'Backend Development',
        description: 'Are you in search of a dependable partner to build the backbone of your web applications? Our backend web development services are designed to provide the robust, scalable, and secure infrastructure that your digital products need to thrive. From databases and server-side logic to APIs and performance optimization, we offer comprehensive solutions to power your online ventures.'
    },
    {
        src: 'https://smallbizclub.com/wp-content/uploads/2020/08/bigstock-Developing-Programming-And-Cod-348135307.jpg',
        title: 'Fullstack Development',
        description: "Looking for a one-stop solution to bring your web project from concept to reality? Our full-stack web development services offer end-to-end expertise, encompassing both frontend and backend development. With a team of seasoned professionals, we're ready to transform your ideas into fully functional, user-friendly, and visually captivating web applications. Lorem ipsum dolor sit amet and consectetur adipiscing elit"
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

    const [serviceFirstName, setServiceFirstName] = useState("");
    const [serviceLastName, setServiceLastName] = useState("");
    const [serviceEmail, setServiceEmail] = useState("");
    const [serviceNumber, setServiceNumber] = useState("");
    const [selectService, setSelectedService] = useState("");

    const customerInfos = localStorage.getItem("ServiceSection") ? JSON.parse(localStorage.getItem("ServiceSection")) : [];

    const [customerInfoArray, setCustomerInfoArray] = useState(customerInfos);

    useEffect(() => {
        localStorage.setItem("ServiceSection", JSON.stringify(customerInfoArray))
    }, [customerInfoArray]);

    const handleCustomerAvail = (event) => {
        event.preventDefault();

        if (serviceFirstName && serviceLastName && serviceEmail && selectService !== "" && serviceNumber > 0) {
            const customerId = Date.now();
            console.log(customerId)
            const customerInfo = { customerId, serviceFirstName, serviceLastName, serviceEmail, serviceNumber, selectService };

          setCustomerInfoArray([...customerInfoArray, customerInfo]);
            const Swal = require('sweetalert2')

            setServiceFirstName("");
            setServiceLastName("");
            setServiceEmail("");
            setServiceNumber("");
            setSelectedService("");

            Swal.fire({
                title: 'Order sent successfully',
                text: "We will review your and expect a response to us soon. Thank you!",
                icon: 'success',
                showConfirmButton: false,
                timer: 2000
              });

              setTimeout(() => window.location.reload(), 1900);

        } else {
            const Swal = require('sweetalert2')
            Swal.fire({
              title: "Order cannot be processed.",
              text: "Please fill out all the input fields!",
              icon: "error"
            });
        }

    };

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

    const AvailNowButton = styled(Button)({
        '&:hover':{
            color: 'white'
        }
    })
    
    const serviceGrid = offeredServices.map((item) => {
        return (
            <Grid xs={12} md={3.8} key={item.src}>
                <Card style={{ boxShadow: '2px 10px 5px gray'}}>
                    <CardMedia
                    component="img"
                    height="300"
                    image={item.src}
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className='fw-bold'>
                        {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item.description}
                    </Typography>
                    </CardContent>
                    <CardActions>
                        <AvailNowButton href='#serviceForm' size="large" color="primary" variant='contained'>
                            Avail now
                        </AvailNowButton>
                    </CardActions>
                </Card>
            </Grid>
        );
    });

    const serviceItem1 = serviceItem.map((item) => {
        return (
        <Grid container className='border p-3 rounded-3 my-2 text-white' backgroundColor="#63a2de">
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
        <Container maxWidth='lg' className='d-flex flex-column align-items-center justify-content-center' sx={{ height: '100vh'}}>
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
        </Container>

        {/* Services Section */}
        <Container className='container d-flex flex-column align-items-center justify-content-center' id='services'>
            <Typography variant='h4' sx={{ textTransform: 'uppercase', pt: 10, pb: 2}}className='text-center'>
                BFJ Web Design Offered Services
            </Typography>
            <Typography paragraph className='mb-5 text-center'>
            At BFJ Web Design, we understand that the digital landscape is constantly evolving. That's why we offer a suite of services designed to meet your business's unique needs. Our Cloud Services provide scalable, secure, and flexible solutions that empower you to harness the full potential of the cloud. Our IT Solutions are crafted to optimize your infrastructure, enhance security, and drive efficiency. And when it comes to Web Design, we don't just create websites; we create immersive digital experiences that captivate your audience and elevate your brand. Explore how our holistic approach to these critical domains can transform your business into a digital powerhouse."
            </Typography>
            <Grid container sx={{pb: 5}} gap={3}>
                { serviceGrid }
            </Grid>
        </Container>

        <Container className='container d-flex align-items-center justify-content-center' id='services'>
            <Grid container my={5} gap={5} className='d-flex align-items-center'>
                    <Grid xs={12} md={5}>
                        <Typography variant='h5' sx={{ display: 'flex', alignItems: 'center', textTransform: 'uppercase', mb: 2, fontWeight: 'bold'}}>
                            Business Applications
                        </Typography>
                        <Typography paragraph>
                            Implementing business applications requires strong functional and technical project management capabilities. Our team has over two decades of experience delivering solutions in the areas of revenue generation, efficiency and productivity, compliance and risk management.
                        </Typography>
                        <Typography paragraph>Our seasoned professionals bring a wealth of experience to every project, ensuring a holistic approach to application development. We understand that each organization has unique challenges and objectives. Therefore, our solutions are tailored to address your specific needs and goals.</Typography>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <img src={'https://timcorp.net.ph/wp-content/themes/yootheme/cache/business-applciations-1da37089.png'} alt="Business Photo" className='img-fluid rounded-3' />
                    </Grid>
            </Grid>
        </Container>

        <Container className='container d-flex align-items-center justify-content-center'>
            <Grid container my={10} gap={5} className='d-flex align-items-center'>
                <Grid xs={12} md={5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}} className='text-center text-lg-start flex-column'>
                    <Typography variant='h5' className='fw-bold mb-3 text-uppercase'>Enhancing IT Infrastructure for Business Success</Typography>
                    <Typography paragraph>
                        We approach all IT infrastructure projects with an eye towards optimization and how enhancements support your business goals - be it enabling agility, enhancing security posture, scaling the business, or ensuring business continuity.
                    </Typography>
                </Grid>
                <Grid xs={12} md={6} className='text-center text-lg-start'>
                    {serviceItem1}
                </Grid>
            </Grid>
        </Container>

        <Container className='container d-flex flex-column align-items-center justify-content-center'>
            <Grid container mt={7} gap={5}>
                <Grid xs={12} md={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Stack direction='column'>
                        <Typography variant='h5' className='fw-bold text-uppercase text-center text-lg-start'>
                            Why outsource to BFJ Web Design?
                        </Typography>
                        <Typography variant='h6' fontWeight='bold' textTransform='uppercase' color='#1B66AD' className='text-center text-lg-start'>
                            We go the extra mile
                        </Typography>
                        <Typography paragraph className='text-center text-lg-start'>
                            We treat every client as a partner. Beyond providing reliable managed services and helping you anticipate and respond to issues; we also help you uncover opportunities to deliver value and innovation to the business.
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
            <Grid container gap={3} className='text-center text-lg-start'>
                <Grid xs={12} lg={3.7} className='border rounded-3 p-3'>
                    <Stack direction='column'>
                        <Typography variant='h6' fontWeight='bold' color='#1B66AD'>Flexibility</Typography>
                        <Typography paragraph>Outsource only what you need to, whether you need just monitoring for a specific technology or a fully managed solution.</Typography>
                    </Stack>
                </Grid>
                <Grid xs={12} lg={3.7} className='border rounded-3 p-3'>
                    <Stack direction='column'>
                        <Typography variant='h6' fontWeight='bold' color='#1B66AD'>Technology Expertise</Typography>
                        <Typography paragraph>We have highly-experienced, certified engineers and technology specialists whose expertise spans across tools and platforms.</Typography>
                    </Stack>
                </Grid>
                <Grid xs={12} lg={3.7} className='border rounded-3 p-3'>
                    <Stack direction='column'>
                        <Typography variant='h6' fontWeight='bold' color='#1B66AD'>Service Excellence</Typography>
                        <Typography paragraph>Our ITIL-based framework enables us to consistently deliver on SLAs and provide the reliability you need.</Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
        <Container id='serviceForm' className='container d-flex align-items-center justify-content-center'>
                <Grid container my={10} className='d-flex flex-lg-row'>
                    <Grid xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Stack direction='column' className='d-flex align-items-center justify-content-center text-start'>
                            <Typography variant='h5' color='#1B66AD' fontWeight='bold'>
                                Ready to turn your web project into reality? Avail our services, and let's embark on a journey to create a powerful and captivating web presence. Your vision is our mission.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid xs={12} md={6} className='p-3'>
                        <Box className="border p-3 rounded-3 bg-gradient bg-opacity-50">
                            <Form onSubmit={handleCustomerAvail}>
                                <FormGroup className='mb-3'>
                                    <Label for='firstName' className='fw-bold text-black'>First Name:</Label>
                                    <Input type='text' for='firstName' id='firstName' placeholder='e.g. Juan' value={serviceFirstName} onChange={(e) => setServiceFirstName(e.target.value)}></Input>
                                </FormGroup>
                                <FormGroup className='mb-3'>
                                    <Label for='lastName' className='fw-bold text-black'>Last Name:</Label>
                                    <Input type='text' for='lastName' id='firstName' placeholder='e.g. Dela Cruz' value={serviceLastName} onChange={(e) => setServiceLastName(e.target.value)} ></Input>
                                </FormGroup>
                                <FormGroup className='mb-3'>
                                    <Label for='email' className='fw-bold text-black'>Email Address:</Label>
                                    <Input type='email' for='email' id='email' placeholder='e.g. JuanDelaCruz@youremail.com' value={serviceEmail} onChange={(e) => setServiceEmail(e.target.value)}></Input>
                                </FormGroup>
                                <FormGroup className='mb-3'>
                                    <Label for='mobileNumber' className='fw-bold text-black'>Contact Number:</Label>
                                    <Input type='number' for='mobileNumber' id='mobileNumber' placeholder='e.g. 09-XXX-XXX-XXX' value={serviceNumber} onChange={(e) => setServiceNumber(e.target.value)}></Input>
                                </FormGroup>
                                <FormGroup className='mb-3'>
                                    <Label for='message' className='fw-bold text-black'>Service Type:</Label>
                                    <Input type='select' value={selectService} onChange={(e) => setSelectedService(e.target.value)}>
                                        <option readOnly>Select a service</option>
                                        <option value="Frontend Web Development">Frontend Web Development</option>
                                        <option value="Backend Web Development">Backend Web Development</option>
                                        <option value="Fullstack Web Development">Fullstack Web Development</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup className='mb-3'>
                                    <Stack className='d-flex flex-column flex-lg-row'>
                                        <Input type='checkbox' required></Input>
                                        <Label className='form-label small ms-lg-2'>By checking this, you read and agreed to our <a href="#" className='text-decoration-none'>Terms and Conditions</a></Label>
                                    </Stack>
                                </FormGroup>
                                <FormGroup>
                                    <Button type='submit' size='large' variant='contained'>Submit</Button>
                                </FormGroup>
                            </Form>
                        </Box>
                    </Grid>
                </Grid>
            </Container>       
        <Footer/>
    </Box>
  );
};

export default ServiceSection;
