import store from "./store/index.js"

import { action1, action2 } from './store/actionCreators.js';

// 订阅store的修改
store.subscribe(() => {
  console.log(store.getState());
})


// 1.基本做法
// console.log("dispatch前:", action1(10));
// store.dispatch(action1(10))
// console.log("dispatch后，store：", store.getState());

// console.log("dispatch前:", action2(100));
// store.dispatch(action2(100))
// console.log("dispatch后，store：", store.getState());

// 2.封装一个函数
// function dispatchAndLog(action) {
//   console.log("dispatch前:", action);
//   store.dispatch(action)
//   console.log("dispatch后，store：", store.getState());
// }

// dispatchAndLog(action1(30));

// 3.函数的基础上优化-封装dispatch
// let next = store.dispatch;
// function dispatchAndLog(action) {
//   console.log("dispatch前:", action);
//   next(action);
//   console.log("dispatch后，store：", store.getState());
// }
// store.dispatch = dispatchAndLog;
// store.dispatch(action1(50))

// 4.将之前的操作进行封装
function patchLogging(store) {
  let next = store.dispatch;
  function dispatchAndLog(action) {
    console.log("dispatch前:", action);
    next(action);
    console.log("dispatch后，store：", store.getState());
  }
  return dispatchAndLog;
}

// patchLogging(store);
// store.dispatch(action1(50))

// 封装patchThunk的功能
function patchThunk(store) {
  const next = store.dispatch;
  function dispatchAndThunk(action) {
    if(typeof action === "function") {
      action(store.dispatch, store.getState)
    } else {
      next(action);
    }
  }

  return dispatchAndThunk;
}

patchLogging(store);
patchThunk(store);
// store.dispatch(action1(50))
// store.dispatch(action2(50))

// store.dispatch(addAction(10));
// store.dispatch(addAction(5));

// function foo(dispatch, getState) {
//   dispatch(action2(20))
// }

// store.dispatch(foo);

// 5.封装applyMiddleware
function applyMiddlewares(...middlewares) {
  middlewares.forEach(middlewares => {
    store.dispatch = middlewares(store);
  })
}

applyMiddlewares(patchLogging, patchThunk)