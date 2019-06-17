import React,{Component} from 'react'
import {View,Text, Image, StyleSheet,ActivityIndicator} from 'react-native'

export default class MineScreen extends Component{

    static navigationOptions={
        tabBarLabel:'我的',
        tabBarIcon:({focused,horizontal,tintColor})=>{
            if (focused){
                return(
                    <Image style={styles.tabBarIcon} source={require('../../../images/tab_mine_pressed.png')}/>
                );
            }

            return(
                <Image style={styles.tabBarIcon} source={require('../../../images/tab_mine_normal.png')}/>
            );
        }
    };

    render(){
        return(
            <View style={styles.container}>
                <ActivityIndicator color={'purple'} size={'large'}/>
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
    tabBarIcon:{
        width:19,
        height:19
    }
});