import React, {Component} from 'react';
import {Platform, StyleSheet, Alert, View, SegmentedControlIOS, Dimensions} from 'react-native';
import { IndicatorViewPager, PagerTitleIndicator } from 'rn-viewpager';
import Login from "./Login";
import Register from "./Register";

class EntryPoint extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.body}>
                <IndicatorViewPager
                    style={styles.viewPager}
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

export default EntryPoint;