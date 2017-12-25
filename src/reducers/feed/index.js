//Core
import { List } from 'immutable';
//Instruments
import types from '../../actions/feed/types';

const initialState = List([]);

const usersList = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.FETCH_USERS_SUCCESS:
            console.log(`payload -- > ${JSON.stringify(payload)}`);
            return List(payload);
        case types.CREATE_USER_SUCCESS:
            console.log(`*FEED REDUCER* create_user_success --> ${payload}`);
            return state.unshift(payload);
        case types.DELETE_USER_SUCCESS:
            return state.filter((id) => id !== payload);
        default:
            return state;
    }
};

export default usersList;
