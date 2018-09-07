import React, {Component} from 'react';
import {Platform, StyleSheet, Alert, View, SegmentedControlIOS, Dimensions} from 'react-native';
import { connect } from 'react-redux';
import EntryPoint from './src/EntryPoint';
import Home from './src/Home';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.body}>
                {this.props.isLoggedin ? (<Home/>) : (<EntryPoint/>)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    viewPager: {
        marginTop: Platform.select({ ios: 40, android: 5 }),
        flex: 1,
    },
    container: {
        flex: 1,
    },
    indicatorContainer: {
        position: 'absolute',
        width: Dimensions.get('window').width,
        backgroundColor: '#FFFFFF',
    },
    itemStyle: {
        width: Dimensions.get('window').width * 0.5,
    },
    itemTextStyle: {

    },
    selectedItemStyle: {
        width: Dimensions.get('window').width * 0.5,
    },
    selectedItemTextStyle: {

    },
});

const mapStateToProps = (state) => ({
    ...state.AuthReducer,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);