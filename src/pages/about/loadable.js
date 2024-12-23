import React from "react";
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
    //异步加载当前目录下的组件
    loader: () => import('./'),
    // 加载过程中在页面显示的东西
    loading(){
       return <div>正在加载正在加载正在加载正在加载正在加载正在加载正在加载正在加载正在加载正在加载正在加载正在加载正在加载正在加载正在加载正在加载正在加载正在加载正在加载</div>
    }
});

// 返回一个无状态组件
export default ()=><LoadableComponent/>;
