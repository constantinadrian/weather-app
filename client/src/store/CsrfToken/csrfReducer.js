import { SET_CSRF } from "./csrfActionTypes";

const initialState = {
    csrf_token: '',
};

const csrfReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CSRF:
            return {
                ...state,
                csrf_token: action.payload,
            };
        default:
            return state;
    }
};

export default csrfReducer;
