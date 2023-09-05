import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import logobrand from '../images/BFJELogobrand.png';
import { Link } from "react-router-dom";
import { Menu, Search, Home, MiscellaneousServices, PeopleAlt, ExitToApp } from '@mui/icons-material/';
import { AppBar, Button, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, Toolbar, Typography, Stack } from '@mui/material';

const drawerWidth = 240;

const DashboardNavbar = (props) => {

    const LogoBrand = styled(Typography) ({
        color: "white",
        textDecoration: 'none',
        fontWeight: 'bold',
        '&:hover': {
          color: 'white'
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
            color: 'blue'
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
                    <StyledLinkMobile to="/dashboard">
                      <Home style={{marginRight: '10px'}}/>
                      User Dashboard
                      </StyledLinkMobile>
                </ListItem>
                <ListItem>
                    <StyledLinkMobile to="/services">
                      <MiscellaneousServices style={{marginRight: '10px'}}/>
                      Account Information
                      </StyledLinkMobile>
                </ListItem>
                <ListItem>
                    <StyledLinkMobile to="/about">
                      <PeopleAlt style={{marginRight: '10px'}}/>
                      Subscription
                      </StyledLinkMobile>
                </ListItem>
            </Stack>
            <hr />
            <StyledButton href="/login" variant='contained'>
                <ExitToApp className='me-2'/>
                Logout
            </StyledButton>
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
                </Stack>
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Stack direction='row' spacing={2}>
                        <StyledButton href="/login" variant='contained'>
                          <ExitToApp className='me-2'/>
                          Logout
                        </StyledButton>
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

DashboardNavbar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DashboardNavbar;
