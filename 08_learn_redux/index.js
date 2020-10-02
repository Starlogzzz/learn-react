import store from "./store/index.js"

import { action1, action2 } from './store/actionCreators.js';

// 订阅store的修改
store.subscribe(() => {
  console.log(store.getState());
})

// 派发action
store.dispatch(action1(10))
store.dispatch(action2(5))