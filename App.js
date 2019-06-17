/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import {MainTab} from "./src/page/MainTab";
import DetailsScreen from "./src/page/bottom/DetailsScreen";
import PickerScreen from "./src/page/PickerScreen";
import WebViewScreen from './src/page/WebViewScreen'
import ScreenApiScreen from "./src/page/ScreenApiScreen";
import AnimationScreen from "./src/page/AnimationScreen";
import NativeTextScreen from "./src/page/NativeTextScreen";
import {Provider} from 'react-redux';
import configureStore from './src/store/ConfigureStore';
import LoginScreen from "./src/page/redux/LoginScreen";
import CounterScreen from "./src/page/redux/CounterScreen";




const AppNavigator = createStackNavigator(
    {
        Main: {
            screen: MainTab,
            navigationOptions: {
                header: null,
            },

        },
        Detail: DetailsScreen,
        Picker: PickerScreen,
        WebView: WebViewScreen,
        Screen: ScreenApiScreen,
        Animation: AnimationScreen,
        NativeText: NativeTextScreen,
        LoginScreen: LoginScreen,
        CounterScreen:CounterScreen,

    }
);

const AppContainer = createAppContainer(AppNavigator);

const store = configureStore();

export default class App extends Component {


    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>

        );

    }

}


