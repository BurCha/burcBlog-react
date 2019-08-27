import React,{ Component,Fragment } from 'react';
import AvatarImg from '../../../../statics/headicon.jpg';
import { Avatar,AvatarItem,ContentWrapper } from './style';
import { Divider } from 'antd';
import MediaQuery from 'react-responsive';

class Content extends Component{
    render(){
        return(
            <Fragment>
            {/* 电脑平板 >=768px */}
            <MediaQuery minWidth={768}>
                <ContentWrapper>
                    <Avatar>
                        <img src={AvatarImg} alt="头像"></img>
                        <AvatarItem className="burc">这里是柏成BurC的官方博客</AvatarItem>
                        <AvatarItem>祝君食用快乐ヾ(◍°∇°◍)ﾉﾞ ~</AvatarItem>
                    </Avatar>
                    {/* <Divider className="divider"/>  */}
                    <Divider className="divider" orientation="left">校园经历</Divider>
                        <h6>1. 2016年9月考入青岛理工大学软件工程专业</h6>
                        <h6>2. 大一上学期</h6>
                            <p> 处于迷茫期，未确定自己发展方向，一直在校办勤工俭学</p>
                        <h6>3. 大一下学期</h6>
                            <p>成为公司“青岛海智信信息科技有限公司”负责人，担当企业法人</p>
                            <p>创建“海智信团队”，获批入驻“青岛理工大学创业孵化基地A306室”</p>
                        <h6>4. 大二上学期</h6>
                            <p>获国家励志奖学金（5000元）</p>
                        <h6>5. 大二下学期</h6>
                            <p>使用jQuery/Bootstrap/PHP搭建个人博客</p>
                        <h6>6. 大三上学期</h6>
                            <p>国家级大学生创新创业训练计划项目圆满结题，项目编号：201710429380，证书编号：20170939</p>
                            <p>获创新创业经费（10000元）</p>
                            <p>获第十六届山东省大学生软件设计大赛二等奖</p>
                        <h6>7. 大三下学期</h6>
                            <p>获第十届“蓝桥杯”山东赛区C/C++程序设计大学B组三等奖</p>
                            <p>获第十六届“挑战杯”.鲁南制药山东省大学生课外学术科技作品竞赛优秀作品二等奖</p>
                            <p>使用React/Node搭建个人博客，废弃原有博客，本博客已上传GitHub，具体请参考<a target="_blank" href='https://github.com/BurCha/blog'>项目地址</a></p>

                        <Divider className="divider" orientation="left">技术剖析</Divider>
                        <h6><i className="iconfont">&#xe646;</i>信控学院-软件专业，在王老师指导下，自2017年9月开始独立自学Web开发技术。</h6>
                        <h6><i className="iconfont">&#xe646;</i>HTML+CSS+JavaScript</h6>
                            <p> 能够熟练完成各种静态页面的编写，可独立进行各类页面的布局，可使用原生HTML+CSS实现响应式，同时兼容电脑与手机访问</p>
                            <p> 能够熟练开发各种交互功能，可解决大部分浏览器兼容问题，喜欢写原生JS代码，比如使用原生JS封装了Ajax方法 </p>
                            <p> 《JavaScript高级程序设计》红宝书前七章看过两遍，掌握ES6常用语法及高级特性</p>
                        <h6><i className="iconfont">&#xe646;</i> Bootstarp+jQuery</h6>
                            <p> 熟练使用Bootstrap框架、字体图标等常用前端技术，根据官方代码整理了自己的Bootstrap组件库</p>
                            <p> 熟练使用jQuery框架，整理了jQuery核心笔记一万余字</p>
                        <h6><i className="iconfont">&#xe646;</i> PHP</h6>
                            <p> 曾独立完成园丁小助手、个人博客项目的后台PHP开发</p>
                            <p> 熟悉Apache、MySQL</p>
                        <h6><i className="iconfont">&#xe646;</i> Canvas</h6>
                            <p> 曾使用原生JS加Canvas写出了九宫格手势密码、涂鸦面板等功能，同时兼容电脑与手机</p>
                        <h6><i className="iconfont">&#xe646;</i> React+Node</h6>
                            <p> 掌握前端MVVM框架--React，熟悉jsx语法、组件、Props & State核心特性，了解Diff算法、生命周期函数等</p>
                            <p> 该博客系统即采用React+Node独立完成</p>
                            <p> 熟悉使用Nodejs+MySQL进行简单的后台搭建，完成后台需要的基本功能，对云服务器的构建有一定了解 </p>
                </ContentWrapper>
            </MediaQuery>
            {/* 手机  <=767px */}
            <MediaQuery maxWidth={767}>
                <ContentWrapper className="phone">
                    <Avatar>
                        <img src={AvatarImg} alt="头像"></img>
                        <AvatarItem className="burc">这里是柏成BurC的官方博客</AvatarItem>
                        <AvatarItem>祝君食用快乐ヾ(◍°∇°◍)ﾉﾞ ~</AvatarItem>
                    </Avatar>
                    {/* <Divider className="divider"/>  */}
                    <Divider className="divider" orientation="left">校园经历</Divider>
                        <h6>1. 2016年9月考入青岛理工大学软件工程专业</h6>
                        <h6>2. 大一上学期</h6>
                            <p> 处于迷茫期，未确定自己发展方向，一直在校办勤工俭学</p>
                        <h6>3. 大一下学期</h6>
                            <p>成为公司“青岛海智信信息科技有限公司”负责人，担当企业法人</p>
                            <p>创建“海智信团队”，获批入驻“青岛理工大学创业孵化基地A306室”</p>
                        <h6>4. 大二上学期</h6>
                            <p>获国家励志奖学金（5000元）</p>
                        <h6>5. 大二下学期</h6>
                            <p>使用jQuery/Bootstrap/PHP搭建个人博客</p>
                        <h6>6. 大三上学期</h6>
                            <p>国家级大学生创新创业训练计划项目圆满结题，项目编号：201710429380，证书编号：20170939</p>
                            <p>获创新创业经费（10000元）</p>
                            <p>获第十六届山东省大学生软件设计大赛二等奖</p>
                        <h6>7. 大三下学期</h6>
                            <p>获第十届“蓝桥杯”山东赛区C/C++程序设计大学B组三等奖</p>
                            <p>获第十六届“挑战杯”.鲁南制药山东省大学生课外学术科技作品竞赛优秀作品二等奖</p>
                            <p>使用React/Node搭建个人博客，废弃原有博客，本博客已上传GitHub，具体请参考<a target="_blank" href='https://github.com/BurCha/blog'>项目地址</a></p>

                        <Divider className="divider" orientation="left">技术剖析</Divider>
                        <h6><i className="iconfont">&#xe646;</i>信控学院-软件专业，在王老师指导下，自2017年9月开始独立自学Web开发技术。</h6>
                        <h6><i className="iconfont">&#xe646;</i>HTML+CSS+JavaScript</h6>
                            <p> 能够熟练完成各种静态页面的编写，可独立进行各类页面的布局，可使用原生HTML+CSS实现响应式，同时兼容电脑与手机访问</p>
                            <p> 能够熟练开发各种交互功能，可解决大部分浏览器兼容问题，喜欢写原生JS代码，比如使用原生JS封装了Ajax方法 </p>
                            <p> 《JavaScript高级程序设计》红宝书前七章看过两遍，掌握ES6常用语法及高级特性</p>
                        <h6><i className="iconfont">&#xe646;</i> Bootstarp+jQuery</h6>
                            <p> 熟练使用Bootstrap框架、字体图标等常用前端技术，根据官方代码整理了自己的Bootstrap组件库</p>
                            <p> 熟练使用jQuery框架，整理了jQuery核心笔记一万余字</p>
                        <h6><i className="iconfont">&#xe646;</i> PHP</h6>
                            <p> 曾独立完成园丁小助手、个人博客项目的后台PHP开发</p>
                            <p> 熟悉Apache、MySQL</p>
                        <h6><i className="iconfont">&#xe646;</i> Canvas</h6>
                            <p> 曾使用原生JS加Canvas写出了九宫格手势密码、涂鸦面板等功能，同时兼容电脑与手机</p>
                        <h6><i className="iconfont">&#xe646;</i> React+Node</h6>
                            <p> 掌握前端MVVM框架--React，熟悉jsx语法、组件、Props & State核心特性，了解Diff算法、生命周期函数等</p>
                            <p> 该博客系统即采用React+Node独立完成</p>
                            <p> 熟悉使用Nodejs+MySQL进行简单的后台搭建，完成后台需要的基本功能，对云服务器的构建有一定了解 </p>
                </ContentWrapper>
            </MediaQuery>
            </Fragment>
        )
    }
}

export default Content;