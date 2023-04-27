import * as React from 'react';
import { Home } from './pages/Home';
import { Management } from './pages/Management';
import { Deployment } from './pages/Deployment';
import { UI_UX } from './pages/UI_UX';
import { Version } from './pages/Version';
import { NoMatch } from './pages/NoMatch';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/management' element={<Management />} />
            <Route path='/deployment' element={<Deployment />} />
            <Route path='/UI_UX' element={<UI_UX />} />
            <Route path='/version' element={<Version />} />
            <Route path='*' element={<NoMatch />} />
        </Routes>
    )
}

export default App
