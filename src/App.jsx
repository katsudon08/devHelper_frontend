import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Button from '@mui/material/Button';
import { MenuButton } from './components/MenuButton';
import { UserButton } from './components/UserButton';
import { ToolBarText } from './components/ToolBarText';

function App() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <MenuButton />
                        <ToolBarText text={"チャット"}/>
                    <UserButton />
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default App
