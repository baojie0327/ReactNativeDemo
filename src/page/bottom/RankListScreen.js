import React,{Component} from 'react'
import {Text, Image,View, StyleSheet} from 'react-native'

export default class RankListScreen extends Component{

    static navigationOptions={
        tabBarLabel:'排行',
        tabBarIcon:({focused,horizontal,tintColor})=>{
            if (focused){
                return(
                    <Image style={styles.container} source={require('../../../images/tab_ranklist_check.png')}/>
                );
            }

            return(
                <Image style={styles.tabBarIcon} source={require('../../../images/tab_ranklist_normal.png')}/>
            );
        }
    };

    render(){
        return(
            <View style={styles.container}>
                <Text>排行</Text>
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
        height:19,
    }
});