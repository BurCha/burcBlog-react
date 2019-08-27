import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeCodeData = (result,currentPage)=>{
    return {
        type:actionTypes.CHANGE_CODE_DATA,
        articleList:result,
        newPage:currentPage
    };
};
const getTotalCount = (result)=>{
    return {
        type:actionTypes.GET_TOTAL_ARTICLE,
        totalCount:result
    };
};
const deleteBlog = (flag)=>{
    return {
        type:actionTypes.DELETE_BLOG,
        flag:flag
    };
};

export const initTypeAction = (articleType,keyword,search)=>{
    return {
        type:actionTypes.INIT_TYPE_CODE,
        articleType:articleType,
        keyword:keyword,
        search:search
    };
};
export const clearCodeDataAction = ()=>{
    return {
        type:actionTypes.CHANGE_CODE_DATA,
        articleType:[],
    };
};

export const getTotalAction = (articleType,keyword)=>{
    return (dispatch)=>{       
        axios.post('/api/blog/count', {
        // axios.post('https://www.easy-mock.com/mock/5d48fd5ffc529c75f94136fd/api/blog/count', {
            articletype: articleType,
            keyword:keyword
          }).then((res)=>{
            if(res.data.success){
                const result = res.data.data;
                const action = getTotalCount(result);
                dispatch(action);
            }else{
                alert("获取文章数量失败")
            }
        }).catch(()=>{
            console.log("获获取文章数量error");
        });
    }
}
export const getCodeDataAction = (articleType,keyword,currentPage,pageSize,winDesktop,winPhone)=>{
    return (dispatch)=>{       
        axios.post('/api/blog/article', {
        // axios.post('https://www.easy-mock.com/mock/5d48fd5ffc529c75f94136fd/api/blog/article', {
            articletype: articleType,
            keyword:keyword,
            currentPage: currentPage,
            pageSize: pageSize
          }).then((res)=>{
            // if(res.data.success){
                let result = res.data.data;
                if (!res.data.success){
                    result = [{ 
                        "id": 0,
                        "title": 0,
                        "content":0,
                        "label": 0,
                        "author": 0,
                        "createdate": 0,
                        "commentcount": 0,
                        "articletype": 0
                    }];
                }
                const action = changeCodeData(result,currentPage);
                dispatch(action);
                winDesktop.scrollTo(0,0);
                winPhone.scrollTo(0,0);
            // }else{
                // alert("获取文章列表失败")
            // }
        }).catch(()=>{
            // console.log("获取文章列表error");
        });
    }
}

export const deleteBlogAction = (id)=>{
    return (dispatch)=>{       
        axios.post('/api/blog/delete', {
        // axios.post('https://www.easy-mock.com/mock/5d48fd5ffc529c75f94136fd/api/blog/delete', {
            id: id
          }).then((res)=>{
            if(res.data.success){
                alert("删除成功")
                const action = deleteBlog(res.data.success);
                dispatch(action);
              }else{
                  alert("删除失败")
              }
        }).catch(()=>{
            console.log("删除文章error");
        });
    }
}