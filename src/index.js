// Core
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';
// Instruments
import './theme/reset.css';
import store, { history } from './store';
//Components
import Routes from './routes';

render(
    <Provider store = { store }>
        <Router history = { history }>
            <Routes />
        </Router>
    </Provider>
    , document.getElementById('root'));
