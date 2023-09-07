import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import SearchOffIcon from '@mui/icons-material/SearchOff';

const NotFound = () => {
  return (
    <Box className="d-flex align-items-center justify-content-center bg-danger bg-opacity-50 p-5 rounded-3 h-100">
        <Stack direction="column" className='text-center'>
            <Typography><SearchOffIcon fontSize='large'/></Typography>
            <Typography variant='h4' className='fw-bold'>Cannot Find</Typography>
            <Typography variant='body2' className='bg-danger bg-opacity-50 px-3 py-2 rounded-3 fw-medium mb-3'>Check your input correctly.</Typography>
        </Stack>
    </Box>
  )
}

export default NotFound
