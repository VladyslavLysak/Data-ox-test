import {
    GET_COMMENTS_BY_POST_START,
    GET_COMMENTS_BY_POST_SUCCESS,
    GET_COMMENTS_BY_POST_FAILURE
} from './types';

import {
    fetchItemApi
} from '../../../api';

const endpoint = 'comments';
const query = '?postId';

export const fetchComments = (id) => async dispatch => {
    dispatch({
        type: GET_COMMENTS_BY_POST_START
    });

    try {
        const response = await fetchItemApi(endpoint, id, query);
        dispatch({
            type: GET_COMMENTS_BY_POST_SUCCESS,
            payload: response
        });
    } catch (err) {
        dispatch({
            type: GET_COMMENTS_BY_POST_FAILURE,
            payload: err,
        });
    }
};