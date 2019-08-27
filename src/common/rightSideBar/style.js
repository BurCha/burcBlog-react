import styled from 'styled-components';

export const RightSideBarWrapper = styled.div`
    position:absolute;
    border-left:1px solid rgba(0,0,0,.15);
    background:#fff;
    color:#000;
    width:180px;
    right:0;
    min-height:100%;
    float:right;
    line-height:1.5em;
`;
export const ArticleBox = styled.div`
    border-bottom:1px solid rgba(0,0,0,.1);
    background:#fff;
    padding:20px;
`;
export const TagBox = styled.div`
    border-bottom:1px solid rgba(0,0,0,.1);
    background:#fff;
    padding:20px;
`;
export const BlogBox = styled.div`
    border-bottom:1px solid rgba(0,0,0,.1);
    background:#fff;
    padding:20px;
`;
export const LinkBox = styled.div`
    background:#fff;
    padding:20px;
`;
export const ArticleInfo = styled.div`
    color:#58666E;
    overflow:hidden;
    // border:1px solid #f00;
`;
export const ArticleItem = styled.div`
    // border:1px solid rgba(0,0,0,.15); 
    margin-bottom:8px;
    cursor:pointer;
`;
export const ArticleTitle = styled.div`
    color:#DE5E60;
    font-size:14px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
`;
export const ArticleAuthor = styled.div`
    font-size:14px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    span{
        padding:0 10px 0 0;
    }
`;
export const TagInfo = styled.div`
    color:#DE5E60;
    overflow:hidden;
`;
export const TagItem = styled.span`
    color:#58666E;
    font-size:14px;
    border:1px solid rgba(0,0,0,.15);
    float:left;
    padding:0px 5px;
    margin:5px 3px;
    background:#fff;
    border-radius:2px;
    cursor:pointer;
    &:hover{
        border:1px solid #DE5E60;
        color:#DE5E60;
    }
`;
export const BlogInfo = styled.div`
    color:#58666E;
    font-size:14px;
    span{
        color:#DE5E60;
        font-size:16px;
        padding:0 3px;
    }
`;
export const Title = styled.div`
    font-size:16px;
    color:#58666E;
    margin-bottom:10px;
`;
export const LinkItem = styled.a.attrs({
    target:'_blank'
})`
    font-size:14px;
    color:#DE5E60;
    display:block;
    margin-bottom:5px;
`;
export const BackTop = styled.div`
    position:fixed;
    right:30px;
    bottom:30px;
    width:50px;
    height:50px;
    background:#777;
    border-radius:5px;
    cursor:pointer;
`;