//Core
import { call, put } from 'redux-saga/effects';
import { actions } from 'react-redux-form';
//Instruments
//import uiActions from 'actions/ui';
import authActions from 'actions/auth';
import { api } from 'instruments/api';

export function* loginWorker ({ payload: { email, password, remember } }) {
    try {
        const params = {
            grant_type: 'password',
            username:   email,
            password,
        };

        console.log(`-------------> user ${JSON.stringify(params)}`);

        const body = Object.keys(params).map((key) => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
        }).join('&');
        const url = `${api}/token`;
        const response = yield call(fetch, url, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body
        });
        const data = yield call([response, response.json]);

        // { accessToken, refreshToken, userId, expire }

        if (remember) {
            localStorage.setItem('token', data.accessToken);
            console.log(`access token got from localStorage --> ${localStorage.getItem('token')}`)
        }
        console.log(`data(token that has to come) --> ${JSON.stringify(data)}`);

        if (response.status !== 201) {
            console.log(`Error --> status is not 200 ${response.status}`);
            // if token will be outdated --> there should be check on this status and then proper action should be called
            throw new Error(data.message);
        }
        yield put(authActions.loginSuccess());
    } catch ({ message }) {
        yield put(authActions.loginFail(message));
    }
};
