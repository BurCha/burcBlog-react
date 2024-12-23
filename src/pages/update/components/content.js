import React,{ PureComponent,Fragment } from 'react';
import { ContentWrapper} from './style';
import BreadCrumb from './breadcrumb';
import Editor from './editor';
import { connect } from "react-redux";
import MediaQuery from 'react-responsive';

class Content extends PureComponent{

    render(){
        return(
            <Fragment>
            {/* 电脑 平板>=768px */}
            <MediaQuery minWidth={768}>
                <ContentWrapper>
                    <BreadCrumb></BreadCrumb> 
                    <Editor></Editor> 
                </ContentWrapper>
            </MediaQuery>

            {/* 手机>=768px */}
            <MediaQuery maxWidth={767}>
                <ContentWrapper className="phone">
                    <BreadCrumb></BreadCrumb> 
                    <Editor></Editor> 
                </ContentWrapper>
            </MediaQuery>
            </Fragment>
        )
    }

}

//withRouter 让Detail有能力获取Router里的所有参数和内容【App.js】 主要是获取地址栏的id
export default connect(null,null)(Content);