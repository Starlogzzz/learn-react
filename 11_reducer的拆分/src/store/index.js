import {createStore,applyMiddleware,compose} from 'redux';
import thunkMiddleware from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import reducer from './reducer.js';
import saga from "./saga"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// 创建sagaMiddleware中间件
const sagaMiddleware = createSagaMiddleware();
// redux-thunk传入一个中间件作为参数
const storeEnhancer = applyMiddleware(thunkMiddleware, sagaMiddleware)

const store = createStore(reducer, composeEnhancers(storeEnhancer));

sagaMiddleware.run(saga);

export default store;

// import createSagaMiddleware from "redux-saga";
// const sagamiddleware = createSagaMiddleware();
// const storeenhance = applyMiddleware(sagamiddleware)
// const store = createStore(reducer)
// sagamiddleware.run()

// import createSagaMiddleware from "redux-saga";
// const sagaMiddleWare = createSagaMiddleware();
// const store = createStore(reducer);
// const storeenhance = applyMiddleware(sagaMiddleWare);
// sagaMiddleWare.run(saga)