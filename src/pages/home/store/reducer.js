// import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

//创建immutable对象 普通JS对象转immutable对象用fromJS({})
const defaultState = fromJS({
    
});

export default(state=defaultState,action)=>{
    switch(action.type){
        // immutable的set方法，会结合之前的immutable对象的值和设置的值，返回一个全新的对象【设置一个值】
        // immutable的merge方法，会结合之前的immutable对象的值和设置的值，返回一个全新的对象【设置多个值】
        default:
            return state;
    }
};
