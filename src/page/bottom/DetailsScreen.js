import React,{Component} from 'react'
import {View, StyleSheet, Image, Text, Button} from 'react-native'
import Main from "../../../main";


export default class DetailsScreen extends Component{

    render(){
        return(
            <Main/>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        justifyContent: 'center'
    }
});