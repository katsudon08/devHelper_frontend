import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';
import { MenuButton } from './MenuButton';
import { UserButton } from './UserButton';

export const Header = ({ isNav = false, notHome = true }) => {
    const title = 'アプリケーション名(仮)';
    return (
        <Box sx={{ flexGrow: 1, marginBottom: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    {notHome && <MenuButton />}
                    {isNav ? console.log("navigation") :
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            {notHome ? console.log("notHome") : title}
                        </Typography>}
                    <UserButton />
                </Toolbar>
            </AppBar>
        </Box>
    )
}
