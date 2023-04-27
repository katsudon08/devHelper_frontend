import React from 'react'
import { HomeHeader } from '../components/HomeHeader'
import Typography from '@mui/material/Typography'
import Button from "@mui/material/Button";
import { Stack } from '@mui/material';

export const Home = () => {
    return (
        <>
            <HomeHeader />
            {/* 一列にしたい */}
            <Typography sx={{flexGrow: 1}}>Project</Typography>
            <Button variant="contained">New Project</Button>
        </>
    )
}
