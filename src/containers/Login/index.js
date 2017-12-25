// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { func, bool } from 'prop-types';
//Instruments
import authActions from 'actions/auth';
import { uid } from '../../helpers';
//Components
import LoginForm from 'components/Forms/Login';
import Spinner from 'components/Spinner';
//import Catcher from 'components/Catcher';

class Login extends Component {
    static propTypes = {
        authFetching: bool.isRequired,
        login:        func.isRequired,
    };
    render () {
        const { authFetching, login } = this.props;

        return [
            <Spinner key = { uid() } spin = { authFetching } />,
            <LoginForm authFetching = { authFetching } key = { uid() } login = { login } />
        ];
    }
}

const mapStateToProps = ({ ui }) => ({
    authFetching: ui.get('authFetching'),
});

const mapDispatchToProps = (dispatch) => ({
    login: bindActionCreators(authActions.login, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
