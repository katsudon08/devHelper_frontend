import React from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export const MenuButton = () => {
    const [anchorELMenu, setAnchorELMenu] = React.useState(null);

    const menuClickHandler = (e) => {
        setAnchorELMenu(e.currentTarget);
    }

    const menuCloseHandler = (e) => {
        setAnchorELMenu(null);
    }

    return (
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={menuClickHandler}
        >
            <MenuIcon />
        </IconButton>
    )
}
