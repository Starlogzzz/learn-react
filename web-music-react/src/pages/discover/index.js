import React, { memo } from 'react'


import { discoverMenu } from "@/common/local-data";
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { renderRoutes } from 'react-router-config';

import { 
  DiscoverWrapper,
  TopMenu 
} from './style';

export default memo(function ZCDiscover(props) {
  const { route } = props
  
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {
            discoverMenu.map((item, index) => {
              return (
                <div  key={item.title} className="item">
                <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})
