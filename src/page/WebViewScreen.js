import React,{Component} from 'react'
import {View, StyleSheet, WebView, Dimensions} from 'react-native'

export default class WebViewScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <WebView style={styles.web}
                source={{uri:'https://www.sina.com.cn/'}}>

                </WebView>
            </View>
        );
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    web:{
       width:Dimensions.get('window').width,
        height:Dimensions.get('window').height
    }
});