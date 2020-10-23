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
import MemoHook from './07-useMemo的使用/01-useMemo使用'
import MemoHookDemo02 from './07-useMemo的使用/02-useMemo传入子组件应用类型'
import RefHookDemo01 from './08-useRef的使用/01-useRef引用dom'
import RefHookDemo02 from './08-useRef的使用/02-useRef引用其他数据'
import ForwarRef from './09-useImperativeHandle的使用/01-回顾forwardRed'
import ImperativeHandleHook from './09-useImperativeHandle的使用/02-useImperativeHandle的使用';
import LayoutEffectHook from './10-useLayoutEffect/useLayoutEffect的使用'
import CustomLifeHookDemo01 from './11-自定义hook/01-自定义hook基本使用'
import CustomLifeHookDemo02 from './11-自定义hook/02-自定义hook练习-Context共享'
import CustomLifeHookDemo03 from './11-自定义hook/03-自定义hook练习-获取滚动位置'
import CustomLifeHookDemo04 from './11-自定义hook/04-自定义hook练习-localStorage练习'
import Home1 from './05-useReducer的使用/Home1'

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
        <Home1/>

        {/* 6.useCallback的使用 */}
        {/* <CallbackHookDemo01/> */}
        {/* <CallbackHookDemo02/> */}
        {/* <UseCallBacndemo/> */}

        {/* 7.useMemo */}
        {/* <MemoHook/> */}
        {/* <MemoHookDemo02/> */}

        {/* 8.useRef */}
        {/* <RefHookDemo01/> */}
        {/* <RefHookDemo02/> */}

        {/* 9.useImperativeHandle */}
        {/* <ForwarRef/> */}
        {/* <ImperativeHandleHook/> */}

        {/* 10.useLayoutEffect */}
        {/* <LayoutEffectHook/> */}

        {/* 11.自定义hook */}
        {/* <CustomLifeHookDemo01/> */}
        {/* <PersonContext.Provider value={{name: "Starlog", age: 21}}>
          <ThemeContext.Provider value={"sffsdfsdfv"}>
            <CustomLifeHookDemo02/>
          </ThemeContext.Provider>
        </PersonContext.Provider> */}
        {/* <CustomLifeHookDemo03/> */}
        {/* <CustomLifeHookDemo04/> */}
      </div>
    )
  }
}
