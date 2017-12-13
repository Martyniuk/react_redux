//Core
import { Map } from 'immutable';
//Instruments
import types from 'actions/auth/types';

const initialState = Map({ authenticated: false });

export default (state = initialState, action = {}) => {
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
