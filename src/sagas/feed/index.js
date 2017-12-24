//Core
import { takeLatest } from 'redux-saga/effects';
//Instruments
import types from '../../actions/feed/types';
import { fetchUsersWorker } from './workers/fetchUsers';

export default {
    * fetchUsersWatcher () {
        yield takeLatest(types.FETCH_USERS, fetchUsersWorker);
    }
};
