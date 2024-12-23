import axios from 'axios';
import * as actionTypes from "./actionTypes";

export const addBlog = (flag)=>({
    type:actionTypes.ADD_BLOG,
    flag:flag
});

export const inputChangeAction = (value)=>({
    type:actionTypes.CHANGE_INPUT,
    title:value
});
export const selectChangeAction = (option)=>({
    type:actionTypes.CHANGE_SELECT,
    option:option
});
export const InitEditorAction = ()=>({
    type:actionTypes.INIT_EDITOR,
    content:'请输入文章内容...[首行不能为空行][代码不能存在单引号][文章摘要为前两个p标签]'
});
export const editorChangeAction = (html)=>({
    type:actionTypes.CHANGE_EDITOR,
    content:html
});
export const addBlogAction = (title,author,label,option,content,createdate)=>{
    return (dispatch)=>{
        axios.post('/api/blog/new', {
        // axios.post('https://www.easy-mock.com/mock/5d48fd5ffc529c75f94136fd/api/blog/new', {
            title: title,
            author: author,
            label: label,
            option: option,
            content: content,
            createdate: createdate
          }).then((res)=>{
              if(res.data.success){
                alert("添加成功")
                const action = addBlog(res.data.success);
                dispatch(action);
              }else{
                  alert("添加失败")
              }
            
        }).catch(()=>{
            console.log("添加文章error");
        });
   }
};
