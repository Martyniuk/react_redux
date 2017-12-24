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
        const params = {
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
            body
        });
        const { accessToken, refreshToken, userId, expire, message } = yield call([response, response.json]);

        if (remember) {
            localStorage.setItem('token', accessToken);
            //console.log(`access token got from localStorage --> ${localStorage.getItem('token')}`);
        }
        //console.log(`data(token that has to come) --> ${JSON.stringify(data)}`);
        if (response.status !== 201) {
            console.log(`Error --> status is not 200 --- ${response.status}`);
            //TODO: if token will be outdated --> there should be check on this status and then proper action should be called
            throw new Error(message);
        }
        yield put(authActions.loginSuccess());
        yield put(authActions.saveTokenSuccess(accessToken));
    } catch ({ message }) {
        yield put(authActions.loginFail(message));
    } finally {
        yield put(uiActions.stopFetchingAuth());
    }
}
