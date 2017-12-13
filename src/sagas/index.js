//Core
import { all } from 'redux-saga/effects';
//Instruments
import auth from './auth';

export function* saga () {
    yield all([
        auth.loginWatcher()
    ]);
}
