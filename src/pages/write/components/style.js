import styled from 'styled-components';

export const ContentWrapper = styled.div`
    // border:1px solid #f00;
    padding:0 15px;
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
export const EditorBox = styled.div`
    background:#FFF; 
    color:#58666E;
    padding:15px 20px;
`;

export const Input = styled.input`
    display:block;
    width:100%;
    height:30px;
    margin-bottom:8px;
    border:1px solid #ccc;
    padding-left:10px;
    font-size: 12px;
    &::placeholder{
        color:#999;
    }
`;
export const Textarea = styled.textarea`
    display:block;
    width:100%;
    height:52px;
    margin-bottom:8px;
    border:1px solid #ccc;
    padding-left:10px;
    font-size: 12px;
    line-height: 1.5em;
    &::placeholder{
        color:#999;
    }
`;
export const Select = styled.select`
    width:50%;
    height:30px;
    margin-bottom:10px;
    padding-left:10px;
    border:1px solid #ccc;
    font-size: 12px;
`;
export const Button = styled.button`
    float:right;
    height:30px;
    color: #ffffff;
    border:none;
    background-color: #DE5E60;
    border-color: #d43f3a;
    cursor:pointer;
    &:hover{
        background-color: #d9534f;
    }
`;