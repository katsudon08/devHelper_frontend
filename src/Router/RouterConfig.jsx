import React from 'react'
import { Home } from './../pages/Home';
import { NotFound } from './../pages/NotFound';
import { Project } from './../pages/Project';
import { TopPage } from '../pages/TopPage';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

// ダイナミックインポート
const Management = React.lazy(() => import('./../pages/Management'), [

]);
const Deployment = React.lazy(() => import('./../pages/Deployment'));
const UI_UX = React.lazy(() => import('./../pages/UI_UX'));
const Version = React.lazy(() => import('./../pages/Version'));

export const RouterConfig = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path='project' element={<Project />}>
                    <Route index element={<TopPage />} />
                    <Route path='Management' element={<Management />} />
                    <Route path='Deployment' element={<Deployment />} />
                    <Route path='UI_UX' element={<UI_UX />} />
                    <Route path='Version' element={<Version />} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
