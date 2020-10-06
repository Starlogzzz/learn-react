import React, { PureComponent, createContext } from 'react'
import CounterClass from './01-体验hooks/01-CounterClass'
import CounterHook from './01-体验hooks/02-CounterHook'
import CounterHook2 from "./01-体验hooks/03-CounterHook"
import MultiHookState from './02-useState的使用/01-多个状态的使用'
import ComplexFriendHook from './02-useState的使用/02-复杂状态的修改'
import ClassCounterTitleChange from './03-useEffect的使用/01-class实现title的修改'
import HooksChangeTitle from './03-useEffect的使用/02-useEffect实现title的修改'
import UseEffectCancel from './03-useEffect的使用/03-useEffect模拟订阅和取消订阅'
import MultiEffectHook from './03-useEffect的使用/04-多个useEffect一起使用'
import ContextHook from './04-useContext的使用/useContext的使用'
import Home from './05-useReducer的使用/Home'
import CallbackHookDemo01 from './06-useCallback的使用/01_useCallback不能进行性能优化'
import CallbackHookDemo02 from './06-useCallback的使用/02_useCallback进行性能优化'
import UseCallBacndemo from './06-useCallback的使用/02-useCallback2demo'

export const PersonContext = createContext();
export const ThemeContext = createContext();

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isShow: true
    }
  }
  

  render() {
    
    return (
      <div>
        {/* 1.Hook初体验 */}
        {/* <CounterClass/> */}
        {/* <CounterHook2/> */}

        {/* 2.useState */}
        {/* <MultiHookState/> */}
        {/* <ComplexFriendHook/> */}

        {/* 3.useEffect */}
        {/* <ClassCounterTitleChange/> */}
        {/* <HooksChangeTitle/> */}
        {/* {this.state.isShow && <UseEffectCancel/>}
        <button onClick={e => this.setState({isShow: !this.state.isShow})}>切换</button> */}
        {/* <MultiEffectHook/> */}

        {/* 4.useContext的使用 */}
        {/* <PersonContext.Provider value={{name: "wuhudsm", age: 32}}>
          <ThemeContext.Provider value={{color: "red", fontSize: "30px"}}>
            <ContextHook/>
          </ThemeContext.Provider>
        </PersonContext.Provider> */}

        {/* 5.useReducer的使用 */}
        {/* <Home/> */}

        {/* 6.useCallback的使用 */}
        {/* <CallbackHookDemo01/> */}
        {/* <CallbackHookDemo02/> */}
        <UseCallBacndemo/>
      </div>
    )
  }
}
