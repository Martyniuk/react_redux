//Core
import { takeEvery } from 'redux-saga/effects';
//Instruments
import types from '../../actions/feed/types';
import { fetchUsersWorker } from './workers/fetchUsers';

export default {
    * fetchUsersWatcher () {
        yield takeEvery(types.FETCH_USERS, fetchUsersWorker);
    },
};
