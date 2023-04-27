import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';
import { MenuButton } from './MenuButton';
import { UserButton } from './UserButton';

export const Header = () => {
    return (
        <Box sx={{ flexGrow: 1, marginBottom: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <MenuButton />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        アプリケーション名(仮)
                    </Typography>
                    <UserButton />
                </Toolbar>
            </AppBar>
        </Box>
    )
}
