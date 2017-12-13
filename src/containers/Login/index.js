// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//Instruments
import { func, bool } from 'prop-types';
import authActions from 'actions/auth';
import LoginForm from 'components/Forms/Login';

class Login extends Component {
    static propTypes = {
        authFetching: bool.isRequired,
        login:        func.isRequired
    };
    render () {
        const { authFetching, login } = this.props;

        return (
            <div>
                <LoginForm authFetching = { authFetching } login = { login } />
            </div>
        );
    }
}

const mapStateToProps = ({ ui }) => ({
    authFetching: ui.get('authFetching')
});

const mapDispatchToProps = (dispatch) => ({
    login: bindActionCreators(authActions.login, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
