import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

//创建immutable对象 普通JS对象转immutable对象用fromJS({})
const defaultState = fromJS({
    title:"",
    option:"code",
    content:"请输入文章内容...[首行不能为空行][代码不能存在单引号][文章摘要为前两个p标签]",
    addState:false
});

export default(state=defaultState,action)=>{
    switch(action.type){
        // immutable的set方法，会结合之前的immutable对象的值和设置的值，返回一个全新的对象【设置一个值】
        // immutable的merge方法，会结合之前的immutable对象的值和设置的值，返回一个全新的对象【设置多个值】
        case actionTypes.CHANGE_INPUT:
            return state.set("title",action.title);
        case actionTypes.CHANGE_SELECT:
            return state.set("option",action.option);
        case actionTypes.INIT_EDITOR:
            return state.merge({
                content:action.content,
                title:''
            });
        case actionTypes.CHANGE_EDITOR:
            return state.set("content",action.content);
        case actionTypes.ADD_BLOG:
            return state.set("addState",action.flag);
        default:
            return state;
    }
};
