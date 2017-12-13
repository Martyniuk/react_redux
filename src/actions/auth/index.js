// Types
import types from './types';

export default Object.freeze({
    login: (credentials) => ({
        type:    types.LOGIN,
        payload: credentials
    }),
    loginSuccess: () => ({
        type: types.LOGIN_SUCCESS
    }),
    loginFail: (message) => ({
        type:    types.LOGIN_FAIL,
        payload: message
    }),
    logout: () => ({
        type: types.LOGOUT
    }),
    logoutSuccess: () => ({
        type: types.LOGOUT_SUCCESS
    }),
    logoutFail: (message) => ({
        type:    types.LOGOUT_FAIL,
        payload: message
    })
});
