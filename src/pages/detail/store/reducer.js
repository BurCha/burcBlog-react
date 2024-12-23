import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

//创建immutable对象 普通JS对象转immutable对象用fromJS({})
const defaultState = fromJS({
    title:"",
    content:"",
    label:"",
    author:"",
    createdate:"",
    commentcount:0,
    articletype:"",
    commentList:[],
    addState:false,
    delState:false,
    textarea:"",
    nameInput:"",
    emailInput:"",
    toname:"",
    detail:"detail"
});

export default(state=defaultState,action)=>{
    switch(action.type){
        // immutable的set方法，会结合之前的immutable对象的值和设置的值，返回一个全新的对象【设置一个值】
        // immutable的merge方法，会结合之前的immutable对象的值和设置的值，返回一个全新的对象【设置多个值】
        case actionTypes.CHANGE_TEXTAREA:
            return state.set("textarea",action.value);
        case actionTypes.CHANGE_NAME:
            return state.set("nameInput",action.value);
        case actionTypes.CHANGE_MAIL:
            return state.set("emailInput",action.value);
        case actionTypes.REP_COMMENT:
            return state.set("toname",action.toname);
        case actionTypes.CANCEL_REP:
            return state.set("toname","");
        case actionTypes.CHANGE_DETAIL:
            return state.merge({
                title:fromJS(action.title),
                content:fromJS(action.content),
                label:fromJS(action.label),
                author:fromJS(action.author),
                createdate:fromJS(action.createdate),
                commentcount:fromJS(action.commentcount),
                articletype:fromJS(action.articletype),
            });
        case actionTypes.CHANGE_COMMENT:
            return state.merge({
                commentList:fromJS(action.commentList),
                addState:false,
                delState:false,
                textarea:"",
                nameInput:"",
                emailInput:"",
                toname:""
            });
        case actionTypes.ADD_COMMENT:
            return state.set("addState",true);
        case actionTypes.DEL_COMMENT:
            return state.set("delState",true);
        case actionTypes.INIT_TYPE_DETAIL:
            return state.set("detail",action.detail);
        case actionTypes.CLEAR_DETAIL_DATA:
            return state.merge({
                commentList:fromJS(action.commentList),
                title:"",
                content:"",
                label:"",
                author:"",
            });
        default:
            return state;
    }
};
