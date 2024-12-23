import styled from 'styled-components';

export const FooterWrapper = styled.div`
    background:#FFF;
    position:absolute;
    z-index:100;
    color:#f00;
    left:0;
    font-size:14px;
    height:50px;
    border-top:1px solid rgba(0,0,0,0.1);
    &.desktop{
        bottom:-50px;
        right:0px;
    }
    &.phone{
        bottom:-65px;
        right:0px;
    }
`;
export const FooterItem = styled.p`
    line-height:50px;
    margin:0;
    padding:0 10px;
    color:#58666E;
    &.left{
        float:left;
    }
    &.right{
        float:right;
    }
    a{
        margin-left:10px;
    }
`;
