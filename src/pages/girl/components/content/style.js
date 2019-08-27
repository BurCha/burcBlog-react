import styled from 'styled-components';
import PicImg from '../../../../statics/headicon.jpg';
import MWXImg from '../../../../statics/mwx.jpg';

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
    .day{
        text-align:center;
    }
    .scale{
        font-size:20px;
        color:#DE5E60;
        margin:0 10px;
    }
    .collapse{
        margin-bottom:15px;
    }
    p{
        font-size:14px;
        margin-bottom:1em;
    }
    i{
        padding-right:5px;
    }
`;
export const PicBox = styled.div`
    border:1px solid #CCC;
    margin:20px auto;
    width:92%;
    transform:skew(-2deg);
    background:#FFFAF0;
    box-shadow: 0px 0px 5px #404040;
    border-radius:5px;
    overflow:hidden;
`;
export const Pic = styled.div`
    float:left;
    background:#FFF url(${PicImg}) center center;
    // background-size:100% 100%;
    margin:20px 20px;
    width:42%;
    height:200px;
    transform:skew(3deg);
    box-shadow: 0px 0px 5px #404040;
    border-radius:5px;
    border:1px solid #CCC;
    cursor:pointer;
    &.enter{
        background:#FFF url(${MWXImg}) center center;
        background-size: cover;
    }
    &.slide-enter{
        background:#FFF url(${PicImg}) center center;
    }
    &.slide-enter-active{
        background:#FFF url(${MWXImg}) center center;
        background-size: cover;
        transition: all 0.4s;
    }
    &.slide-exit{
        background:#FFF url(${MWXImg}) center center;
        background-size: cover;
    }
    &.slide-exit-active{
        background:#FFF url(${PicImg}) center center;
        transition: all 0.4s;
    }
`;
export const PicDes = styled.div`
    float:left;
    margin:20px 0;
    padding:20px 0px 20px 20px;
    width:42%;
    height:200px;
    // border:1px solid #CCC;
    &.phone{
        padding:0px 0px 20px 20px;
        p{
            margin-bottom:10px;
        }
    }
`;