import React from 'react'

// import {connect} from "../utils/connect"
import {connect} from "react-redux"
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
      <button onClick={e => props.subNumber(5)}>-5</button>
      <h1>Banner</h1>
      <ul>
        {
          props.banners.map((item, index) => {
            return <li key={item.acm}>{item.title}</li>
          })
        }
      </ul>
      <h1>Recommend</h1>
      <ul>
        {
          props.recommends.map((item, index) => {
            return <li key={item.acm}>{item.title}</li>
          })
        }
      </ul>
 
    </div>
    
  )
}
const mapStateToProps = state => {
  return {
    counter: state.counterInfo.counter,
    banners: state.homeInfo.banners,
    recommends: state.homeInfo.recommends
  }
}
const mapDispatchToProps = dispatch => {
  return {
    decrement: function() {
      dispatch(decAction());
    },
    subNumber: function(num) {
      dispatch(subAction(num));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
