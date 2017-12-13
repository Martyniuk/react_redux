// Core
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { bool, func, object } from 'prop-types';
import { connect } from 'react-redux';
import { Switch, withRouter } from 'react-router';
// Instruments
import pages from './pages';
import authActions from 'actions/auth';
import uiActions from 'actions/ui';
// Routing
import Public from './Public';
import Private from './Private';
// Components
import Loading from '../components/Loading';
import Catcher from '../components/ Catcher';

class Routes extends Component {
    static propTypes = {
        authenticated: bool.isRequired,
        history:       object.isRequired,
        initialize:    func.isRequired,
        initialized:   bool.isRequired,
        location:      object.isRequired,
        login:         func.isRequired,
    };

    componentDidMount () {
        const { authenticated, history, login, initialize } = this.props;
        const token = localStorage.getItem('token');

        token ? login({ login }) : initialize();

        if (authenticated) {
            history.replace(pages.feed);
        }
    }
    componentWillReceiveProps ({
        authenticated,
        initialized,
        location,
        history
    }) {
        if (authenticated && !initialized) {
            this.props.initialize();
        }
        if (authenticated) {
            if (location.pathname === pages.login) {
                history.replace(pages.feed);
            }
        }
    }
    render () {
        const { authenticated, initialized } = this.props;

        return initialized ? (
            <Catcher>
                <Switch>
                    { !authenticated && <Public /> }
                    <Private />
                </Switch>
            </Catcher>
        ) : (
            <Loading />
        );
    }
}

const mapStateToProps = (state) => ({
    initialized:   state.ui.get('initialized'),
    authenticated: state.auth.get('authenticated')
});

const { login } = authActions;
const { initialize } = uiActions;

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ login, initialize }, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
