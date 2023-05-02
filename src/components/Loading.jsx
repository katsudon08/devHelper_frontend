import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { Container, Box } from '@mui/material';

const Loading = () => {
    return (
        <Box sx={{display: 'grid', placeContent: 'center'}}>
            <CircularProgress />
        </Box>
    )
}

export default Loading