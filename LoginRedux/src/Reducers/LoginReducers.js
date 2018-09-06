const initialState = {
    username: "",
    password: "",
};

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_USERNAME':
            return {
                ...state,
                username: action.payload,
            };
        case 'GET_USERNAME':

        case 'DO_LOGOUT':
            return state;
        default:
            return state;
    }
};