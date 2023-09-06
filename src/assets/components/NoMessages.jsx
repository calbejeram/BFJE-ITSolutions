import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import SpeakerNotesOffIcon from '@mui/icons-material/SpeakerNotesOff';

const NoMessages = () => {
  return (
    <>
        <Box className="d-flex align-items-center justify-content-center bg-danger bg-opacity-50 p-5 rounded-3 h-100">
            <Stack direction="column" className='text-center'>
                <Typography><SpeakerNotesOffIcon fontSize='large'/></Typography>
                <Typography variant='h4' className='fw-bold'>No Messages</Typography>
            </Stack>
        </Box>
    </>
  )
}

export default NoMessages;
