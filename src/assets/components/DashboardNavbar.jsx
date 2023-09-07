import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import logobrand from '../images/BFJELogobrand.png';
import { Link } from "react-router-dom";
import { Menu, Search, ExitToApp, } from '@mui/icons-material/';
import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, Toolbar, Typography, Stack, Badge } from '@mui/material';
import { DropdownMenu, DropdownToggle, UncontrolledDropdown, DropdownItem, Button } from 'reactstrap';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';

const drawerWidth = 240;

const DashboardNavbar = (props) => {

    const [emails, setEmails] = useState(
      JSON.parse(localStorage.getItem("ContactForm")) || []
    );

    useEffect(() => {
        // Save the customers data to localStorage whenever it changes
        localStorage.setItem("ContactForm", JSON.stringify(emails));
    }, [emails]);

    const LogoBrand = styled(Typography) ({
        color: "black",
        textDecoration: 'none',
        fontWeight: 'bold',
        '&:hover': {
          color: 'black'
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
    
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const MobileLink = styled(Link)({
      '&:hover': {
        backgroundColor: 'lightgray'
      }
    });

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
              <MobileLink to="/admin" className='btn p-3 mb-1 d-flex align-items-center fw-bold fs-5'><HomeIcon className='me-2'/><span>Admin Dashboard</span></MobileLink>
              <MobileLink to="/admin/customers-list" className='btn p-3 mb-1 d-flex align-items-center'><Badge badgeContent={4} color="error" className='me-3'><PeopleAltIcon color="black"/></Badge><span>Customers</span></MobileLink>
              <MobileLink to="/admin/orders-list" className='btn p-3 mb-1 d-flex align-items-center'><Badge badgeContent={4} color="error" className='me-3'><ShoppingCartIcon color="black"/></Badge><span>Orders</span></MobileLink>
              <MobileLink to="/admin/messages-list" className='btn p-3 mb-1 d-flex align-items-center'><Badge badgeContent={emails.length} color="error" className='me-3'><EmailIcon color="black"/></Badge><span>Messages</span></MobileLink>
            </Stack>
            <hr />
            <Button href="/login" className='btn btn-info'>
                <ExitToApp className='me-2'/>
                Logout
            </Button>
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
                    color="inherit"
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
                      className='d-lg-flex align-items-center justify-content-center d-none text-white'
                  >
                      BFJE IT Solutions
                  </LogoBrand>
                </Stack>
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                  <UncontrolledDropdown group>
                    <Button className='btn btn-info fw-bold'>
                      <PersonIcon className='me-1'/>
                      Admin
                    </Button>
                    <DropdownToggle
                      caret
                      className='btn btn-info'
                    />
                    <DropdownMenu>
                      <DropdownItem header className='fw-bold text-black'>
                        Admin Dashboard
                      </DropdownItem>
                      <DropdownItem component="a" href='/login'>
                        <Typography className='text-decoration-none text-black'>Logout</Typography>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
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

DashboardNavbar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DashboardNavbar;
