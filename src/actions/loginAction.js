import * as types from '../actionTypes/loginTypes';


'use strict';
// 模拟用户
let user={
    name:'jackson',
    age:24,
};

export function login() {
    console.log('登陆');
    return dispatch=>{
        dispatch(isLogining());

        let result=fetch('https://www.baidu.com/')
            .then((res)=>{
                dispatch(loginSuccess(true,user));
            }).catch((e)=>{
                dispatch(loginError());
            })
    }

}

export function logout() {

    return dispatch=>{
        dispatch(logout());
    }
}

function logout() {
    console.log('退出登录');
    return{
        type:types.LOGGED_OUT
    }
}


function isLogining() {
    return{
        type:types.LOGIN_IN_DOING
    }
}


function loginSuccess(isSuccess,user) {
    console.log('success');
    return{
        type:types.LOGIN_IN_DONE,
        user:user,
    }
}

function loginError() {
    console.log('error');
    return{
        type:types.LOGIN_IN_ERROR,
    }
}