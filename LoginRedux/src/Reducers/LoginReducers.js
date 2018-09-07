const initialState = {
    name: "",
    username: "",
    email: "",
    password: "",
    re_password: "",
    isLoggedin: false,
};

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.payload,
            };
        case 'CHANGE_USERNAME':
            return {
                ...state,
                username: action.payload,
            };
        case 'CHANGE_EMAIL':
            return {
                ...state,
                email: action.payload,
            };
        case 'CHANGE_PASSWORD':
            return {
                ...state,
                password: action.payload,
            };
        case 'CHANGE_RE_PASSWORD':
            return {
                ...state,
                re_password: action.payload,
            };
        case 'DO_LOGIN':
            return {
                ...state,
                isLoggedin: true,
            };
        case 'DO_LOGOUT':
            return initialState;
        default:
            return state;
    }
};