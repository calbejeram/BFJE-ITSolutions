import { Box, Container, Stack, Typography, Button } from '@mui/material';
import React from 'react';
import { Col, Row } from 'reactstrap';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const HomeSection = () => {
    const companyLogos = [
        {
            src: 'https://kodego.ph/_nuxt/img/ibpap.4630d12.png',
            alt: 'IBPAP logo'
        },
        {
            src: 'https://timcorp.net.ph/wp-content/themes/yootheme/cache/cisco-c4e20e4d.png',
            alt: ''
        },
        {
            src: 'https://timcorp.net.ph/wp-content/themes/yootheme/cache/citrix-4ca290c4.png',
            alt: ''
        },
        {
            src: 'https://timcorp.net.ph/wp-content/themes/yootheme/cache/nutanix-acfd88ef.png',
            alt: ''
        },
        {
            src: 'https://timcorp.net.ph/wp-content/themes/yootheme/cache/sangfor-470cf44d.png',
            alt: ''
        },
        {
            src: 'https://timcorp.net.ph/wp-content/themes/yootheme/cache/somasa-4792e25c.png',
            alt: ''
        },
        {
            src: 'https://timcorp.net.ph/wp-content/themes/yootheme/cache/vmware-1a3be882.png',
            alt: ''
        },
        {
            src: 'https://timcorp.net.ph/wp-content/themes/yootheme/cache/rsa-fb645bb8.png',
            alt: ''
        },
        {
            src: 'https://timcorp.net.ph/wp-content/themes/yootheme/cache/huawei-8010988a.png',
            alt: ''
        },
        {
            src: 'https://timcorp.net.ph/wp-content/themes/yootheme/cache/dell-emc-aabc0049.png',
            alt: ''
        },
        {
            src: 'https://timcorp.net.ph/wp-content/themes/yootheme/cache/f5-910af5d2.png',
            alt: ''
        },
        {
            src: 'https://timcorp.net.ph/wp-content/themes/yootheme/cache/Quantum-57ef3ed2.png',
            alt: ''
        }
    ]

    const columns = companyLogos.map((img) => {
        return (
            <Col key={img.src} xs={6} md={2} className='d-flex align-items-center justify-content-center'>
                <img src={img.src} alt={img.alt} className='w-50 img-fluid' />
            </Col>
        );
    });

    return (
        <Box>
            <Container maxWidth='lg' className='py-5'>
                <Row>
                    <Col>
                        <Typography variant='h4' className='text-center'>Trusted and Reliable</Typography>
                    </Col>
                </Row>
                <Row>
                    {columns}
                </Row>
            </Container>
            <Container maxWidth='lg' className='py-5'>
                <Row>
                    <Col xs={12} md={6} className='d-flex flex-column'>
                        <Stack direction='row' className='d-flex align-items-center justify-content-center w-100'>
                            <img src={'https://timcorp.net.ph/wp-content/themes/yootheme/cache/managed-service-05-ba246288.png'} alt="Network Photo" className=' img-fluid' />
                            <Typography variant='h5' fontWeight='bold' className='d-flex align-items-center ms-3'>BJFE Network Operation Center</Typography>
                        </Stack>
                        <Typography paragraph className='text-start'>
                            Our Network Operations Center is a fully outsourced network management solution covering circuit management, configuration management, performance management, and availability management. It includes:
                        </Typography>
                        <Typography paragraph className='text-start'>
                            <CheckCircleIcon/>
                            Proactive 24x7x365 infrastructure monitoring, with reporting tools that clients can access remotely.
                        </Typography>
                        <Typography paragraph className='text-start'>
                            <CheckCircleIcon/>
                            Detection and validation of incidents and alerts related to network issues.
                        </Typography>
                        <Typography paragraph className='text-start'>
                            <CheckCircleIcon/>
                            Active performance and utilization monitoring of network equipment and cloud services.
                        </Typography>
                        <Typography paragraph className='text-start'>
                            <CheckCircleIcon/>
                            Continuous monitoring and management of contracted entities against fault and performance measures, and issues remediation.
                        </Typography>
                        <Typography paragraph className='text-start'>
                            <CheckCircleIcon/>
                            Management of circuit performance and other network components.
                        </Typography>
                    </Col>
                    <Col xs={12} md={6} className='d-flex flex-column'>
                        <Stack direction='row' className='d-flex align-items-center justify-content-center w-100'>
                            <img src={'https://timcorp.net.ph/wp-content/themes/yootheme/cache/managed-service-06-e06b93e3.png'} alt="Network Photo" className=' img-fluid' />
                            <Typography variant='h5' fontWeight='bold' className='d-flex align-items-center ms-3'>BJFE Security Operations Center</Typography>
                        </Stack>
                        <Typography paragraph className='text-start'>
                            Our SOC Is a 24/7 facility run by information security experts to help monitor, analyze, and improve your security posture on an ongoing basis. Using a combination of technology solutions and a robust set of processes, we can help you:
                        </Typography>
                        <Typography paragraph className='text-start'>
                            <CheckCircleIcon/>
                            Proactively detect, analyze, and respond to emerging and sophisticated cybersecurity threats and attacks.
                        </Typography>
                        <Typography paragraph className='text-start'>
                            <CheckCircleIcon/>
                            Monitor and analyze activity on networks, servers, endpoints, databases, applications, websites, and other systems, to identify potential security risks.
                        </Typography>
                        <Typography paragraph className='text-start'>
                            <CheckCircleIcon/>
                            Ensure that potential security incidents are correctly identified, analyzed, defended, investigated, and reported.
                        </Typography>
                    </Col>
                </Row>
            </Container>
            
            <Container className='learnMore my-5'>
                <Row >
                    <Col xs={12} md={4} className='d-flex flex-column align-items-center align-items-lg-start justify-content-center' sx={{ height: '40vh'}}> 
                        <Typography variant='h5' fontWeight='bold' textTransform='uppercase' className='pt-5 mt-5 text-center text-lg-start'>
                            Learn more about BFJE IT Solutions Managed Services
                        </Typography>
                        <Button variant='outlined' sx={{ my: 5, width: '200px'}} href='/contacts'>
                            Inquire now
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Box>
    )
};

export default HomeSection;