import { AppBar, Button, Toolbar, Container, IconButton, ThemeProvider } from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb';
import React from 'react'

export const Header = () => {
    return (
        // モダンなデザイン、あまり装飾を派手にしない
        <AppBar position='static' color='mainColor'>
            <Toolbar>
                <Button variant='text' color='accentColor' sx={{mr: 1, ml: 1}}>BUTTON</Button>
                <Button variant='contained' color='accentColor' sx={{mr: 1, ml: 1}}>BUTTON</Button>
                <Button variant='outlined' color='accentColor' sx={{mr: 1, ml: 1}}>BUTTON</Button>

                <Button variant='text' color='primary' sx={{mr: 1, ml: 20}}>BUTTON</Button>
                <Button variant='contained' color='primary' sx={{mr: 1, ml: 1}}>BUTTON</Button>
                <Button variant='outlined' color='primary' sx={{mr: 1, ml: 1}}>BUTTON</Button>
            </Toolbar>
        </AppBar>
    )
}
