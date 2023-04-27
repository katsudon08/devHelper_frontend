import React from 'react'
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Divider, Tooltip } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

export const UserButton = () => {
    const accounts = ['aiueo', 'kakikukeko', 'sasisuseso'];
    const icons = [<PersonAdd />, <Settings />, <Logout />];
    const settings = ['Add account', 'Settings', 'Logout'];

    const [anchorELUser, setAnchorELUser] = React.useState(null);
    const open = Boolean(anchorELUser);

    const userClickHandler = (e) => {
        setAnchorELUser(e.currentTarget);
    }

    const userCloseHandler = () => {
        setAnchorELUser(null);
    }

    return (
        <>
            <Tooltip title="open settings">
                <IconButton
                    id='user-settings'
                    size='large'
                    aria-label='account of current user'
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color='inherit'
                    onClick={userClickHandler}
                >
                    <AccountCircle sx={{ width: 31, height: 31 }} />
                </IconButton>
            </Tooltip>
            <Menu
                id='menu'
                anchorEl={anchorELUser}
                open={open}
                onClose={userCloseHandler}
                MenuListProps={{
                    'aria-labelledby': 'user-settings',
                }}
            >
                {accounts.map((account, key) => (
                    <MenuItem key={key} onClick={userCloseHandler}>
                        <Avatar sx={{ width: 24, height: 24 }} />
                        <Typography textAlign="center" variant='h6' marginLeft={2}>
                            {account}
                        </Typography>
                    </MenuItem>
                ))}
                <Divider />
                {settings.map((element, key) => (
                    <MenuItem key={key} onClick={userCloseHandler}>
                        {icons[key]}
                        <Typography textAlign="center" marginLeft={2}>
                            {element}
                        </Typography>
                    </MenuItem>
                ))}
            </Menu>
        </>
    )
}
