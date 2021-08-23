import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';

import './custom.css'

export default () => (
    <BrowserRouter>
        <Layout>
            <Route exact path='/' component={Home} />
        </Layout>
    </BrowserRouter>
);
