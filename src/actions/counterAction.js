import * as types from '../actionTypes/counterTypes';

export function decrement() {
    return{
        type:types.DECREMENT,
    }
}

export function increment() {
    return{
        type:types.INCREMENT,
    }
}