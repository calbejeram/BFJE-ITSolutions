import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import LogoBrand from '../images/BFJELogobrand.png';
import {  } from 'reactstrap';

const PageNotFound = () => {
  return (
    <>
        <Box sx={{ height: '100vh'}} className="d-flex align-items-center justify-content-center">
            <Box className="text-center p-3">
                <img src={LogoBrand} alt="Brand Logo" width={100} />
                <Typography variant='h2'>404 PAGE NOT FOUND</Typography>
                <Typography paragraph>Looks like you are looking for a page that is not on this website.</Typography>
                <Button href="/" variant='contained' className='text-white'>Go back to Homepage.</Button>
            </Box>
        </Box>
    </>
  )
}

export default PageNotFound
