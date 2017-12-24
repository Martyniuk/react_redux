//Core
import { combineReducers } from 'redux';
import { Map } from 'immutable';
//Instruments
import types from 'actions/auth/types';

const authInitialState = Map({ authenticated: false });
const tokenInitialState = Map({ token: '' });

const authState = (state = authInitialState, action = {}) => {
    switch (action.type) {
        case types.SIGNUP_SUCCESS:
        case types.LOGIN_SUCCESS:
            return state.set('authenticated', true);
        case types.LOGOUT_SUCCESS:
            return state.set('authenticated', false);

        default:
            return state;
    }
};

const tokenState = (state = tokenInitialState, { type, payload }) => {
    switch (type) {
        case types.SAVE_TOKEN_SUCCESS:
            return state.set('token', payload);
        default:
            return state;
    }
};

export default combineReducers({
    authState,
    tokenState
});
