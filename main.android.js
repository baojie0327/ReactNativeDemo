import React, {Component} from 'react'
import {View, ViewPagerAndroid, StyleSheet} from 'react-native'


import HomeScreen from "./src/page/bottom/HomeScreen";
import Mine from './src/page/bottom/MineScreen'

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'HomeScreen'
        }
    }

    render() {
        return (
            <ViewPagerAndroid style={styles.viewPager}
                              initialPage={0}>
                <View style={styles.pageStyle} >
                    <HomeScreen/>
                </View>

                <View style={styles.pageStyle} >
                    <Mine/>
                </View>
            </ViewPagerAndroid>
        );
    }

}

const styles = StyleSheet.create({
    viewPager: {
        flex: 1,
    },
    pageStyle: {
        alignItems: 'center',
        padding: 20,
    }
});