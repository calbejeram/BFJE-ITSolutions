import styled from '@emotion/styled';
import { Box, Button, Tooltip  } from '@mui/material';
import React, { useState, useEffect } from 'react';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 20) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

    useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
        window.removeEventListener('scroll', toggleVisibility);
    };
    }, []);


    const BackToTopButton = styled(Button)({
        position: 'fixed',
        top: '90%',
        right: '5%'
    });

  return (
    <Box className={`backToTopBtn ${isVisible ? 'visible' : 'hidden'}`}>
        <Tooltip title='Back to Top' placement='bottom'>
            <BackToTopButton variant='contained' href='#'>
                <KeyboardDoubleArrowUpIcon fontSize='large'/>
            </BackToTopButton>
        </Tooltip>
    </Box>
  )
}

export default BackToTop;
