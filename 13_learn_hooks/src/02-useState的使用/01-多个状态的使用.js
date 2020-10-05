import React, { useState } from 'react'

export default function MultiHookState() {
  const [name, setName] = useState("芜湖大司马")
  const [age, setAge] = useState(18);
  const [friend, setFriend] = useState(["PDD","Wh1t3zz"])
  return (
    <div>
      <h2>当前名称：{name}</h2>
      <h2>当前年龄：{age}</h2>
      <ul>
      {
        friend.map((item,index) => {
          return <li key={index}>{item}</li>
        })
      }
      </ul>
    </div>
  )
}
