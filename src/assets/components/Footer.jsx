import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';
import logobrand from '../images/BFJELogobrand.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Container, Form } from 'reactstrap';
import { Box, Grid, Stack, Typography, Button, Link, TextField } from '@mui/material';

const Footer = () => {

  const [email, setEmail] = useState("");
  
  // Retrieve email from local storage or initialize as an empty array
  const emailInfo = localStorage.getItem("Footer") ? JSON.parse(localStorage.getItem("Footer")) : [];
  // Initialize emailStorage with emailInfo
  const [emailStorage, setEmailStorage] = useState(emailInfo); 

  useEffect(() => {
    // Update local storage with the latest emailStorage
    localStorage.setItem("Footer", JSON.stringify(emailStorage))
  }, [emailStorage]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const Swal = require('sweetalert2');

    if (email !== "") {
      // Create an email object
      // const emailInfos = { email };

       // Update emailStorage with the new email
      setEmailStorage([...emailStorage, email]);
      setEmail("");

      Swal.fire({
        icon: 'success',
        text: 'Successfully subscribed to our newsletter!'
      });
      
    } else {
      Swal.fire({
        icon: 'error',
        text: 'Enter your email for updates.'
      });
    }
  }

  const LogoBrand = styled(Typography) ({
    color: "black",
    textDecoration: 'none',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });

  const StyledLink = styled(Link)({
    color: 'black',
    textDecoration: 'none',
    width: 'fit-content',
    '&:hover': {
      textDecoration: 'underline'
    }
  })

  return (
    <Box id='footer'>
        <Container className='container pt-3'>
          <Grid container>
            <Grid xs={12} lg={4}>
              <Stack direction='row'>
                  <Link component='a' href='#'>
                      <img src={logobrand} alt="Logo Brand" style={{ width: '50px', m: 0}}/>
                  </Link>
                  <LogoBrand variant="h6" component='a' href='#' sx={{ my: 0 }} className='text-align-center'>
                      BFJE IT Solutions
                  </LogoBrand>
              </Stack>
              <Stack>
                  <Typography paragraph>Head Office | BGC</Typography>
                  <Typography paragraph>100th Floor, 2506, General Mac Arthur Highway</Typography>
                  <Typography paragraph>Bonifacio Global City 2506</Typography>
                  <Typography paragraph>Tel. Number: <StyledLink href={"tel:+639123456789"}>09123456789</StyledLink> </Typography>
              </Stack>
            </Grid>
            <Grid xs={12} lg={4} className='d-flex align-items-center my-4 my-lg-0'>
               <Stack>
                <Typography variant='h6' fontWeight='bold' className='mb-2'>Quick Links</Typography>
                <StyledLink component='a' href='/'>Home</StyledLink>
                <StyledLink component='a' href='/services'>Services</StyledLink>
                <StyledLink component='a' href='/about'>About</StyledLink>
                <StyledLink component='a' href='/contacts'>Contacts</StyledLink>
                <StyledLink component='a' href='#'>Terms and Conditions</StyledLink>
                <StyledLink component='a' href='#'>Privacy Policy</StyledLink>
               </Stack>
            </Grid>
            <Grid xs={12} lg={4} className='d-flex align-items-center my-4 my-lg-0'>
              <Stack>
                <Typography variant='h5' fontWeight='bold'>Want our best marketing tips?</Typography>
                <Typography paragraph>We send our best strategies in a juicy weekly newsletter.</Typography>
                <Stack direction='row'>
                  <Form onSubmit={handleSubmit} className='d-flex w-100'>
                      <TextField type='email' className='w-100' id="email" label="Enter your E-mail" variant="filled" value={email} onChange={(e) => { setEmail(e.target.value)}} />
                      <Button type='submit' variant="contained">Send</Button>
                  </Form>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
        <Container className='container my-2'>
          <hr />
          <Grid container>
             <Grid xs={12} lg={9}>
                <Typography>
                  &copy; 2023 Allrights reserved
                </Typography>
             </Grid>
             <Grid xs={12} lg={3} className=''>
                <Typography className='d-flex align-items-lg-end justify-content-lg-end'>
                    <Link component='a' href='https://facebook.com' target='_Blank' color='#0E8EF2' className='px-2'><FacebookIcon/></Link>
                    <Link component='a' href='https://twitter.com' target='_Blank' color='#1DA1F2'  className='px-2'><TwitterIcon/></Link>
                    <Link component='a' href='https://youtube.com' target='_Blank' color='#FF0000'  className='px-2'><YouTubeIcon/></Link>
                    <Link component='a' href='https://linkedin.com' target='_Blank' color='#0A66C2'  className='px-2'><LinkedInIcon/></Link>
                </Typography>
             </Grid>
          </Grid>
        </Container>
    </Box>
  )
};

export default Footer;
