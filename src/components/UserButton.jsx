import React from 'react'
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';

export const UserButton = () => {
    const [anchorELUser, setAnchorELUser] = React.useState(null);

    const userClickHandler = (e) => {
        setAnchorELUser(e.currentTarget);
    }

    const userCloseHandler = () => {
        setAnchorELUser(null);
    }

    return (
        <IconButton
            size='large'
            aria-label='account of current user'
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color='inherit'
            onClick={userClickHandler}
        >
            <AccountCircle />
        </IconButton>
    )
}
