import styled from 'styled-components';

export const PageWrapper = styled.div`
&.container{
    background:#FFFAF0;
    position:absolute;
    bottom:0;
    left:0;
    right:0;
    top:0px;
}
.row{
    height:100%;
}
.col{
    position:relative;
    overflow-x: hidden;
    height:100%;
    background: #F5F5F5;
    box-shadow:0px 0px 30px 5px #26292E;
}
`;
export const PageSlide = styled.div`
    position:absolute;
    bottom:0;
    top:56px;
    width:100%;
    &.show{
        left:220px;
    }
    &.hide{
        left:0;
    }
    &.slide-enter{
        left:0;
    }
    &.slide-enter-active{
        left:220px;
        transition: all 0.4s;
    }
    &.slide-exit{
        left:220px;
    }
    &.slide-exit-active{
        left:0;
        transition: all 0.4s;
    }
`;
export const PageRightWrapper = styled.div`
    position:absolute;
    bottom:0px;
    z-index:77;
    background:#EDF1F2;
    overflow-y: scroll;
    overflow-x: hidden;

    &.desktop{
        top:56px;
        left:220px;
        right:-17px;
    }
    &.phone{
        top:0px;
        left:0px;
        width:100%;
    }
`;
export const PageRight = styled.div`
    position:absolute;
    background:#EDF1F2;
    top:0px;
    // bottom:0;
    left:0px;
    right:0px;
    z-index:888;
    min-height:100%;

    &.clearfix:before,&.clearfix:after{
        content:'';
        display:block;
    }
    &.clearfix{
        clear:both;
    }
    &.clearfix{
        zoom:1;
    }  
`;
export const PageContent = styled.div`
    // border:3px solid #000;
    background:#EDF1F2;
    position:relative;
    
    &.desktop{
        margin-right:180px;
        // min-height:100%;
    }
    &.ipad{
        min-height:100%;
        margin-right:15px;
    }
    &.phone{
        min-height:100%;
        margin-right:0px;
    }
`;