import axios from "axios";
import * as actionTypes from "./actionTypes";

const changeDetail = (data)=>({
    type:actionTypes.CHANGE_DETAIL,
    title:data.title,
    content:data.content,
    label:data.label,
    author:data.author,
    createdate:data.createdate,
    commentcount:data.commentcount,
    articletype:data.articletype
});
const changeComment = (result)=>({
    type:actionTypes.CHANGE_COMMENT,
    commentList:result
});
const addComment = (flag)=>({
    type:actionTypes.ADD_COMMENT,
    flag:flag
});
const delComment = (flag)=>({
    type:actionTypes.DEL_COMMENT,
    flag:flag
});

export const changeTextareaAction = (value)=>({
    type:actionTypes.CHANGE_TEXTAREA,
    value:value
});
export const changeNameAction = (value)=>({
    type:actionTypes.CHANGE_NAME,
    value:value
});
export const changeMailAction = (value)=>({
    type:actionTypes.CHANGE_MAIL,
    value:value
});
export const repCommentAction = (toname)=>({
    type:actionTypes.REP_COMMENT,
    toname:toname
});
export const cancelRepAction = ()=>({
    type:actionTypes.CANCEL_REP
});
export const initTypeAction = (detail)=>({
    type:actionTypes.INIT_TYPE_DETAIL,
    detail:detail
});
export const clearDetailDataAction = ()=>({
    type:actionTypes.CLEAR_DETAIL_DATA,
    commentList:[]
});


export const getDetailAction = (id,editor)=>{
   return (dispatch)=>{
        axios.get('/api/blog/detail', {
        // axios.get('https://www.easy-mock.com/mock/5d48fd5ffc529c75f94136fd/api/blog/detail', {
            params: {
                id:id
            }
        }).then((res)=>{
            if(res.data.success){
                const action = changeDetail(res.data.data);
                dispatch(action);
                if(editor){
                    editor.txt.html(res.data.data.content);  // 初始化编辑器的内容
                }
            }else{
                alert("文章详细信息获取失败")
            }
        }).catch(()=>{
            console.log("获取文章详细信息error");
        });
   }
};

export const getCommentAction = (blogid)=>{
   return (dispatch)=>{
        axios.post('/api/comment/list', {
        // axios.post('https://www.easy-mock.com/mock/5d48fd5ffc529c75f94136fd/api/comment/list', {
            blogid: blogid
          }).then((res)=>{
            const action = changeComment(res.data.data);
            dispatch(action);
        }).catch(()=>{
            console.log("获取评论error");
        });
   }
};
export const addCommentAction = (blogid,content,fromname,toname,email,createdate)=>{
   return (dispatch)=>{
        axios.post('/api/comment/new', {
        // axios.post('https://www.easy-mock.com/mock/5d48fd5ffc529c75f94136fd/api/comment/new', {
            blogid: blogid,
            content: content,
            fromname: fromname,
            toname:toname,
            email: email,
            createdate: createdate
          }).then((res)=>{
            if(res.data.success){
                const action = addComment(res.data.success);
                dispatch(action);
            }else{
                alert("添加评论失败")
            }
        }).catch(()=>{
            console.log("添加评论error");
        });
   }
};
export const delCommentAction = (id,blogid)=>{
   return (dispatch)=>{

        axios.post('/api/comment/delete', {
        // axios.post('https://www.easy-mock.com/mock/5d48fd5ffc529c75f94136fd/api/comment/delete', {
            id: id,
            blogid:blogid
          }).then((res)=>{
            if(res.data.success){
                alert("删除成功")
                const action = delComment(res.data.success);
                dispatch(action);
            }else{
                alert("删除评论失败")
            }
        }).catch(()=>{
            console.log("删除评论error");
        });
   }
};