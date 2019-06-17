import React, {Component} from 'react'
import {Image, Text, StyleSheet, View,Button} from 'react-native'

export default class HotShowScreen extends Component {

    static navigationOptions={
        tabBarLabel: '热映',
        tabBarIcon:({focused,horizontal,tintColor})=>{
            if (focused){
                return(
                    <Image style={styles.tabBarIcon} source={require('../../../images/tab_hotshow.png')}/>
                );
            }

            return(
                <Image style={styles.tabBarIcon} source={require('../../../images/tab_hotshow_off.png')}/>
            );
        }
    };


    render(){
        return(
            <View style={styles.container}>
                <Text>热映</Text>
                <Button title={'go to detail'}
                        onPress={()=>this.props.navigation.navigate('Detail')}/>
                <Button title={'go to picker'}
                        onPress={()=>this.props.navigation.navigate('Picker')}/>
                <Button title={'go to webView'}
                        onPress={()=>this.props.navigation.navigate('WebView')}/>
                <Button title={'go to screen api'}
                        onPress={()=> this.props.navigation.navigate('Screen')}/>
                <Button title={'go to animation'}
                        onPress={()=>this.props.navigation.navigate('Animation')}/>
                <Button title={'混合编程'}
                        onPress={()=>this.props.navigation.navigate('NativeText')}/>
                <Button title={'登陆'}
                        onPress={()=>this.props.navigation.navigate('LoginScreen')}/>
            </View>
        );
    }


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabBarIcon:{
        width:19,
        height:19
    }
});