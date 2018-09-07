import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { doLogout } from "./Actions/LoginActions";

class Home extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.body}>
                <Text>Home</Text>
                <Button title="Logout" onPress={() => this.props.dispatch(doLogout())} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
body: {
    marginTop: 100,
}
});

const mapStateToProps = (state) => ({
    ...state.AuthReducer,
});

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);