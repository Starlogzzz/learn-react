import React from "react"
import { Redirect } from "react-router-dom";

const ZCDiscover = React.lazy(() => import("@/pages/discover"))
const ZCRecommend = React.lazy(() => import("@/pages/discover/c-pages/recommend"))
const ZCRanking = React.lazy(() => import("@/pages/discover/c-pages/ranking"))
const ZCSongs = React.lazy(() => import("@/pages/discover/c-pages/songs"))
const ZCDjradio = React.lazy(() => import("@/pages/discover/c-pages/djradio"))
const ZCArtist = React.lazy(() => import("@/pages/discover/c-pages/artist"))
const ZCAlbum = React.lazy(() => import("@/pages/discover/c-pages/album"))
const ZCPlayer = React.lazy(() => import("@/pages/player"))

const ZCMine = React.lazy(() => import("@/pages/mine"))
const ZCFriend = React.lazy(() => import("@/pages/friend"))

// import ZCDiscover from "@/pages/discover"
// import ZCRecommend from "@/pages/discover/c-pages/recommend"
// import ZCRanking from "@/pages/discover/c-pages/ranking"
// import ZCSongs from "@/pages/discover/c-pages/songs"
// import ZCDjradio from "@/pages/discover/c-pages/djradio"
// import ZCArtist from "@/pages/discover/c-pages/artist"
// import ZCAlbum from "@/pages/discover/c-pages/album"
// import ZCPlayer from "@/pages/player"

// import ZCMine from "@/pages/mine"
// import ZCFriend from "@/pages/friend"

const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discover/recommend"/>
    )
  },
  {
    path: "/discover",
    component: ZCDiscover,
    routes: [
      {
        path: "/discover/recommend",
        component: ZCRecommend
      },
      {
        path: "/discover/ranking",
        component: ZCRanking
      },
      {
        path: "/discover/songs",
        component: ZCSongs
      },
      {
        path: "/discover/djradio",
        component: ZCDjradio
      },
      {
        path: "/discover/artist",
        component: ZCArtist
      },
      {
        path: "/discover/album",
        component: ZCAlbum
      },
      {
        path: "/discover/player",
        component: ZCPlayer
      },
    ]
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