import React, { useState } from 'react'

export default function ComplexFriendHook() {
  const [friends, setFriends] = useState(["dsm","lastxuan"])
  const [students, setStudents] = useState([
    { id: 110, name: "badwoman", age: 20 },
    { id: 111, name: "sabsertion", age: 30},
    { id: 112, name: "shoemaker", age: 22 }
  ])

  function incrementAge(index) {
    const newStudents = [...students];
    newStudents[index].age += 1
    setStudents(newStudents);
  }
  return (
    <div>
      <h2>朋友列表：</h2>
      <ul>
      {
        friends.map((item,index) => {
          return <li key={index}>{item}</li>
        })
      }
      </ul>
      <button onClick={e => setFriends([...friends, "Starlog"])}>添加朋友</button>

      <h2>学生列表</h2>
      <ul>
      {
        students.map((item,index) => {
          return (
            <li key={item.id}>
              <span>名字：{item.name} 年龄：{item.age}</span>
              <button onClick={e => incrementAge(index)}>age+1</button>
            </li>
          )
        })
      }
      </ul>
    </div>
  )
}
