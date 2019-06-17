import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Animation from '../utils/Animation'

export default class AnimationScreen extends Component{


    render(){
        return(
            <View style={styles.container}>
                <Animation width={'200'} height={'200'}></Animation>
            </View>
        );
    }

}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});