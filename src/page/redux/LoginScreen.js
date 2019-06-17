import React, {Component} from 'react';
import {View, StyleSheet, Text, Button, Alert,TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import * as loginAction from '../../actions/loginAction';





class LoginScreen extends Component {

    constructor(props){
        super(props);
        this.shouldComponentUpdate=this.shouldComponentUpdate.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 登录完成，切登录成功
        if (nextProps.status === '登陆成功' && nextProps.isSuccess) {
            this.props.navigation.navigate('CounterScreen');
            return false;
        }
        return true;
    }


    render() {
        const {login}=this.props;
        return (
            <View style={styles.container}>
                <Text>状态:{this.props.status}</Text>
                <TouchableOpacity onPress={() => login()} style={{ marginTop: 50 }}>
                    <View style={styles.loginBtn}>
                        <Text>登录
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginBtn: {
        borderWidth: 1,
        padding: 5,
    }
});



export default connect(
    (store) => ({
        status: store.loginIn.status,
        isSuccess: store.loginIn.isSuccess,
        user: store.loginIn.user,
    }),
    (dispatch) => ({
        login: () => dispatch(loginAction.login()),
    }))(LoginScreen)

