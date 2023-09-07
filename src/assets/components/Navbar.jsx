import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import logobrand from '../images/BFJELogobrand.png';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link, useLocation } from "react-router-dom";
import { AppBar, Button, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, Toolbar, Typography, Stack } from '@mui/material';
import { Menu, Search } from '@mui/icons-material/';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';


const drawerWidth = 240;

const Navbar = (props) => {

    const LogoBrand = styled(Typography) ({
        color: "white",
        textDecoration: 'none',
        fontWeight: 'bold',
        '&:hover': {
          color: 'white'
        }
    });
    
    const StyledLink = styled(Link) ({
        color: "white",
        textDecoration: "none",
        fontWeight: "medium",
        textAlign: "center",
        margin: "0px 10px",
        width: 'fitcontent',
        padding: "0 10px",
        "&:hover":{
            color: 'lightgrey'
        }
    });

    const StyledButton = styled(Button) ({
      '&:hover': {
        color: 'white',
        opacity: 0.7
      }
    });

    const AdminDashboardLink = styled(Link)({
      '&:hover': {
        backgroundColor: 'lightgray'
      }
    });
    
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    // Active Link
    const [activeLink, setActiveLink] = useState("active");
    const location = useLocation();

    // Function to handle link click and update the active link
    const handleLinkClick = (to) => {
      setActiveLink(to);
    };

    // Update the active link when the URL changes
    useEffect(() => {
      setActiveLink(location.pathname);
    }, [location.pathname]);

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }} className="h-100">
          <Stack>
            <Link component='a' href='#'>
                <img src={logobrand} alt="Logo Brand" style={{ width: '50px', m: 0}}/>
            </Link>
            <Typography component='a' href='#' sx={{ my: 0, color: 'black', textDecoration: 'none', fontWeight: 'bold' }} className='fs-5'>
                BFJ Web Design
            </Typography>
          </Stack>
          <Divider />
          <List>
            <Stack direction="column">
                <AdminDashboardLink to="/" className='btn p-3 mb-1 d-flex align-items-center'><HomeIcon className='me-2'/><span>Home</span></AdminDashboardLink>
                <AdminDashboardLink to="/services" className='btn p-3 mb-1 d-flex align-items-center'><MiscellaneousServicesIcon className='me-2'/><span>Services</span></AdminDashboardLink>
                <AdminDashboardLink to="/about" className='btn p-3 mb-1 d-flex align-items-center'><InfoIcon className='me-2'/><span>About Us</span></AdminDashboardLink>
                <AdminDashboardLink to="/contacts" className='btn p-3 mb-1 d-flex align-items-center'><ConnectWithoutContactIcon className='me-2'/><span>Contact Us</span></AdminDashboardLink>
            </Stack>
            <Stack direction='row' spacing={2} className='d-flex align-items-start justify-content-center'>
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
        <AppBar component="nav" position='fixed'>
            <Toolbar sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <IconButton
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ display: { md: 'none', color: 'white' } }}
                >
                    <Menu fontSize='large' />
                </IconButton>
                <Stack direction='row'>
                  <StyledLink component="a" href='#'className='d-block'>
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
                      BFJ Web Design
                  </LogoBrand>
                  <Box className='d-lg-flex align-items-center justify-content-center ms-5 d-none'>
                    <Stack direction='row'>
                        <StyledLink to="/" className={activeLink === '/' ? 'active' : ''}>Home</StyledLink>
                        <StyledLink to="/services" className={activeLink === '/services' ? 'active' : ''}>Services</StyledLink>
                        <StyledLink to="/about" className={activeLink === '/about' ? 'active' : ''}>About Us</StyledLink>
                        <StyledLink to="/contacts" className={activeLink === '/contacts' ? 'active' : ''}>Contact Us</StyledLink>
                    </Stack>
                  </Box>
                </Stack>
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Stack direction='row' spacing={2}>
                    <StyledButton href="/login" target='_Blank' variant='contained'>
                        <ExitToAppIcon className='me-2'/>
                        Login
                      </StyledButton>
                    </Stack>
                </Box>
                <IconButton
                    color="inherit"
                    edge="start"
                    sx={{ display: { md: 'none', visibility: 'hidden' } }}
                >
                    <Search fontSize='large'/>
                </IconButton>
            </Toolbar>
        </AppBar>
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
