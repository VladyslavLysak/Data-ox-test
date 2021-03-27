import {
    GET_POSTS_SUCCESS,
    CREATE_POST_SUCCESS,
    GET_POSTS_FAILURE,
    CREATE_POST_FAILURE,
    SEARCH_POST
} from '../actions/posts/types';

const initialState = {
    items: [],
    error: null,
    search: ''
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                items: payload,
            };
        case GET_POSTS_FAILURE:
            return {
                ...state,
                error: true
            };
        case SEARCH_POST:
            return {
                ...state,
                search: payload,
            }
        case CREATE_POST_SUCCESS:
            return {
                ...state,
                items: [payload, ...state.items]
            }
        case CREATE_POST_FAILURE:
            return {
                ...state,
                error: payload
            }
        default:
            return state;
    }
}