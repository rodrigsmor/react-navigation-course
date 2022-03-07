import './Content.css';
import React from 'react';
import Home from '../../views/examples/Home';
import About from '../../views/examples/About';
import Params from '../../views/examples/Params';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../../views/examples/NotFound';

const Content = (props) => {
    return (
        <main className={'Content'}>
            <Routes>
                <Route path={'/'} element={<Home/>} exact />
                <Route path={'/about'} element={<About/>} />
                <Route path={'/params/:id'} element={<Params/>} />
                <Route path={'*'} element={<NotFound />} />
            </Routes>
        </main>
    );
}

export default Content;