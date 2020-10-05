import React, { PureComponent } from 'react'
import CounterClass from './01-体验hooks/01-CounterClass'
import CounterHook from './01-体验hooks/02-CounterHook'
import CounterHook2 from "./01-体验hooks/03-CounterHook"
import MultiHookState from './02-useState的使用/01-多个状态的使用'
import ComplexFriendHook from './02-useState的使用/02-复杂状态的修改'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        {/* <CounterClass></CounterClass> */}
        {/* <CounterHook2/> */}
        {/* <MultiHookState/> */}
        <ComplexFriendHook/>
      </div>
    )
  }
}
