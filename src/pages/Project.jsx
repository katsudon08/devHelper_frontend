import React from 'react'
import { Header } from '../components/Header'
import Container from '@mui/material/Container/Container'
import { Outlet, useLocation } from 'react-router-dom'

export const Project = () => {
    const location = useLocation();
    return (
        <>
            {(location.pathname == '/project/Management') ? <Header isNav={true} /> : <Header />}
            {/* 要素を中央寄せにするためにcontainerを使う */}
            <Container
                maxWidth="xl"
                sx={{ mt: 4, mb: 4 }}
            >
                {/* エラーバウンダリー */}
                <React.Suspense fallback={<div>loading</div>}>
                    <Outlet />
                </React.Suspense>
            </Container>
        </>
    )
}
