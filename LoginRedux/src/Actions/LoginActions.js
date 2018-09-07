import { Alert, ToastAndroid } from 'react-native';

export const changeUsername = (username) => {
    return (dispatch) => {
        dispatch({ type: "CHANGE_USERNAME", payload: username });
    };
};

export const doLogin = (data) => {
    return (dispatch) => {
        return fetch("http://user.projectihrm.com/api/login.php", {"method": 'POST', "Content-Type": "application/json", "body": JSON.stringify(data)})
            .then(response => response.json())
            .then((json) =>{
                    console.log(json);
                    if (json.status === "success") {
                        return dispatch({ type: "DO_LOGIN" })
                    } else {
                        Alert.alert("Login", json.message);
                    }
            });
    };
};

export const doLogout = () => {
    return (dispatch) => {
        return dispatch({ type: 'DO_LOGOUT' });
    }
};

export const doRegister = (data) => {
    return (dispatch) => {
        dispatch({ type: "DO_LOGIN" });
    };
};