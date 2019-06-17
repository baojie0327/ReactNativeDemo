import React,{Component} from 'react';
import {View,Text, StyleSheet} from 'react-native';
import  DeviceInfos from '../utils/DeviceInfos';
import CommunicationNative from '../utils/CommunicationNative'

export default class NativeTextScreen extends Component{

    render(){
        return(
            <View style={styles.container}>
                <Text>系统名称：{DeviceInfos.systemName}</Text>
                <Text>系统版本：{DeviceInfos.systemVersion}</Text>
                <Text>默认语言：{DeviceInfos.defaultLanguage}</Text>
                <Text>应用版本：{DeviceInfos.appVersion}</Text>
                <CommunicationNative/>

            </View>
        );
    }

}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
});