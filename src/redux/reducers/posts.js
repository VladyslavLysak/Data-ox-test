import {
    GET_POSTS_SUCCESS,
    CREATE_POST_SUCCESS,
    GET_POSTS_FAILURE,
    CREATE_POST_FAILURE,
    DELETE_POST_SUCCESS,
    CHANGE_POST_SUCCESS,
    SEARCH_POST
} from '../actions/posts/types';

const initialState = {
    items: [],
    error: null,
    search: ''
};

export default (state = initialState, { type, payload }) => {
    const prevPosts = [...state.items];
    const activeIndex = prevPosts.findIndex(post => post.id === payload?.id);
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
        case DELETE_POST_SUCCESS:
            prevPosts.splice(activeIndex, 1);
            return {
                ...state,
                items: prevPosts,
                error: false
            }
        case CHANGE_POST_SUCCESS:
            prevPosts[activeIndex] = {...payload};
            console.log(payload);
            return {
                ...state,
                items: prevPosts,
                error: false
            }
        default:
            return state;
    }
}