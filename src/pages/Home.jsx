import React from 'react'
import Typography from '@mui/material/Typography'
import Button from "@mui/material/Button";
import { Box } from '@mui/material';
import { Header } from '../components/Header';

export const Home = () => {
    return (
        <>
            <Header notHome={false} />
            <Box sx={{ display: 'flex' }}>
                <Typography variant='h4' sx={{ flexGrow: 1 }}>Project</Typography>
                <Button variant="contained">New Project</Button>
            </Box>
        </>
    )
}
