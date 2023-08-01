import React, { useState} from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemButton, ListItemText, Switch } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { Link } from "react-router-dom";
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    Button,
} from 'reactstrap';
import styled from '@emotion/styled';

const DashboardSidebar = (props) => {
    const [open, setOpen] = useState('');
    const toggle = (id) => {
        if (open === id) {
        setOpen();
        } else {
        setOpen(id);
        }
    };

    const StyledLink = styled(Link)({
        textDecoration: 'None',
        borderLeft: '2px solid blue',
        padding: '0px 20px'
    });

  return (
    <Box width='350px' p={2} sx={{display: {xs: "none", sm: "block"}}} height='100vh' bgcolor='lightgray'>
      <Box position="fixed" pt={10} width='320px'>
        <Accordion flush open={open} toggle={toggle}>
                <ListItem className='w-100'>
                    <ListItemButton to='/DashboardMain'>
                    <ListItemIcon>
                        <ArticleIcon/>
                    </ListItemIcon>
                    <ListItemText primary="User Dashboard" />
                    </ListItemButton>
                </ListItem>
                <ListItem className='w-100'>
                    <ListItemButton to='/AdminDashboard'>
                    <ListItemIcon>
                        <ArticleIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Account Information" />
                    </ListItemButton>
                </ListItem>
                <ListItem className='w-100'>
                    <ListItemButton to='/DashboardMain'>
                    <ListItemIcon>
                        <ArticleIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Subscription" />
                    </ListItemButton>
                </ListItem>
        </Accordion>
      </Box>
    </Box>
  )
}

export default DashboardSidebar
