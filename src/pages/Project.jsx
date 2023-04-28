import React from 'react'
import { Header } from '../components/Header'
import { Outlet, useLocation } from 'react-router-dom'

export const Project = () => {
    const location = useLocation();
    return (
        <>
            {(location.pathname=='/project/Management') ? <Header isNav={true}/> : <Header /> }
            <Outlet />
        </>
    )
}
