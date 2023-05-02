import React from 'react'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { Avatar, Box, Button, Container, TextField, Typography } from '@mui/material';

const AddAccount = () => {
    return (
        <Container component='main' maxWidth='xs'>
            <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar sx={{ m: 1 }}>
                    <PersonAddAlt1Icon />
                </Avatar>
                <Typography component='h1' variant='h5'>
                    Add account
                </Typography>
                <Box sx={{ mt: 1 }}>
                    <TextField
                        margin='normal'
                        required
                        // 領域端までの長さに固定する
                        fullWidth
                        autoComplete='name'
                        autoFocus
                        label='User Name'
                    />
                    <TextField
                        margin='normal'
                        required
                        fullWidth
                        autoComplete='email'
                        autoFocus
                        label='Email Adress'
                        // idとnameのどちらか
                    />
                    <TextField
                        margin='normal'
                        required
                        fullWidth
                        autoComplete='password'
                        autoFocus
                        label='Password'
                        // idとnameのどちらか
                    />
                    <Button fullWidth variant='contained' sx={{mt: 5, mb: 3}}>
                        Sign up
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}

export default AddAccount