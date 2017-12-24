//Core
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
//Instruments
import auth from './auth';
import ui from './ui';
import forms from './forms';
import feed from './feed';

export default combineReducers({
    routerReducer,
    auth,
    ui,
    forms,
    feed,
});
