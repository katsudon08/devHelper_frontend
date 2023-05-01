import React from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Box, Button, Container, TextField, Typography } from '@mui/material';

const SignUp = () => {
    return (
        <Container component='main' maxWidth='xs'>
            <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar sx={{ m: 1 }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>
                    Sign up
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
                    <Box textAlign='center'>
                        {/* 後にサインインへのルーティング実装 */}
                        Already have an account?Sign In
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default SignUp