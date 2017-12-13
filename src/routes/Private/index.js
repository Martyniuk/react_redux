//Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';
//Instruments
import pages from '../pages';
//Components
import Feed from '../../containers/Feed';

export default class Private extends Component {
    render () {
        return (
            <Switch>
                <Route exact component = { Feed } path = { pages.feed } />
                <Redirect to = { pages.feed } />
            </Switch>
        );
    }
}
