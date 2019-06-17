import React,{Component} from 'react';
import {View, Text,StyleSheet} from 'react-native';
import Screen from '../utils/Screen';

export default class ScreenApiScreen extends Component{

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.textStyle}> width:{Screen.width}</Text>
                <Text style={styles.textStyle}> height:{Screen.height}</Text>
                <Text style={styles.textStyle}> pixelRatio:{Screen.pixelRatio}</Text>
                <Text style={styles.textStyle}> resolutionX:{Screen.resolutionX}</Text>
                <Text style={styles.textStyle}> resolutionY:{Screen.resolutionY}</Text>
            </View>
        );
    }

}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    textStyle:{
    }
});