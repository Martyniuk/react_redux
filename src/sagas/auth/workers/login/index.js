//Core
import { call, put } from 'redux-saga/effects';
import { actions } from 'react-redux-form';
//Instruments
import uiActions from 'actions/ui';
import authActions from 'actions/auth';
import { api } from 'instruments/api';

export function* loginWorker ({ payload: { email, password, remember } }) {
    try {
        yield put(uiActions.startFetchingAuth());
        const token = localStorage.getItem('token');
        const params = token
            ? {
                refresh_token: token,
                grant_type: 'refresh_token',
            }
            : {
                grant_type: 'password',
                username:   email,
                password,
            };
        const body = Object.keys(params).map((key) => {
            return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
        }).join('&');
        const response = yield call(fetch, `${api}/token`, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body,
        });
        const { accessToken, refreshToken, userId, expire, message } = yield call([response, response.json]);

        if (remember) {
            localStorage.setItem('token', refreshToken);
        }
        if (response.status !== 201) {
            throw new Error(message);
        }
        yield put(authActions.saveTokenSuccess(accessToken));
        yield put(authActions.loginSuccess());
    } catch ({ message }) {
        yield put(authActions.loginFail(message));
    } finally {
        yield put(uiActions.stopFetchingAuth());
    }
}
