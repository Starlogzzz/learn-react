import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

export default class User extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true
    }
  }
  render() {
    return this.state.isLogin? (
      <div>
        <h2>Hello Starlog</h2>
      </div>
    ):<Redirect to="/Login"/>
  }
}
