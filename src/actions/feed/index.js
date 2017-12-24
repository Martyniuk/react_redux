//Types
import types from './types';

export default Object.freeze({
    fetchUsers: () => ({
        type: types.FETCH_USERS
    }),
    fetchUsersSuccess: (users) => ({
        type:    types.FETCH_USERS_SUCCESS,
        payload: users
    }),
    fetchUsersFail: (message) => ({
        type:    types.FETCH_USERS_FAIL,
        payload: message
    }),
    createUser: (userInfo) => ({
        type:    types.CREATE_USER,
        payload: userInfo
    }),
    createUserSuccess: (user) => ({
        type:    types.CREATE_USER_SUCCESS,
        payload: user
    }),
    createUserFail: (message) => ({
        type:    types.CREATE_USER_FAIL,
        payload: message
    }),
    deleteUser: (id) => ({
        type:    types.DELETE_USER,
        payload: id
    }),
    deletePostSuccess: (id) => ({
        type:    types.DELETE_USER_SUCCESS,
        payload: id
    }),
    deletePostFail: (message) => ({
        type:    types.DELETE_USER_FAIL,
        payload: message
    })
});
