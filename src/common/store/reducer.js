import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

//创建immutable对象 普通JS对象转immutable对象用fromJS({})
const defaultState = fromJS({
    focus:false,
    inputValue:'',
    loginNavShow:false,
    navShow:false,
    wordShow:false,
    currWord:-1,
    clientX:0,
    clientY:0,
    offsetLeft:0,
    scrollShow:false,
    loginBox:false,
    loginState:false,
    loginMessage:"",
    tagList:[],
    recentList:[]
});

export default(state=defaultState,action)=>{
    switch(action.type){
        case actionTypes.SEARCH_FOCUS:
            // immutable的set方法，会结合之前的immutable对象的值和设置的值，返回一个全新的对象
            return state.set('focus',true);
        case actionTypes.SEARCH_BLUR:
            return state.set('focus',false);
        case actionTypes.SEARCH_CHANGE:
            return state.set('inputValue',action.inputValue);
        case actionTypes.LOGIN_BOX_SHOW:
            return state.set('loginBox',action.flag);
        case actionTypes.CHANGE_LOGIN_MESSAGE:
            return state.set('loginMessage',action.loginMessage);
            // 登录
        case actionTypes.CHANGE_LOGIN_STATE:
            return state.merge({
                loginState:action.loginState,
                loginBox:false
            });
            // 确认是否登陆
        case actionTypes.IS_LOGIN:
            return state.set('loginState',action.loginState);
            // 注销
        case actionTypes.LOGOUT:
            return state.set('loginState',!action.loginState);
        case actionTypes.LOGIN_MENU_SHOW:
            if(state.get('loginNavShow'))
                 return state.set('loginNavShow',false);
            else
                return state.set('loginNavShow',true);
        case actionTypes.NAV_MENU_SHOW:
            if(state.get('navShow'))
                 return state.set('navShow',false);
            else
                return state.set('navShow',true);
        case actionTypes.WORD_CLICK_SHOW:
            return state.merge({
                wordShow:true,
                clientX:action.clientX,
                clientY:action.clientY,
                offsetLeft:action.offsetLeft,
                currWord:action.newWord
            });
        case actionTypes.WORD_CLICK_HIDE:
            return state.merge({
                wordShow:false,
                clientX:action.clientX,
                clientY:action.clientY
            });
        case actionTypes.CHANGE_SCROLL_SHOW:
                return state.set("scrollShow",action.scrollShow);
        case actionTypes.CHANGE_TAG:
                return state.set("tagList",fromJS(action.tagList));
        case actionTypes.CHANGE_RECENT:
                return state.set("recentList",fromJS(action.recentList));
        default:
            return state;
    }
};
