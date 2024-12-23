import styled from 'styled-components';

export const ContentWrapper = styled.div`
    // border:1px solid #f00;
    padding:0 15px;
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
    .title{
        font-size:22px;
        text-align:center;
        font-weight:600;
        margin-bottom:10px;
    }
    .tag{
        color:#98A6AD;
        text-align:center;
    }
    .panelP{
        text-indent:2em;
    }
    .through{
        text-decoration:line-through;
        color:#CCC;
    }
    p{
        font-size:14px;
        margin-bottom: 1em;
    }
`;
export const ImformationBox = styled.ul`
    border-top:1px dashed #ccc;
    overflow:hidden;
    margin:30px 0;
    // width:100%;
    // background:#FFF;
`;
export const ImformationItem = styled.li`
    font-size:14px;
    border-bottom:1px dashed #ccc;
    line-height:35px;
    width:45%;
    color:#98A6AD;
    span{
        color:rgba(0,0,0,0.65);
        margin-left:20px;
    }
    &.left{
        float:left;
    }
    &.right{
        float:right;
    }
    &.phone{
        width:100%;
    }
`;