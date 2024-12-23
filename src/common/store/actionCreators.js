import * as actionTypes from './actionTypes';
import axios from "axios";  

// 登录
const Login = (success)=>({
    type:actionTypes.CHANGE_LOGIN_STATE,
    loginState:success
});
// 确认是否登录
const isLogin = (success)=>({
    type:actionTypes.IS_LOGIN,
    loginState:success
});
// 注销
const logout = (success)=>({
    type:actionTypes.LOGOUT,
    loginState:success
});
// 最新文章
const getRecentArticle = (result)=>({
    type:actionTypes.CHANGE_RECENT,
    recentList:result
});
// 标签
const getTag = (result)=>({
    type:actionTypes.CHANGE_TAG,
    tagList:result
});

export const loginMessageAction = (message)=>({
    type:actionTypes.CHANGE_LOGIN_MESSAGE,
    loginMessage:message
});
export const inputFocusAction = ()=>({
    type:actionTypes.SEARCH_FOCUS
});
export const inputBlurAction = ()=>({
    type:actionTypes.SEARCH_BLUR
});
export const loginBoxShowAction = (flag)=>({
    type:actionTypes.LOGIN_BOX_SHOW,
    flag:flag
});
export const loginNavShowAction = ()=>({
    type:actionTypes.LOGIN_MENU_SHOW
});
export const navShowAction = ()=>({
    type:actionTypes.NAV_MENU_SHOW
});
export const wordShowAction = (clientX,clientY,offsetLeft,currWord)=>({
    type:actionTypes.WORD_CLICK_SHOW,
    clientX:clientX,
    clientY:clientY,
    offsetLeft:offsetLeft,
    newWord:currWord+1
});
export const wordHideAction = (clientX,clientY)=>({
    type:actionTypes.WORD_CLICK_HIDE,
    clientX:clientX,
    clientY:clientY
});
export const inputChangeAction = (inputValue)=>({
    type:actionTypes.SEARCH_CHANGE,
    inputValue:inputValue
});
export const ToggleScrollShow = (flag)=>({
    type:actionTypes.CHANGE_SCROLL_SHOW,
    scrollShow:flag
});

export const loginAction = (username,password)=>{
    return (dispatch)=>{
        axios.post('/api/user/login', {
        // axios.post('https://www.easy-mock.com/mock/5d48fd5ffc529c75f94136fd/api/user/login', {
            username: username,
            password:password
          }).then((res)=>{
            // 登录成功
            if(res.data.success){
                const action = Login(res.data.success);
                dispatch(action);
            }else{
                // 登录失败
                const action = loginMessageAction("账号密码不一致");
                dispatch(action);
            }
        }).catch(()=>{console.log("error")});
    };
};

export const isLoginAction = ()=>{
    return (dispatch)=>{
        axios.post("/api/user/islogin").then((res)=>{
        // axios.post("https://www.easy-mock.com/mock/5d48fd5ffc529c75f94136fd/api/user/islogin").then((res)=>{
            const action = isLogin(res.data.success);
            dispatch(action);
        }).catch(()=>{console.log("error")});
    };
};

export const logoutAction = ()=>{
    return (dispatch)=>{
        axios.post("/api/user/logout").then((res)=>{
        // axios.post("https://www.easy-mock.com/mock/5d48fd5ffc529c75f94136fd/api/user/logout").then((res)=>{
            const action = logout(res.data.success);
            dispatch(action);
        }).catch(()=>{console.log("error")});
    };
};

export const getRecentArticleAction = (currentPage,pageSize)=>{
    return (dispatch)=>{
        axios.post('/api/blog/recent', {
            // axios.post('https://www.easy-mock.com/mock/5d48fd5ffc529c75f94136fd/api/blog/recent', {
            currentPage: currentPage,
            pageSize:pageSize
        }).then((res)=>{
            const action = getRecentArticle(res.data.data);
            dispatch(action);
        }).catch(()=>{console.log("error")});
    };
};

export const getTagAction = ()=>{
    return (dispatch)=>{
        axios.post("/api/blog/tag").then((res)=>{
        // axios.post("https://www.easy-mock.com/mock/5d48fd5ffc529c75f94136fd/api/blog/tag").then((res)=>{
            const action = getTag(res.data.data);
            dispatch(action);
        }).catch(()=>{console.log("error")});
    };
};