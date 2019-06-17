import React,{Component} from 'react';
import {View, StyleSheet, Text, Button, Alert} from 'react-native';

export default class CommunicationNative extends Component{
    render(){
        return(
            <View>
                <Button title={'调用原生组件'}
                        onPress={()=>{Alert.alert('调用原生组件',null,null)}}/>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignSelf:'center',
        flexDirection:'row'
    }
});