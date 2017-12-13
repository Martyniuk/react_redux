//Core
import { takeEvery } from 'redux-saga/effects';
//Instruments
import types from 'actions/auth/types';
import { loginWorker } from './workers/login/';

export default Object.freeze({
    * loginWatcher () {
        yield takeEvery(types.LOGIN, loginWorker);
    }
});
