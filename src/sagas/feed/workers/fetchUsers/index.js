//Core
import { call, put, select } from 'redux-saga/effects';
//Instruments
import uiActions from '../../../../actions/ui';
import feedActions from '../../../../actions/feed';
import { api } from '../../../../instruments/api';

export function* fetchUsersWorker () {
    try {
        yield put(uiActions.startFetchingFeed());
        const token = yield select((state) => state.auth.tokenState.get('token'));
        const response = yield call(fetch, `${api}/users`, {
            method:  'GET',
            headers: {
                'Content-Type':  'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
        const data = yield call([response, response.json]);

        if (response.status !== 200) {
            throw new Error(data.message);
        }
        yield put(feedActions.fetchUsersSuccess(data));
    } catch ({ message }) {
        yield put(feedActions.fetchUsersFail(message));
    } finally {
        yield put(uiActions.stopFetchingFeed());
    }
}
