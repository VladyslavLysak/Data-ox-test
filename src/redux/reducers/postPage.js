import {
    GET_POST_BY_ID_SUCCESS,
    GET_POST_BY_ID_FAILURE,
    CHANGE_POST_SUCCESS,
    DELETE_POST_SUCCESS
} from '../actions/posts/types';
import {
    GET_COMMENTS_BY_POST_SUCCESS,
    GET_COMMENTS_BY_POST_FAILURE
} from '../actions/comments/types';

const initialState = {
    item: {},
    comments: [],
    error: null,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_POST_BY_ID_SUCCESS:
            return {
                ...state,
                item: payload,
            };
        case GET_POST_BY_ID_FAILURE:
            return {
                ...state,
                error: true
            };
        case GET_COMMENTS_BY_POST_SUCCESS:
            return {
                ...state,
                comments: payload,
            };
        case GET_COMMENTS_BY_POST_FAILURE:
            return {
                ...state,
                error: true
            };
        case CHANGE_POST_SUCCESS:
            return {
                ...state,
                item: payload
            }
        case DELETE_POST_SUCCESS:
            return {
                ...state,
                item: {}
            }
        default:
            return state;
    }
}