import React, { memo } from 'react'

import { headerLinks } from '@/common/local-data';

import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from "antd";
import { 
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style';


export default memo(function ZCAppHeader() {

  // 业务代码
  const showSelectList = (item, index) => {
    if(index>2){
      return <a href={item.link}>{item.title}</a>
    } else {
      return (
        <NavLink to={item.link} >
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    }
  }
  const goCreatorCemter = () => {
    window.open("https://music.163.com/#/login?targetUrl=%2Fst/creator")
  }


  // JSX代码
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">网易云音乐</a>
          <div className="select-list">
          {
            headerLinks.map((item, index) => {
              return (
                <div key={item.title} className="select-item">
                  {showSelectList(item, index)}
                </div>
              )
            })
          }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className="search" placeholder={"音乐/视频/电台/用户"} prefix={<SearchOutlined/>}/>
          <div className="creator" onClick={e => goCreatorCemter()}>创作者中心</div>
          <div className="goLogin">登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})
