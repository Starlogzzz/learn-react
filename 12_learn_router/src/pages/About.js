import React, { PureComponent } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'

function AboutMoneyComponent(props) {
  return <h2>本公司拥有上百亿资产</h2>
}
function AboutFutureComponent(props) {
  return <h2>本公司的未来一片光明</h2>
}
function AboutComponent(props) {
  return <h2>本公司背景深不可测</h2>
}
function JoinToComponent(props) {
  return <h2>欢迎加入我们，啦啦啦~</h2>
}

export default class About extends PureComponent {
  render() {
    return (
      <div>
        <NavLink exact to="/about" activeClassName="about-active">公司背景</NavLink>
        <NavLink exact to="/about/money" activeClassName="about-active">公司财政</NavLink>
        <NavLink exact to="/about/future" activeClassName="about-active">公司前途</NavLink>
        <button onClick={e => this.JoinUs()}>加入我们</button>

        <Switch>
        <Route exact path="/about" component={AboutComponent}/>
        <Route path="/about/money" component={AboutMoneyComponent}/>
        <Route path="/about/future" component={AboutFutureComponent}/>
        <Route path="/about/join" component={JoinToComponent}/>
        </Switch>
      </div>
    )
  }
  JoinUs() {
    console.log(this.props.history)
    console.log(this.props.location)
    console.log(this.props.match)
    this.props.history.push("/about/join")
  }
}
