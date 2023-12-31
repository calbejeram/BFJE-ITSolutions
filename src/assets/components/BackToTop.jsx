import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { Box, Button, Tooltip  } from '@mui/material';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 80) {
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
        right: '5%',
        '&:hover': {
          color: 'white',
          opacity: 0.7
        }
    });

  return (
    <Box className={`backToTopBtn ${isVisible ? 'visible' : 'hidden'}`}>
        <Tooltip title='Back to Top' placement='bottom'>
            <BackToTopButton variant='contained' href='#'>
                <KeyboardDoubleArrowUpIcon fontSize='large'/>
            </BackToTopButton>
        </Tooltip>
    </Box>
  );
};

export default BackToTop;
