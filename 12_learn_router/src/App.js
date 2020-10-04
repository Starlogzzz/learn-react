import React, { PureComponent } from 'react'
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch
} from "react-router-dom"

import "./pages/style.css"
import Home from "./pages/Home"
import About from "./pages/About"
import Profile from "./pages/Profile"
import User from './pages/User';
import NoMatch from './pages/NoMatch'
import Login from './pages/Login';
import Product from './pages/Product'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'


class App extends PureComponent {
  render() {
    return (
      <div>
        {/* NavLink的使用 */}
        {/* <NavLink exact to="/" activeStyle={{color: "red"}}>首页</NavLink>
        <NavLink to="/about" activeStyle={{color: "red"}}>关于</NavLink>
        <NavLink to="/profile" activeStyle={{color: "red"}}>我的</NavLink>*/}
 
        <NavLink exact to="/" activeClassName="active-link">首页</NavLink>
        <NavLink to="/about" activeClassName="active-link">关于</NavLink>
        <NavLink to="/profile" activeClassName="active-link">我的</NavLink>
        <NavLink to="/abc" activeClassName="active-link">abc</NavLink>
        <NavLink to="/user" activeClassName="active-link">用户</NavLink>
        <button onClick={e => this.showProduct()}>显示商品</button>

        {/* Switch的使用 */}
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/profile" component={Profile}/>
        {/* <Route path="/:id" component={User}/> */}
        <Route path="/user" component={User}/>
        <Route path="/login" component={Login}/>
        <Route path="/product" component={Product}/>

        <Route component={NoMatch}/>
        </Switch>
      </div>
    )
  }
  showProduct() {
    this.props.history.push("/product")
  }
}

export default withRouter(App)
