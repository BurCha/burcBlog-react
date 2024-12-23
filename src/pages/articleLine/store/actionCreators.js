import * as actionTypes from './actionTypes';
import axios from 'axios';

const getLine = (result)=>{
    return {
        type:actionTypes.GET_LINE,
        lineList:result
    };
};

export const getLineAction = ()=>{
    return (dispatch)=>{       
        axios.post('/api/blog/line', {
        // axios.post('https://www.easy-mock.com/mock/5d48fd5ffc529c75f94136fd/api/blog/line', {
          }).then((res)=>{
            // if(res.data.success){
                const result = res.data.data;
                const action = getLine(result);
                dispatch(action);
            // }else{
                // alert("获取文章目录失败")
            // }
        }).catch(()=>{
            console.log("获取文章目录error");
        });
    }
}