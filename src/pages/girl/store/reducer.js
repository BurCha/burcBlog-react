import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

//创建immutable对象 普通JS对象转immutable对象用fromJS({})
const defaultState = fromJS({
    picShow:false,
    loveStart:"2016-11-22 00:00:00",
    birthday:"1997-10-23"
});

export default(state=defaultState,action)=>{
    switch(action.type){
        // immutable的set方法，会结合之前的immutable对象的值和设置的值，返回一个全新的对象【设置一个值】
        // immutable的merge方法，会结合之前的immutable对象的值和设置的值，返回一个全新的对象【设置多个值】
        case actionTypes.PIC_SHOW:
            return state.set("picShow",action.picShow);
        default:
            return state;
    }
};
