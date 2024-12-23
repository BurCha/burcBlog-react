import React,{ PureComponent,Fragment } from "react";
import { connect } from "react-redux";
import { ArticalBox,ArticalTitle,ArticalInfo,ArticalFooter } from "./style";
import { SkeletonBox } from '../../code/components/style';
import { Skeleton } from 'antd';


class ArticleDetail extends PureComponent{
    render(){
        const { title,content, createdate} = this.props;
        return(
            <Fragment>
            {
                title? 
                <ArticalBox>
                    <ArticalTitle>
                        <p>{title}</p>
                    </ArticalTitle>
                    <ArticalInfo dangerouslySetInnerHTML={{__html: content}}>
                    </ArticalInfo>
                    <ArticalFooter>
                        <p>{createdate}</p>
                    </ArticalFooter>
                </ArticalBox>
                 :
                <SkeletonBox>
                    <Skeleton active  paragraph={{ rows: 25}} />
                </SkeletonBox>
            }
            </Fragment>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        title:state.getIn(['detailReducer','title']),
        content:state.getIn(['detailReducer','content']),
        label:state.getIn(['detailReducer','label']),
        author:state.getIn(['detailReducer','author']),
        createdate:state.getIn(['detailReducer','createdate']),
        commentcount:state.getIn(['detailReducer','commentcount']),
        articleType:state.getIn(['detailReducer','articleType'])
    };
}

export default connect(mapStateToProps,null)(ArticleDetail);