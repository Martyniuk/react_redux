//Core
import { createSelector } from 'reselect';

const userList = (state) => state;

export const getUsers = createSelector(
    userList, (state) => state.feed,
);
