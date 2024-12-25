import * as actionTypes from './actionTypes';
import { CHANGE_DETAIL } from '../../detail/store/actionTypes';
import { fromJS } from 'immutable';

//创建immutable对象 普通JS对象转immutable对象用fromJS({})
const defaultState = fromJS({
    title:"",
    author:"",
    label:"",
    option:"",
    abstract:"",
    content:"",
    updateState:false,
    editor:[]
});

export default(state=defaultState,action)=>{
    switch(action.type){
        // immutable的set方法，会结合之前的immutable对象的值和设置的值，返回一个全新的对象【设置一个值】
        // immutable的merge方法，会结合之前的immutable对象的值和设置的值，返回一个全新的对象【设置多个值】
        case CHANGE_DETAIL:
            return state.merge({
                title:action.title,
                author:action.author,
                label:action.label,
                option:action.articletype,
                abstract:action.abstract,
                content:action.content
            });
        case actionTypes.CHANGE_TITLE_UPD:
            return state.set("title",action.title);
        case actionTypes.CHANGE_AUTHOR_UPD:
            return state.set("author",action.author);
        case actionTypes.CHANGE_LABEL_UPD:
            return state.set("label",action.label);
        case actionTypes.CHANGE_SELECT_UPD:
            return state.set("option",action.option);
        case actionTypes.CHANGE_ABSTRACT_UPD:
            return state.set("abstract",action.abstract);
        case actionTypes.CHANGE_EDITOR_UPD:
            return state.set("content",action.content);
        case actionTypes.UPDATE_BLOG:
            return state.set("updateState",action.flag);
        default:
            return state;
    }
};
