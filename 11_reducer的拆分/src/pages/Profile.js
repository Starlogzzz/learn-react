import React, { PureComponent } from 'react'

import store from "../store"
import {
  subAction,
  decAction
} from "../store/actionCreators"
export default class Profile extends PureComponent {
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
        <h2>Profile</h2>
        <p>当前计数：{this.state.counter}</p>
        <button onClick={e => this.subNum()}>-1</button>
        <button onClick={e => this.subCounter()}>-5</button>
      </div>
    )
  }
  subNum() {
    store.dispatch(decAction())
  }
  subCounter() {
    store.dispatch(subAction(5))
  }
}
