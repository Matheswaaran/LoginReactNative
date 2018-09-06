import React, {Component} from 'react';
import {Dimensions, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

class Register extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.body}>
                {/*<View style={styles.inputItem}>*/}
                    {/*<Text style={styles.text}>Name</Text>*/}
                    {/*<TextInput textContentType="username" value={this.state.username} style={styles.textInput} onChangeText={this.onUserNameTextInputHandler} autoFocus/>*/}
                {/*</View>*/}
                {/*<View style={styles.inputItem}>*/}
                    {/*<Text style={styles.text}>Username</Text>*/}
                    {/*<TextInput textContentType="username" value={this.state.username} style={styles.textInput} onChangeText={this.onUserNameTextInputHandler} autoFocus/>*/}
                {/*</View>*/}
                {/*<View style={styles.inputItem}>*/}
                    {/*<Text style={styles.text}>Email-ID</Text>*/}
                    {/*<TextInput textContentType="username" value={this.state.username} style={styles.textInput} onChangeText={this.onUserNameTextInputHandler} autoFocus/>*/}
                {/*</View>*/}
                {/*<View style={styles.inputItem}>*/}
                    {/*<Text style={styles.text}>Password</Text>*/}
                    {/*<TextInput textContentType="password" secureTextEntry={true} value={this.state.password} style={styles.textInput} onChangeText={this.onPasswordTextInputHandler}/>*/}
                {/*</View>*/}
                {/*<View style={styles.inputItem}>*/}
                    {/*<Text style={styles.text}>Confirm Password</Text>*/}
                    {/*<TextInput textContentType="username" value={this.state.username} style={styles.textInput} onChangeText={this.onUserNameTextInputHandler} autoFocus/>*/}
                {/*</View>*/}
                <TouchableOpacity>
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

export default Register;