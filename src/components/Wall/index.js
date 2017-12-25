//Core
import React, { Component } from 'react';
import { object, array } from 'prop-types';
import { Transition, CSSTransition, TransitionGroup } from 'react-transition-group';
//Instruments
import Styles from './styles';
//Components
import User from 'components/User';

export default class Wall extends Component {
    static propTypes = {
        actions: object.isRequired,
        users:   array.isRequired,
    };

    componentDidMount () {
        this.props.actions.fetchUsers();
    }

    render () {
        const { actions, users: usersList } = this.props;
        const users = usersList.map(
            ({
                id,
                email,
                firstName,
                lastName,
                registrationDate,
                type,
                permissions,
            }) => (
                <CSSTransition
                    className = { {
                        enter:       Styles.userInStart,
                        enterActive: Styles.userInEnd,
                        exit:        Styles.userOutStart,
                        exitActive:  Styles.userOutEnd,
                    } }
                    key = { id }
                    timeout = { { enter: 700, exit: 600 } }>
                    <User
                        email = { email }
                        firstName = { firstName }
                        id = { id }
                        lastName = { lastName }
                        permissions = { permissions }
                        registrationDate = { registrationDate }
                        type = { type }
                    />
                </CSSTransition>
            ));

        return (
            <div className = { Styles.wall }>
                <p className = { Styles.greet }>Happy New Year! Yo-Ho-Ho!</p>
                <TransitionGroup>{ users }</TransitionGroup>
            </div>
        );
    }
}
