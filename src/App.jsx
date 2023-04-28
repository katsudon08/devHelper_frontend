import * as React from 'react';
import { Home } from './pages/Home';
import { Management } from './pages/Management';
import { Deployment } from './pages/Deployment';
import { UI_UX } from './pages/UI_UX';
import { Version } from './pages/Version';
import { NotFound } from './pages/NotFound';
import { Project } from './pages/Project';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path='project' element={<Project />}>
                    <Route index element={<Management />}/>
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

export default App
