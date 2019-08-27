import styled from 'styled-components';

export const ContentWrapper = styled.div`
    // border:1px solid #f00;
    padding:0 15px;
    font-size:14px;
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
    .pagination{
        margin:30px 0 30px 0;
    }
`;

export const ArticleBox = styled.div`
`;
export const ArticleItem = styled.div`
    border-bottom:1px solid rgba(0,0,0,.15);
    margin:20px auto;
    background:#FFFFFF;
    padding:12px 20px 8px 20px;
    overflow:hidden;
`;
export const ArticleHeader = styled.div`
// border:1px solid #f00;
   p{
        font-size:22px;
        color:#DE5E60;
        margin-bottom:15px;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
   }
`;
export const ArticleInfo = styled.div`
// border:1px solid #f00;
    p{
        color:#58666E;
        padding:0px;
        margin:0px;
        display: inline;
    }
    p:nth-child(1):after{
        content:'[...]';
        margin-left:4px;
        display:inline;
    }
    p:nth-child(n+2){
        display:none;
    }
    blockquote, img, pre,ul,li,ol{
        display: none;
    }
`;
export const ArticleFooter = styled.div`
    margin-top:15px;
    ul{
        overflow:hidden;
        margin-bottom:5px;
    }
    li.left{
        float:left;
        margin-right:20px;
        color:#999;
    }
    li.right{
        float:right;
        margin-left:20px;
        color:#999;
    }
    span{
        margin-right:5px;
    }
    Button{
        border-radius:0;
        text-align:center;
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
    &.udp{
        background-color: #337ab7;
        border-color: #2e6da4;
        &:hover{
            background-color: #286090;
            border-color: #204d74;
        }
    }
`;
export const SkeletonBox = styled.div`
    background:#FFF;
    padding:20px;
    .ant-skeleton-title,.ant-skeleton-paragraph>li{
        background-image: linear-gradient(90deg, #CCC 25%, #999 37%, #CCC 63%)!important;
        background-position-x: initial!important;
        background-position-y: initial!important;
        background-size: 400% 100%!important;
        background-repeat-x: initial!important;
        background-repeat-y: initial!important;
        background-attachment: initial!important;
        background-origin: initial!important;
        background-clip: initial!important;
        background-color: initial!important;
    }
`;