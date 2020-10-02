import React from 'react'

import {connect} from "../utils/connect"
import {
  subAction,
  decAction
} from "../store/actionCreators"

function Profile(props) {
  return (
    <div>
      <h2>Profile</h2>
      <p>当前计数：{props.counter}</p>
      <button onClick={e => props.decrement()}>-1</button>
      <button onClick={e => props.subCounter(5)}>-5</button>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}
const mapDispatchToProp = dispatch => {
  return {
    decrement: function() {
      dispatch(decAction());
    },
    subCounter: function() {
      dispatch(subAction(5));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(Profile)
