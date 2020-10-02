import React, { PureComponent } from 'react'
import Home from "./pages/Home4-redux-thunk的使用"
import Profile from "./pages/Profile3"

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home/>
        <Profile/>
      </div>
    )
  }
}
