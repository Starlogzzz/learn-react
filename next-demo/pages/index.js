import React, { memo } from 'react'
import AppLayout from "../components/app-layout"

export default memo(function Home() {
  return (
    <AppLayout>
      <h2>Home</h2>
      <h2>Banners</h2>
      <ul>
        <li>推荐商品1</li>
        <li>推荐商品2</li>
        <li>推荐商品3</li>
        <li>推荐商品4</li>
        <li>推荐商品5</li>
      </ul>
    </AppLayout>
  )
})