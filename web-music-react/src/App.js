import React, { memo } from 'react'
import { renderRoutes } from "react-router-config"
import { HashRouter } from "react-router-dom"

import routes from "./router"

import ZCAppHeader from "@/components/app-header"
import ZCAppFooter from "@/components/app-footer"

export default memo(function App() {
  return (
    <HashRouter>
      <ZCAppHeader/>
      {renderRoutes(routes)}
      <ZCAppFooter/>
    </HashRouter>
  )
})
