import styled from '@emotion/styled';
import { Box, Grid, Stack, Typography, Link } from '@mui/material';
import { FormGroup, Input, Button } from 'reactstrap';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import logobrand from '../BFJElogobrand.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {

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
                    <Input type='text' for='email' placeholder='Your E-Mail' required></Input>
                    <Button type='submit' className='btn btn-info'>Send</Button>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
        <Container className='container my-2'>
          <hr />
          <Grid container>
             <Grid xs={9} lg={9}>
                <Typography>
                  &copy; 2023 Allrights reserved / Privacy
                </Typography>
             </Grid>
             <Grid xs={3} lg={3} className='d-flex align-items-end justify-content-end'>
                <Typography>
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
