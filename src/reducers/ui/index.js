// Core
import { Map } from 'immutable';
// Instruments
import types from 'actions/ui/types';

const initialState = Map({
    initialized:      false,
    authFetching:     false,
    feedFetching:     false,
    profileFetching:  false,
    profileEditing:   false,
    avatarFetching:   false,
    passwordFetching: false
});

export default (state = initialState, { type }) => {
    switch (type) {
        case types.INITIALIZE:
            return state.set('initialized', true);
        case types.START_FETCHING_AUTH:
            return state.set('authFetching', true);
        case types.STOP_FETCHING_AUTH:
            return state.set('authFetching', false);
        case types.START_FETCHING_FEED:
            return state.set('feedFetching', true);
        case types.STOP_FETCHING_FEED:
            return state.set('feedFetching', false);
        case types.START_FETCHING_PROFILE:
            return state.set('profileFetching', true);
        case types.STOP_FETCHING_PROFILE:
            return state.set('profileFetching', false);
        case types.START_EDITING_PROFILE:
            return state.set('profileEditing', true);
        case types.STOP_EDITING_PROFILE:
            return state.set('profileEditing', false);
        default:
            return state;
    }
};
