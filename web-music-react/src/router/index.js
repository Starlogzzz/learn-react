import React from "react"

import ZCDiscover from "@/pages/discover"
import ZCRecommend from "@/pages/discover/c-pages/recommend"
import ZCRanking from "@/pages/discover/c-pages/ranking"
import ZCSongs from "@/pages/discover/c-pages/songs"
import ZCDjradio from "@/pages/discover/c-pages/djradio"
import ZCArtist from "@/pages/discover/c-pages/artist"
import ZCAlbum from "@/pages/discover/c-pages/album"

import ZCMine from "@/pages/mine"
import ZCFriend from "@/pages/friend"
import { Redirect } from "react-router-dom";

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