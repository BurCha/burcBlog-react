import styled from 'styled-components';
import  AvatorImg  from '../../../statics/headicon.jpg'

export const ContentWrapper = styled.div`
    // border:1px solid #f00;
    padding:0 15px;
    font-size:15px;
    line-height:1.5em;
    &.phone{
        padding:0 10px;
    }
    .breadcrumb{
        color:#000;
        padding:8px 20px;
        width:100%;
        margin:20px auto;
        background:#FFFFFF;
        border-radius:5px;
    }
    .breadcrumbTitle{
        color:#58666E;
    }
    .breadcrumbItem{
        .link{
            color:#DE5E60;
        }
    }
    .divider{
        background:#fff;
        margin:5px;
        
    }
    .divider::before,.divider::after{
        border-top: 1px solid #fff !important;
    }
`; 
export const ArticalBox = styled.div`
    background:#FFF; 
    color:#58666E;
    padding:15px 20px;
    border-bottom:1px solid #CCC;
`;
export const ArticalTitle = styled.div`
    background:#FFF;
    p{
        text-align:center;
        font-size:22px;
        margin-bottom:30px;
        font-weight:600;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
    }

`;
export const ArticalInfo = styled.div`
    background:#FFF;
    
    /* 字体 样式 */
    p{
        text-indent:2em;
        font-size:15px;
        line-height:1.8em;
        margin-bottom:12px;
    } 
    h1 { font-size: 2em; margin: .67em 0 }
    h2 { font-size: 1.5em; margin: .75em 0 }
    h3 { font-size: 1.17em; margin: .83em 0 }
    h4 { font-size: .97em; margin: 1.12em 0 }
    h5 { font-size: .83em; margin: 1.5em 0 }
    h6 { font-size: .75em; margin: 1.67em 0 }
    h1, h2, h3, h4,
    h5, h6 { font-weight: bolder }
    /* table 样式 */
    table {
        border-top: 1px solid #ccc;
        border-left: 1px solid #ccc;
        margin-bottom:12px;
    }
    table tr{
        &:hover{
            background:#F1F3F4;
        }
    }
    table td,
    table th {
        border-bottom: 1px solid #ccc;
        border-right: 1px solid #ccc;
        padding: 3px 5px;
    }
    table th {
        border-bottom: 2px solid #ccc;
        text-align: center;
    }

    /* blockquote 样式 */
    blockquote {
        display: block;
        border-left: 12px solid #d0e5f2;
        padding: 12px 20px;
        margin: 12px 2em 12px 2em;
        line-height: 1.6em;
        font-size: 100%;
        background-color: #F1F3F4;
    }

    /* code 样式 */
    code {
        display: inline-block;
        *display: inline;
        *zoom: 1;
        border:1px solid rgba(0,0,0,0.1);
        background-color: #F1F3F4;
        border-radius: 3px;
        padding: 5px 15px;
        margin: 0 3px;
        overflow:auto;
        line-height:1.6em;
    }
    pre code {
        font-size:14px;
        display: block;
        margin-bottom:12px;
        margin-left:2em;
        margin-right:2em;
    }

    /* ul ol 样式 */
    ul, ol {
        margin: 10px 0 10px 4em;
        line-height:1.8em;
    }
    ul{
        list-style:square;
    }

    /* img 样式 */
    img{
        box-shadow: 0px 0px 5px #404040;
        border-radius:2px;
        border:1px solid #CCC;
        max-width: 93%!important;
        height: 300px;
        text-align: center;
        margin: 0 auto;
        margin-top:5px;
        margin-bottom:0px;
        display: block;
    }
    `;
export const ArticalFooter = styled.div`
    background:#FFF;
    p{
        text-align:center;
        margin-bottom:0px;
    }
`;
export const CommentBox = styled.div`
    border-bottom:1px solid #CCC;
    background:#FFF; 
    color:#58666E;
    padding:15px 20px 0 20px;
    margin:20px auto;
    overflow:hidden;
    p{
        color:#58666E;
        font-weight:700;
    }
`;
export const CommentHeader = styled.div`
    font-size:15px;
    overflow:hidden;
    position:relative;
    p{
        margin-bottom:1em;
    }
`;
export const CommentHeaderLeft = styled.div`
    float:left;
    display: table-cell;
    padding-right:10px;
`;
export const Avator = styled.div`
    border:1px solid #CCC; 
    width:50px;
    height:50px;
    background:url(${AvatorImg});
    background-size:cover;
`;
export const CommentHeaderRight = styled.div`
    display: table-cell;
    width: 10000px;
    textarea{
        width:100%;
        height:70px;
        padding-left:8px;
        margin-bottom:0px;
        background:#F1F3F4;
        border:1px solid #CCC;
        // resize:none;
        &::placeholder{
            color:#999;
        }
    }
    input{
        background:#F1F3F4;
        border:1px solid #CCC;
        margin-right:10px;
        margin-top:10px;
        padding-left:8px;
        height:30px;
        &::placeholder{
            color:#999;
        }
    }
    &.phone{
        input{
            width:100%;
        }
    }
`;
export const Button = styled.button`
    height:30px;
    padding:0 10px;
    color: #ffffff;
    border:none;
    background-color: #DE5E60;
    border-color: #d43f3a;
    margin-top:10px;
    margin-right:10px;
    cursor:pointer;
    &:hover{
        background-color: #c9302c;
        border-color: #ac2925;
    }
`;
export const CommentBody = styled.div`
    padding-bottom:15px;
`;
export const CommentItem = styled.div`
    font-size:15px;
    overflow:hidden;
    position:relative;
    margin-bottom:15px;
    color:#555;
`;
export const CommentItemLeft = styled.div`
    float:left;
    display: table-cell;
    padding-right:10px;
`;
export const CommentItemRight = styled.div`
    display: table-cell;
    width: 10000px;
`;
export const CommentItemHeader = styled.div`
    overflow:hidden;
    margin-bottom:5px;
`;
export const CommentName = styled.div`
    // font-size:16px;
    float:left;
    color:#333;
    i{
        color:#999;
        font-size:15px;
    }
`;
export const CommentTime = styled.div`
    float:right;
    color:#999;
`;
export const CommentContent = styled.div`
    margin-bottom:5px;
`;
export const CommentReply = styled.div`
    float:left;
    margin-right:10px;
    cursor:pointer;
    color:#DE5E60;
`;
export const CommentDel = styled.div`
    float:left;
    cursor:pointer;
    color:#DE5E60;
`;