import {
    GET_USERS_START,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE
} from './types';

import {
    fetchItemApi
} from '../../../api';

const endpoint = 'users';

export const fetchUsers = () => async dispatch => {
    dispatch({
        type: GET_USERS_START
    });

    try {
        const response = await fetchItemApi(endpoint);
        dispatch({
            type: GET_USERS_SUCCESS,
            payload: response
        });
    } catch (err) {
        dispatch({
            type: GET_USERS_FAILURE,
            payload: err,
        });
    }
}