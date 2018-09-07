import React, {Component} from 'react';
import {Alert, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { connect } from 'react-redux';
import { doRegister } from "./Actions/LoginActions";

class Register extends Component {

    constructor(props) {
        super(props);
    }

    onNameTextInputHandler = (text) => {
        this.props.changeName(text);
    };

    onUserNameTextInputHandler = (text) => {
        this.props.changeUsername(text);
    };

    oneEmailTextInputHandler = (text) => {
        this.props.changeEmail(text);
    };

    onPasswordTextInputHandler = (text) => {
        this.props.changePassword(text);
    };

    onRePasswordTextInputHandler = (text) => {
        this.props.changeRePassword(text);
    };

    onRegisterBtnPressHandler = () => {
        const { name, username, email, password, re_password } = this.props;
        this.props.doRegister({ name, username, email, password, re_password });
    };


    render() {
        return (
            <View style={styles.body}>
                <View style={styles.inputItem}>
                    <Text style={styles.text}>Name</Text>
                    <TextInput textContentType="username" value={this.props.name} style={styles.textInput} onChangeText={this.onNameTextInputHandler}/>
                </View>
                <View style={styles.inputItem}>
                    <Text style={styles.text}>Username</Text>
                    <TextInput textContentType="username" value={this.props.username} style={styles.textInput} onChangeText={this.onUserNameTextInputHandler} />
                </View>
                <View style={styles.inputItem}>
                    <Text style={styles.text}>Email-ID</Text>
                    <TextInput textContentType="username" value={this.props.email} style={styles.textInput} onChangeText={this.oneEmailTextInputHandler}/>
                </View>
                <View style={styles.inputItem}>
                    <Text style={styles.text}>Password</Text>
                    <TextInput textContentType="password" secureTextEntry={true} value={this.props.password} style={styles.textInput} onChangeText={this.onPasswordTextInputHandler}/>
                </View>
                <View style={styles.inputItem}>
                    <Text style={styles.text}>Confirm Password</Text>
                    <TextInput textContentType="username" secureTextEntry={true} value={this.props.repassword} style={styles.textInput} onChangeText={this.onRePasswordTextInputHandler}/>
                </View>
                <TouchableOpacity onPress={this.onRegisterBtnPressHandler}>
                    <View style={styles.registerBtnView}>
                        <Text style={styles.registerBtnText}>Register</Text>
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
    registerBtnView: {
        backgroundColor: "#0000FF",
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        margin: 16,
    },
    registerBtnText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: 'bold',
    },
});

const mapStateToProps = (state) => ({
    ...state.AuthReducer,
});

const mapDispatchtoProps = (dispatch) => ({
    changeName: (text) => dispatch({ type: 'CHANGE_NAME', payload: text }),
    changeUsername: (text) => dispatch({ type: 'CHANGE_USERNAME', payload: text }),
    changeEmail: (text) => dispatch({ type: 'CHANGE_EMAIL', payload: text }),
    changePassword: (text) => dispatch({ type: 'CHANGE_PASSWORD', payload: text }),
    changeRePassword: (text) => dispatch({ type: 'CHANGE_RE_PASSWORD', payload: text }),
    doRegister: (data) => doRegister(data),
});


export default connect(mapStateToProps, mapDispatchtoProps)(Register);