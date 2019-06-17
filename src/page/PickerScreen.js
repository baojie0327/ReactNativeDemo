import React, {Component} from 'react'
import {View, StyleSheet, Picker, Text, Slider, Switch} from 'react-native';
import PickerAndroid from '../../picker.android';

export default class PickerScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            language: 'java',
            sliderValue: 5,
            isOn: false,
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <Picker style={styles.picker}
                        selectedValue={this.state.language}
                        onValueChange={(lang) => this.setState({language: lang})}>
                    <Picker.Item label={'Java'} value={'java'}/>
                    <Picker.Item label={'JavaScript'} value={'javascript'}/>
                </Picker>

                <Slider minimumValue={0}
                        style={{width: 200}}
                        step={1}
                        maximumTrackTintColor={'red'}
                        minimumTrackTintColor={'blue'}
                        maximumValue={10}
                        value={this.state.sliderValue}
                        onValueChange={(value) => this.setState({sliderValue: value})}/>
                <Text>Slider的值:{this.state.sliderValue}</Text>

                <Switch trackColor={'blue'}
                        thumbColor={'green'}
                        tintColor={'black'}
                        onValueChange={() => this.setState({isOn: !this.state.isOn})}
                        value={this.state.isOn===true}/>
                <PickerAndroid/>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    picker: {
        width: 200,
        height: 200
    }
});