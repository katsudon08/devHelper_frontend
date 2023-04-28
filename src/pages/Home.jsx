import React from 'react'
import Typography from '@mui/material/Typography'
import Button from "@mui/material/Button";
import { Box } from '@mui/material';
import { Header } from '../components/Header';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <Header notHome={false} />
            <Box sx={{ display: 'flex' }}>
                <Typography variant='h4' sx={{ flexGrow: 1 }}>Project</Typography>
                <Button variant="contained" onClick={() => navigate("Project")}>New Project</Button>
            </Box>
        </>
    )
}
