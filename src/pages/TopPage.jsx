import React from 'react'
import { Header } from '../components/Header'
import { Box, Button, Stack } from '@mui/material'

export const TopPage = () => {
    return (
        <Box>
            <Header />
            <Box sx={{flexGrow: 1}} margin={5} >
                <Button variant='outlined' color='accentColor'>button</Button>
                <Button variant='contained' color='accentColor'>button</Button>
                <Button variant='text' color='accentColor'>button</Button>
                <Button variant='contained' color='primary'>button</Button>
            </Box>
        </Box>
    )
}
