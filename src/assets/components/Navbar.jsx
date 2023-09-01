import { AppBar, Button, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, Toolbar, Typography, Stack } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import logobrand from '../BFJElogobrand.png';
import { Menu, Search, Home, MiscellaneousServices, PeopleAlt, PermContactCalendar } from '@mui/icons-material/';
import { Link } from "react-router-dom";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

let adminAccount = 
[
{
  id: Date.now(),
  userName: 'bp2023',
  password: '123456',
  isAdmin: 'y'
},
{
  id: Date.now(),
  userName: 'jc2023',
  password: '987654',
  isAdmin: 'y'
},
{
  id: Date.now(),
  userName: 'fb2023',
  password: '654321',
  isAdmin: 'y'
},
{
  id: Date.now(),
  userName: 'el2023',
  password: '321987',
  isAdmin: 'y'
}
];

let clientAccount = 
[
  {
    id: Date.now(),
    userName: 'client1',
    password: '123456',
    isAdmin: 'n'
  },
  {
    id: Date.now(),
    userName: 'client2',
    password: '987654',
    isAdmin: 'n'
  },
  {
    id: Date.now(),
    userName: 'client3',
    password: '654321',
    isAdmin: 'n'
  },
  {
    id: Date.now(),
    userName: 'client4',
    password: '321987',
    isAdmin: 'n'
  }
  ];

let allAccountArray = [adminAccount,clientAccount];
localStorage.setItem('Accounts', JSON.stringify(allAccountArray));

const drawerWidth = 240;

const Navbar = (props) => {

    const LogoBrand = styled(Typography) ({
        color: "black",
        textDecoration: 'none',
        fontWeight: 'bold',
        '&:hover': {
          color: 'black',
          opacity: 0.7
        }
    });
    
    const StyledLink = styled(Link) ({
        color: "black",
        textDecoration: "none",
        textTransform: "uppercase",
        textAlign: "center",
        margin: "0px 10px",
        width: 'fitcontent',
        "&:hover":{
            color: 'black',
            opacity: 0.7,
            borderBottom: "1px solid blue"
        }
    });

    const StyledLinkMobile = styled(Link) ({
        color: "black",
        textDecoration: "none",
        textTransform: "uppercase",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    });

    const StyledButton = styled(Button) ({
      '&:hover': {
        color: 'white',
        opacity: 0.8
      }
    })

    const StyledAppBar = styled(AppBar) ({
      backgroundColor: 'transparent'
    })
    
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <Stack>
            <Link component='a' href='#'>
                <img src={logobrand} alt="Logo Brand" style={{ width: '50px', m: 0}}/>
            </Link>
            <LogoBrand variant="h6" component='a' href='#' sx={{ my: 0 }}>
                BFJE IT Solutions
            </LogoBrand>
          </Stack>
          <Divider />
          <List>
            <Stack direction="column">
                <ListItem>
                    <StyledLinkMobile to="/">
                      <Home style={{marginRight: '10px'}}/>
                      Home
                      </StyledLinkMobile>
                </ListItem>
                <ListItem>
                    <StyledLinkMobile to="/services">
                      <MiscellaneousServices style={{marginRight: '10px'}}/>
                      Services
                      </StyledLinkMobile>
                </ListItem>
                <ListItem>
                    <StyledLinkMobile to="/about">
                      <PeopleAlt style={{marginRight: '10px'}}/>
                      About Us
                      </StyledLinkMobile>
                </ListItem>
                <ListItem>
                    <StyledLinkMobile to="/contacts">
                      <PermContactCalendar style={{marginRight: '10px'}}/>
                      Contact Us
                      </StyledLinkMobile>
                </ListItem>
            </Stack>
            <hr />
            <Stack direction='row' spacing={2} className='d-flex align-items-center justify-content-center'>
                <StyledButton href="/login" target='_Blank' variant='contained'>
                  <ExitToAppIcon className='me-2'/>
                  Login
                </StyledButton>
            </Stack>
          </List>
        </Box>
      );

    const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
        <StyledAppBar component="nav" position='fixed'>
            <Toolbar sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <IconButton
                    color="black"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ display: { md: 'none', } }}
                >
                    <Menu fontSize='large' />
                </IconButton>
                <Stack direction='row'>
                  <StyledLink component="a" href='#' sx={{display: { xs: 'none', md: 'block' } }}>
                      <img src={logobrand} alt="Logo Brand" style={{ width: '60px'}}/>
                  </StyledLink>
                  <LogoBrand
                      variant="h6"
                      component="a"
                      href='#'
                      fontWeight="bold"
                      margin="0 10px"
                      className='d-lg-flex align-items-center justify-content-center d-none'
                  >
                      BFJE IT Solutions
                  </LogoBrand>
                  <Box className='d-lg-flex align-items-center justify-content-center ms-5 d-none'>
                    <Stack direction='row'>
                        <StyledLink to="/">Home</StyledLink>
                        <StyledLink to="/services">Services</StyledLink>
                        <StyledLink to="/about">About Us</StyledLink>
                        <StyledLink to="/contacts">Contact Us</StyledLink>
                    </Stack>
                  </Box>
                </Stack>
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Stack direction='row' spacing={2}>
                        <StyledLink to="/login" className='btn btn-primary text-white'>
                          <ExitToAppIcon className='me-2'/>
                          Login
                        </StyledLink>
                    </Stack>
                </Box>
                <IconButton
                    color="black"
                    edge="start"
                    sx={{ display: { md: 'none' } }}
                >
                    <Search fontSize='large'/>
                </IconButton>
            </Toolbar>
        </StyledAppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};


Navbar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };
  
export default Navbar;
