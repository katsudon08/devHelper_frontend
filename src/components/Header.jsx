import { AppBar, Button, Toolbar, IconButton, Typography, Container, Stack } from '@mui/material'
import React from 'react'

export const Header = () => {
    const signInClickHandler = () => {console.log('signin')}
    const signUpClickHandler = () => {console.log('signup')}
    const iconClickHandler = () => {console.log('iconClick')}

    return (
        // モダンなデザイン、あまり装飾を派手にしない
        // ベースカラー:白 メインカラー:少し明るい黒 アクセントカラー:黄色
        <AppBar position='static' color='mainColor'>
            <Toolbar >
                <Container maxWidth='xl' sx={{ display: 'inline-flex' }}>
                    <IconButton color='accentColor' onClick={iconClickHandler}>icon</IconButton>
                    <Typography sx={{ flexGrow: 1 }} />
                    <Stack direction='row' spacing={2}>
                        <Button variant='contained' color='accentColor' sx={{ mr: 1, ml: 1 }} onClick={signInClickHandler}>サインイン</Button>
                        <Button variant='outlined' color='accentColor' sx={{ mr: 1, ml: 1 }} onClick={signUpClickHandler}>サインアップ</Button>
                    </Stack>
                </Container>
            </Toolbar>
        </AppBar>
    )
}
