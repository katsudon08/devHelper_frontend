import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TopPage } from '../pages/TopPage'

export const RouterConfig = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TopPage />} />;
            </Routes>
        </BrowserRouter>
    )
}
