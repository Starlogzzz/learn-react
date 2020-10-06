import React, { useEffect } from 'react'

const Home = (props) => {
  useMyHook("Home")
  return <h2>Home</h2>
}
const Profile = (props) => {
  useMyHook("Profile")
  return <h2>Profile</h2>
}

export default function CustomLifeHookDemo01() {
  useMyHook("CustomLifeHookDemo01")
  return (
    <div>
      <h2>CustomLifeHookDemo01</h2>
      <Home/>
      <Profile/>
    </div>
  )
}

function useMyHook(title) {
  useEffect(()=>{
    console.log(`${title}被创建`);
    return () => {
      console.log(`${title}被销毁`);
    }
  })
}
