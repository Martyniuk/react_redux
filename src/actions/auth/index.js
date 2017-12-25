// Types
import types from './types';

export default Object.freeze({
    login: (credentials) => ({
        type:    types.LOGIN,
        payload: credentials,
    }),
    loginSuccess: () => ({
        type: types.LOGIN_SUCCESS,
    }),
    loginFail: (message) => ({
        type:    types.LOGIN_FAIL,
        payload: message,
    }),
    logout: () => ({
        type: types.LOGOUT,
    }),
    logoutSuccess: () => ({
        type: types.LOGOUT_SUCCESS,
    }),
    logoutFail: (message) => ({
        type:    types.LOGOUT_FAIL,
        payload: message,
    }),
    saveToken: (token) => ({
        type:    types.SAVE_TOKEN,
        payload: token,
    }),
    saveTokenSuccess: (token) => ({
        type:    types.SAVE_TOKEN_SUCCESS,
        payload: token,
    }),
    saveTokenFail: (message) => ({
        type:    types.SAVE_TOKEN_FAIL,
        payload: message,
    }),
});
