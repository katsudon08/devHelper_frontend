import React from 'react'
import Container from '@mui/material/Container';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { Box, TextField, Typography } from '@mui/material';

const SignIn = () => {
    return (
        <Container component='main' maxWidth='xs'>
            <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar sx={{ m: 1 }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>
                    Sign in
                </Typography>
                <Box sx={{ m: 1 }}>
                    <TextField
                        margin='normal'
                        required
                        // 領域端までの長さに固定する
                        fullWidth
                        autoComplete='name'
                        autoFocus
                        label='User Name'
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
                    <Button fullWidth variant='contained' sx={{ mt: 5, mb: 3 }}>
                        sign in
                    </Button>

                    <Box textAlign='center'>
                        {/* ルーティングリンクの実装を後に行う */}
                        Don't have account?Sign Up
                    </Box>

                </Box>
            </Box>
        </Container>
    )
}

export default SignIn