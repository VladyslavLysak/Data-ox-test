import {
    GET_POSTS_START,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAILURE,
    GET_POST_BY_ID_START,
    GET_POST_BY_ID_SUCCESS,
    GET_POST_BY_ID_FAILURE,
    CREATE_POST_START,
    CREATE_POST_SUCCESS,
    CREATE_POST_FAILURE,
    CHANGE_POST_START,
    CHANGE_POST_SUCCESS,
    CHANGE_POST_FAILURE,
    DELETE_POST_START,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAILURE,
    SEARCH_POST
} from './types';

import {
    fetchItemApi,
    createItemApi,
    changeItemApi,
    deleteItemApi
} from '../../../api';

const endpoint = 'posts';

export const fetchPosts = () => async dispatch => {
    dispatch({
        type: GET_POSTS_START,
    });

    try {
        const response = await fetchItemApi(endpoint);
        dispatch({
            type: GET_POSTS_SUCCESS,
            payload: response
        });
    } catch (err) {
        dispatch({
            type: GET_POSTS_FAILURE,
            payload: err,
        });
    }
};

export const fetchPostById = (id) => async dispatch => {
    dispatch({
        type: GET_POST_BY_ID_START
    });

    try {
        const response = await fetchItemApi(endpoint, id);
        dispatch({
            type: GET_POST_BY_ID_SUCCESS,
            payload: response
        });
    } catch (err) {
        dispatch({
            type: GET_POST_BY_ID_FAILURE,
            payload: err,
        });
    }
}

export const searchPost = text => dispatch => {
    dispatch({
        type: SEARCH_POST,
        payload: text
    });
};

export const createPost = (item) => async dispatch => {
    dispatch({
        type: CREATE_POST_START
    });

    try {
        const response = await createItemApi(item, endpoint);
        dispatch({
            type: CREATE_POST_SUCCESS,
            payload: response
        });
    } catch (err) {
        dispatch({
            type: CREATE_POST_FAILURE,
            payload: err,
        });
    }
};

export const changePost = (item, id) => async dispatch => {
    dispatch({
        type: CHANGE_POST_START
    });

    try {
        const response = await changeItemApi(item, endpoint, id);
        dispatch({
            type: CHANGE_POST_SUCCESS,
            payload: response,
        });
    } catch (err) {
        dispatch({
            type: CHANGE_POST_FAILURE,
            payload: err,
        });
    }
};

export const deletePost = (id) => async dispatch => {
    dispatch({
        type: DELETE_POST_START
    });

    try {
        await deleteItemApi(endpoint, id);
        dispatch({
            type: DELETE_POST_SUCCESS,
            payload: {
                id: id
            },
        });
    } catch (err) {
        dispatch({
            type: DELETE_POST_FAILURE,
            payload: err,
        });
    }
};