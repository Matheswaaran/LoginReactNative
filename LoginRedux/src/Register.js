import React, {Component} from 'react';
import {Dimensions, Platform, StyleSheet, Text, View} from 'react-native';

class Register extends Component<Props> {
    render() {
        return (
            <View style={styles.body}>
                <Text>Register</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
});

export default Register;