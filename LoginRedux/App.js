import React, {Component} from 'react';
import {Platform, StyleSheet, Alert, View, SegmentedControlIOS, Dimensions} from 'react-native';
import { IndicatorViewPager, PagerTitleIndicator } from 'rn-viewpager';
import Login from "./src/Login";
import Register from "./src/Register";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.body}>
                <IndicatorViewPager
                    style={styles.body}
                    indicator={<PagerTitleIndicator
                        style={styles.indicatorContainer}
                        itemStyle={styles.itemStyle}
                        selectedItemStyle={styles.selectedItemStyle}
                        selectedItemTextStyle={styles.selectedItemTextStyle}
                        itemTextStyle={styles.itemTextStyle}
                        trackScroll={true}
                        titles={['Login', 'Register']} />}>
                    <View style={styles.container}>
                        <Login/>
                    </View>
                    <View style={styles.container}>
                        <Register/>
                    </View>
                </IndicatorViewPager>
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
    container: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    indicatorContainer: {
        position: 'absolute',
        width: Dimensions.get('window').width,
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

export default App;