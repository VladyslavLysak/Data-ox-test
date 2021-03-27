import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import posts from './posts';
import users from './users';
import postPage from './postPage';

const CombinedReducer = (history) => combineReducers({
    posts,
    users,
    postPage,
    router: connectRouter(history)
});

export default CombinedReducer;