import React from 'react'
import { Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import Avatar from '@mui/material/Avatar';

export const DrawerList = ({ toggleDrawerHandler }) => {
    const icons = [<AssignmentIcon />, <BorderColorIcon />, <CloudSyncIcon />, <BrowserUpdatedIcon />];
    const items = ['Management', 'UI/UX', 'Version', 'Deployment'];

    return (
        <List>
            {items.map((item, key) => (
                <ListItem key={key}>
                    {/* ここに、それぞれの画面への遷移関数を記述 */}
                    <ListItemButton onClick={() => {console.log("clicked")}}>
                        <ListItemAvatar>
                            <Avatar sx={{ width: 35, height: 35 }} key={key}>
                                {icons[key]}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText key={key}>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                {item}
                            </Typography>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    )
}
