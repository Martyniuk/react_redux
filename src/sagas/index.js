//Core
import { all } from 'redux-saga/effects';
//Instruments
import auth from './auth';
import feed from './feed';

export function* saga () {
    yield all([
        auth.loginWatcher(),
        feed.fetchUsersWatcher()
    ]);
}
