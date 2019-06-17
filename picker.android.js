import React, {Component} from 'react';
import {
    DatePickerAndroid,
    Platform,
    StyleSheet,
    View,
    Button,
    Text,
    TimePickerAndroid,
    Alert,
    Keyboard,
    TextInput,
    PermissionsAndroid
} from 'react-native';
import Geolocation from 'Geolocation';
import Screen from "./src/utils/Screen";

export default class picker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dateText: '选择一个日期',
            timeText: '选择一个时间',
            keyboardText: '键盘收回',
            permission: PermissionsAndroid.PERMISSIONS.CAMERA,
            hasPermission:'Not Checked',
        }
    }

    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboard DidShow', () => {
            this.setState({keyboardText: '键盘弹出'});
        });

        this.keyboardDidHideListener=Keyboard.addListener('keyboard DidHide',()=>{
            this.setState({keyboardText: '键盘收回'});
        })
    }


    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.dateText}</Text>
                <Button
                    title={'日期选择器'}
                    onPress={this._showDatePicker}/>
                <Text>{this.state.timeText}</Text>
                <Button
                    title={'时间选择'}
                    onPress={this._showTimePicker}/>
                <Button
                    title={'获取位置'}
                    onPress={() => {
                        navigator.geolocation.getCurrentPosition((data) => {
                            Alert.alert('获取位置成功', JSON.stringify(data), null);
                        }, () => {
                            Alert.alert('获取位置失败', null, null);
                        });
                    }}/>
                <Text>{this.state.keyboardText}</Text>
                <TextInput style={styles.textInput}/>
                <Text>权限状态:{this.state.hasPermission}</Text>
                <Button
                    title={'申请摄像头权限'}
                    onPress={this._requestCameraPermission}/>
            </View>
        );
    }

    _showDatePicker = async () => {
        try {
            let newState = {};
            const {action, year, month, day} = await DatePickerAndroid.open();
            if (action === DatePickerAndroid.dismissedAction) {
                newState['timeText'] = '取消选择';
            } else {
                let date = new Date(year, month, day);
                newState['dateText'] = date.toLocaleDateString();
            }
            this.setState(newState);
        } catch ({code, message}) {
            console.warn('打开DatePickerAndroid失败：' + message)
        }
    };

    _showTimePicker = async () => {
        try {
            let newState = {};
            const {action, minute, hour} = await TimePickerAndroid.open();
            if (action === TimePickerAndroid.dismissedAction) {
                newState['dateText'] = '取消选择';
            } else {
                newState['timeText'] = hour + ':' + (minute < 10 ? '0' + minute : minute);
            }
            this.setState(newState);
        } catch ({code, message}) {
            console.warn('打开DatePickerAndroid失败：' + message)
        }
    };

    _requestCameraPermission=async()=>{
        let result=await PermissionsAndroid.request(this.state.permission,{
            title:'权限申请',
            message:'申请摄像头权限'
        });
        this.setState({hasPermission:result});
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    textInput:{
        width:Screen.width,
        height:50,
        backgroundColor:'lightgray'
    }

});