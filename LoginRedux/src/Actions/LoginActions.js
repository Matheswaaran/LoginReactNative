import { Alert, ToastAndroid } from 'react-native';

export const changeUsername = (text) => {
    ToastAndroid.show(text, ToastAndroid.SHORT);
    return (dispatch) => {
        dispatch({ type: 'CHANGE_USERNAME', payload: text });
    }
};

export const doLogin = (username) => {
    Alert.alert("", username);
};