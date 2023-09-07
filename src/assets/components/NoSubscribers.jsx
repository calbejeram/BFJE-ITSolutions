import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import InfoIcon from '@mui/icons-material/Info';


const NoSubscribers = () => {
  return (
    <>
        <Box className="d-flex align-items-center justify-content-center bg-danger bg-opacity-50 p-5 rounded-3 h-100">
            <Stack direction="column" className='text-center'>
                <Typography><PersonOffIcon fontSize='large'/></Typography>
                <Typography variant='h4' className='fw-bold'>No Subscribers</Typography>
                <Typography variant='body2' className='bg-danger bg-opacity-50 px-3 py-2 rounded-3 fw-medium mb-3'><InfoIcon className='me-1 text-black'/>To see how it works, Subscribe at <a href="/">Any page in Footer Section</a> at the bottom page and go back here.</Typography>
            </Stack>
        </Box>
    </>
  )
}

export default NoSubscribers;
