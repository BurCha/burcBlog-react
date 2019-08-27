import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

//创建immutable对象 普通JS对象转immutable对象用fromJS({})
const defaultState = fromJS({
    articleList:[],
    deleteState:false,
    currentPage:1, 
    pageSize:8,
    totalCount:0,
    articleType:'',
    keyword:'',
    search:'search'
});

export default(state=defaultState,action)=>{
    switch(action.type){
        case actionTypes.INIT_TYPE_CODE:
            // action.articleList是普通JS对象，需要转换成immutable对象 fromJS 可以在该位置进行转换，也可以在actionCreators.js进行转换
            //immutable的merge/set方法，会结合之前的immutable对象的值和设置的值，返回一个全新的对象给store，store对自己进行数据修改
            return state.merge({
                articleType:action.articleType,
                keyword:action.keyword,
                search:action.search
            });
        case actionTypes.CHANGE_CODE_DATA:
            return state.merge({
                articleList:fromJS(action.articleList),
                currentPage:action.newPage,
                deleteState:false
            });
        case actionTypes.GET_TOTAL_ARTICLE:
            return state.set('totalCount',action.totalCount);
        case actionTypes.DELETE_BLOG:
            return state.set('deleteState',true);
        case actionTypes.CHANGE_CODE_DATA:
            return state.set('articleList',fromJS(action.articleList));
        default:
            return state;
    }
};
