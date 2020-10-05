
import Home from './../pages/Home';
import About, { AboutComponent, AboutMoneyComponent, AboutFutureComponent, JoinToComponent } from './../pages/About';
import Profile from './../pages/Profile';
import User from './../pages/User';


const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/about",
    component: About,
    routes: [
      {
        path: "/about",
        exact: true,
        component: AboutComponent
      },
      {
        path: "/about/money",
        component: AboutMoneyComponent
      },
      {
        path: "/about/future",
        component: AboutFutureComponent
      },
      {
        path: "/about/join",
        component: JoinToComponent
      }
    ]
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/user",
    component: User
  }
]

export default routes