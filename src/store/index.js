//Core
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
//Instruments
import reducer from '../reducers/index';
import { saga } from '../sagas/index';

const dev = process.env.NODE_ENV === 'development';
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const middleware = [];
const composeEnchancers = devtools && dev ? devtools : compose;

const logger = createLogger({
    duration:  true,
    collapsed: true,
    diff:      true,
    colors:    {
        title:     () => '#139BFE',
        prevState: () => '#1C5FAF',
        action:    () => '#149945',
        nextState: () => '#A47104',
        error:     () => '#ff0005',
    },
});
const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

middleware.push(routerMiddleware(history));
middleware.push(sagaMiddleware);
if (dev) {
    middleware.push(logger);
}

export { history };
export default createStore(reducer, composeEnchancers(applyMiddleware(...middleware)));
sagaMiddleware.run(saga);
