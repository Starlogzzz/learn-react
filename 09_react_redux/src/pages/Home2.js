import React from 'react'

import {connect} from "../utils/connect"
import {
  incAction,
  addAction
} from "../store/actionCreators";

function Home(props) {
  return (
    <div>
      <h2>Home</h2>
      <p>当前计数：{props.counter}</p>
      <button onClick={e => props.increment()}>+1</button>
      <button onClick={e => props.subNumber(5)}>+5</button>
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
    increment: function() {
      dispatch(incAction())
    },
    subNumber: function(num) {
      dispatch(addAction(num))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(Home);
