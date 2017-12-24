// Types
import types from './types';

export default Object.freeze({
    initialize: () => ({
        type: types.INITIALIZE
    }),
    startFetchingAuth: () => ({
        type: types.START_FETCHING_AUTH
    }),
    stopFetchingAuth: () => ({
        type: types.STOP_FETCHING_AUTH
    }),
    startFetchingFeed: () => ({
        type: types.START_FETCHING_FEED
    }),
    stopFetchingFeed: () => ({
        type: types.STOP_FETCHING_FEED
    })
});


/*
*   startFetchingProfile: () => ({
        type: types.START_FETCHING_PROFILE
    }),
    stopFetchingProfile: () => ({
        type: types.STOP_FETCHING_PROFILE
    }),
    startEditingProfile: () => ({
        type: types.START_EDITING_PROFILE
    }),
    stopEditingProfile: () => ({
        type: types.STOP_EDITING_PROFILE
    })
*
*
* */