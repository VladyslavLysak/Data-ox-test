import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import Thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';

import createRootReducer from './reducers';


const history = createBrowserHistory();
const middlewares = [Thunk, routerMiddleware(history)];
export const store = createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(...middlewares))
);
