import React, { PureComponent } from 'react'
import CounterClass from './pages/CounterClass'
import CounterHook from './pages/CounterHook'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        {/* <CounterClass></CounterClass> */}
        <CounterHook/>
      </div>
    )
  }
}
