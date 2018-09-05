import React, {Component} from 'react';
import {Dimensions, Platform, StyleSheet, Text, View} from 'react-native';

class Login extends Component<Props> {
    render() {
        return (
            <View style={styles.body}>
                <Text style={styles.text}>Login</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 40,
    },
});

export default Login;