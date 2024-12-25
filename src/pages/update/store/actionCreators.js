import axios from 'axios';
import * as actionTypes from "./actionTypes";

export const updateBlog = (flag)=>({
    type:actionTypes.UPDATE_BLOG,
    flag:flag
});

export const titleChangeAction = (value)=>({
    type:actionTypes.CHANGE_TITLE_UPD,
    title:value
});
export const abstractChangeAction = (value)=>({
    type:actionTypes.CHANGE_ABSTRACT_UPD,
    title:value
});
export const authorChangeAction = (value)=>({
    type:actionTypes.CHANGE_AUTHOR_UPD,
    author:value
});
export const labelChangeAction = (value)=>({
    type:actionTypes.CHANGE_LABEL_UPD,
    label:value
});
export const selectChangeAction = (option)=>({
    type:actionTypes.CHANGE_SELECT_UPD,
    option:option
});
export const editorChangeAction = (html)=>({
    type:actionTypes.CHANGE_EDITOR_UPD,
    content:html
});
export const updateBlogAction = (id,title,author,label,option,abstract,content)=>{
    return (dispatch)=>{
        axios.post('/api/blog/update', {
        // axios.post('https://www.easy-mock.com/mock/5d48fd5ffc529c75f94136fd/api/blog/update', {
            id:id,
            title: title,
            author: author,
            label: label,
            option: option,
            abstract: abstract,
            content: content,
          }).then((res)=>{
              if(res.data.success){
                alert("修改成功")
                const action = updateBlog(res.data.success);
                dispatch(action);
              }else{
                  alert("修改失败")
              }
            
        }).catch(()=>{
            console.log("修改文章error");
        });
   }
};
