//Core
import React, { Component } from 'react';
import { object, array } from 'prop-types';
//Instruments
//import Styles from './styles';
//Components

export default class Wall extends Component {
    static propTypes = {
        actions: object.isRequired,
        users:   array.isRequired
    };

    componentDidMount () {
        this.props.actions.fetchUsers();
    }

    render () {
        const { actions, users: usersList } = this.props;

        console.log(`userList ${usersList}`);

        return (
            <div>
                <h2>Users:</h2>
                <div>
                </div>
            </div>
        );
    }
}
