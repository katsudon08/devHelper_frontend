import React from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { DrawerList } from './DrawerList';

export const MenuButton = () => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawerHandler = () => {
        setOpen(!open);
    }

    return (
        <>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleDrawerHandler}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                onClose={toggleDrawerHandler}
                anchor='left'
                open={open}
            >
                <DrawerList toggleDrawerHandler={toggleDrawerHandler} />
            </Drawer>
        </>
    )
}
