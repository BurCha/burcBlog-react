//给reducer取别名headerReducer
import { reducer as headerReducer } from '../common/store/index';
import { reducer as girlReducer } from '../pages/girl/store/index';
import { reducer as codeReducer } from '../pages/code/store/index';
import { reducer as detailReducer } from '../pages/detail/store/index';
import { reducer as writeReducer } from '../pages/write/store/index';
import { reducer as updateReducer } from '../pages/update/store/index';
import { reducer as lineReducer } from '../pages/articleLine/store/index';
//redux-immutable库提供了一个combineReducers方法， 该方法可以生成一个immutable对象，
//功能：将分散的小reducer整合成一个大的reducer
import { combineReducers } from 'redux-immutable';

//生成一个immutable对象，将分散的小reducer整合成一个大的reducer
const reducer = combineReducers({
    headerReducer:headerReducer,
    girlReducer:girlReducer,
    codeReducer:codeReducer,
    detailReducer:detailReducer,
    writeReducer:writeReducer,
    updateReducer:updateReducer,
    lineReducer:lineReducer,
}); 

export default reducer;