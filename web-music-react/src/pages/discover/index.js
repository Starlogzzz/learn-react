import React, { memo, useEffect } from 'react'


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
        <TopMenu className="wrap-v1">
          {
            discoverMenu.map((item, index) => {
              return (
                <NavLink key={item.title} to={item.link}>{item.title}</NavLink>
              )
            })
          }
        </TopMenu>
        {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})
