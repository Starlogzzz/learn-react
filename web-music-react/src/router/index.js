import ZCDiscover from "@/pages/discover"
import ZCMine from "@/pages/mine"
import ZCFriend from "@/pages/friend"

const routes = [
  {
    path: "/",
    exact: true,
    component: ZCDiscover
  },
  {
    path: "/mine",
    component: ZCMine
  },
  {
    path: "/friend",
    component: ZCFriend
  },
]

export default routes;