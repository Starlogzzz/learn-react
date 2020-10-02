import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware from "redux-thunk";
import reducer from './reducer.js';

// 传入一个中间件作为参数
const storeEnhancer = applyMiddleware(thunkMiddleware)

const store = createStore(reducer, storeEnhancer);

export default store;
