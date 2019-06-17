import React,{Component} from 'react';
import {StyleSheet,View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import * as counterAction from '../../actions/counterAction';
import Counter from "../../utils/Counter";
import * as loginAction from '../../actions/loginAction';

 class CounterScreen extends Component{

     shouldComponentUpdate(nextProps, nextState) {
         // 登录完成,切成功登录
         if (nextProps.status === '点击登录' && nextProps.isSuccess===false) {
             this.props.navigation.navigate('LoginScreen');
             return false;
         }
         return true;
     }


    render(){
        const {count,incrementFn,decrementFn,logout}=this.props;
        return(
            <View style={styles.container}>
               <Counter incrementFn={incrementFn} decrementFn={decrementFn} counter={count}>
               </Counter>

                <Button style={{marginTop:50}}
                    title={'退出登录'}
                    onPress={() => logout()}/>
            </View>
        );
    }


}



const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
});

export default connect(
    (state)=>({
        count:state.counter.count,
        status: state.loginIn.status,
        isSuccess: state.loginIn.isSuccess,
    }),
    (dispatch)=>({
        incrementFn:()=>dispatch(counterAction.increment()),
        decrementFn:()=>dispatch(counterAction.decrement()),
        logout:()=>dispatch(loginAction.logout()),
    })
)(CounterScreen)