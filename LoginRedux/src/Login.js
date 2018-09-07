import React, {Component} from 'react';
import {Alert, Platform, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { changeUsername, doLogin } from "./Actions/LoginActions";

class Login extends Component {

    constructor(props) {
        super(props);
    }

    onUserNameTextInputHandler = (text) => {
        this.props.changeUsername(text);
    };

    onPasswordTextInputHandler = (text) => {
        this.props.changePassword(text);
    };

    onLoginBtnPressHandler = () => {
        const { username, password, doLogin } = this.props;
        this.props.dispatch(doLogin({ username, password }));
    };

    render() {
        return (
            <View style={styles.body}>
                <View style={styles.inputItem}>
                    <Text style={styles.text} >Username/Email-id</Text>
                    <TextInput textContentType="username" value={this.props.username} style={styles.textInput} onChangeText={this.onUserNameTextInputHandler} keyboardType="email-address" autoFocus/>
                </View>
                <View style={styles.inputItem}>
                    <Text style={styles.text} >Password</Text>
                    <TextInput textContentType="password" secureTextEntry={true} value={this.props.password} style={styles.textInput} onChangeText={this.onPasswordTextInputHandler}/>
                </View>
                <TouchableOpacity onPress={this.onLoginBtnPressHandler}>
                    <View style={styles.loginBtnView}>
                        <Text style={styles.loginBtnText}>Login</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        marginTop: 60,
    },
    inputItem: {
        margin: 16,
    },
    text :{
        fontSize: 16,
    },
    textInput: {
        fontSize: 20,
        marginTop: 16,
        color: "#0000FF",
        borderBottomColor: "#000000",
        borderBottomWidth: 1,
    },
    loginBtnView: {
        backgroundColor: "#0000FF",
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        margin: 16,
    },
    loginBtnText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: 'bold',
    },
});

const mapStateToProps = (state) => ({
    ...state.AuthReducer,
});

const mapDispatchToProps = (dispatch) => ({
    changeUsername: (text) => dispatch({ type: 'CHANGE_USERNAME', payload: text }),
    changePassword: (text) => dispatch({ type: 'CHANGE_PASSWORD', payload: text }),
    doLogin: doLogin,
    dispatch: dispatch,
    // doLogout: () => dispatch({ type: 'DO_LOGOUT' })
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);