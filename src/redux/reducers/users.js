import {
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE
} from '../actions/users/types';

const initialState = {
    items: [],
    error: null,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_USERS_SUCCESS:
            return {
                items: payload,
                error: false
            }
        case GET_USERS_FAILURE:
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
}