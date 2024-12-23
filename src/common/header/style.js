import styled from 'styled-components';

export const HeaderWrapper = styled.div`
&.container{
    font-size:14px;
    // border:1px #f00 solid ;
    // background: #3a3f51;
    background: #26292E;
    position:relative;
    border-bottom:2px #DE5E60 solid;
    height:56px;
    color:#B4B6BD;
    // color:#9D9D9D;
}
.row{
    border:1px #000 solid;
}
.col{
    position:relative;
    border-bottom:2px #DE5E60 solid;
    height:56px;
    background: #26292E;
    // box-shadow:0 0 10px #26292E;
}
`;
export const Logo = styled.div`
    height:54px;
    font-size:18px;
    font-weight:700;
    cursor:pointer;
    margin-top:3px;
    &:hover{
        color:#eee;
    }
    img{
        vertical-align: middle;
        height:52px;
        weight:52px;
    }
    &.desktop{
        position:absolute;
        left:20px;
    }
    &.phone{
        width:200px;
        text-align:center;
        margin:1px auto;
        padding:5px 0;
    }
`;
export const SearchWrapper = styled.div`
    position:relative;
    .zoom{
        position:absolute;
        right:0px;
        border-radius:0 13px 13px 0;
        line-height:30px;
        text-align:center;
        width:30px;
        cursor:pointer;
        color:#fff;
        background:#DE5E60;
    }
    .zoomDesktop{
        top:12px;
    }
    &.desktop{
        display:inline-block;
        height:54px;
        padding:12px 0;
        margin-left:300px;
    }
    .zoomPhone{
        top:5px;
    }
    &.phone{
        // padding:5px 0;
        display:block;
        width:70%;
        height:40px;
        margin:0 auto;
    }
`;
export const SearchInput = styled.input.attrs({
    placeholder:'输入关键词搜索...'
})`
    font-size:14px;
    width:160px;
    background:#fff;
    height:30px;
    border:none;
    outline:0;
    color:#000;
    border-radius:13px;
    padding-left:1em;
    &::placeholder{
        color:#999;
    }
    &.focused{
        width:240px;
    }
    &.slide-enter{
        width:160px;
    }
    &.slide-enter-active{
        width:240px;
        transition: all 0.4s;
    }
    &.slide-exit{
        width:240px;
    }
    &.slide-exit-active{
        width:160px;
        transition: all 0.4s;
    }
    &.phone{
        width:100%;
    }
`;
export const NavItem = styled.div`
    // box-sizing:border-box;
    cursor:pointer;
    height:54px;
    padding:20px 20px;
    color:#B4B6BD;
    &:hover{
        height:56px;
        color:#eee;
        background:#000;
        border-bottom:2px solid #f00;
    }
    &.right{
        float:right;
    }
    &.left{
        float:left;
    }
    span{
        padding:0;
        margin:0;
    }
`;
export const Menu = styled.ul`
    position:absolute;
    z-index:99;
    width:100%;
    border-bottom:2px solid #DE5E60;
    display:none;
    &.show{
        display:block;
    }
    &.hide{
        display:none;
    }
`;
export const MenuItem = styled.li`
    line-height:40px;
    background:#26292E;
    color:#9D9D9D;
    padding:0 20px;
    text-align:center;
    border-bottom:1px solid #222;
    &:last-child:hover{
        color:#eee;
        background:#000;
    }
`;
export const LoginBox = styled.div`
    position:absolute;
    z-index:100;
    top:56px;
    right:0px;
    width:280px;
    border: 1px solid rgba(0,0,0,.1);
    background:#F1F3F4;
    box-shadow: 0 2px 6px rgba(0,0,0,.1);
    &.phone{
        top:84px;
    }
    .loginBtn{
        width:250px;
        margin:20px 15px 20px 15px;
        border-radius:0;
    }
    &.show{
        display:block;
    }
    &.hide{
        display:none;
    }
`;
export const Input = styled.input`
    border: 1px solid rgba(0,0,0,.1);
    width:250px;
    background:#fff;
    height:30px;
    margin:20px 15px 0 15px;
    padding-left:1em;
    color:#000;
    &::placeholder{
        color:#999;
    }
    &:nth-child(2){
        margin-top:30px;
    }
`;
export const Close = styled.span`
    position:absolute;
    top:0px;
    right:0px;
    width:20px;
    // height:20px;
    color:#fff;
    padding:3px;
    background:#d9534f;
    text-align:center;
    cursor:pointer;
    &:hover{
        background:#d2322d;
    }
`;
