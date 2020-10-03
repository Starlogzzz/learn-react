import React, { PureComponent } from 'react'

import store from "./store"
import {
  addAction,
  incAction
} from "./store/actionCreators"
export default class Home extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      counter: store.getState().counter
    }
  }
  componentDidMount() {
    this.unsubscribue = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter
      })
    })
  }
  componentWillUnmount() {
    this.unsubscribue();
  }
  render() {
    return (
      <div>
        <h2>Home</h2>
        <p>当前计数：{this.state.counter}</p>
        <button onClick={e => this.addNum()}>+1</button>
        <button onClick={e => this.addCounter()}>+5</button>
      </div>
    )
  }
  addNum() {
    store.dispatch(incAction())
  }
  addCounter() {
    store.dispatch(addAction(5))
  }
}
