import { createStore, applyMiddleware, compose } from 'redux';
// 以前，action只能是一个js对象，使用redux-thunk之后，你的action可以是一个函数了。当调用store.disptch(action)时，这个action函数会被自动执行
//当你调用 getTodoList()生成一个内容是函数的action的时候，这个函数可以接受到dispatch方法
import thunk from 'redux-thunk';
import reducer from './reducer';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
//放大器
const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);
const store = createStore(reducer, enhancer);

export default store;