import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TopPage } from '../pages/TopPage'
import { NotFound } from '../pages/NotFound'

export const RouterConfig = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<TopPage />} />;
                <Route path='*' element={NotFound} />
            </Routes>
        </BrowserRouter>
    )
}
