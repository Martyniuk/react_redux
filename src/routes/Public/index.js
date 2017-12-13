//Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';
//Instruments
import pages from '../pages';
//Components
import Login from '../../containers/Login';

export default class Public extends Component {
    render () {
        return (
            <Switch>
                <Route exact component = { Login } path = { pages.login } />
                <Redirect to = { pages.login } />
            </Switch>
        );
    }
}
