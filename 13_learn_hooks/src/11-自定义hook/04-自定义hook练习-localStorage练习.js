import React, { useState, useEffect } from 'react'
import useLocalStore from './../hooks/local-store-hook';

export default function CustomLifeHookDemo04() {
  const [name, setName] = useLocalStore("name");
  return (
    <div>
      <h2>CustomLifeHookDemo04:{name}</h2>
      <button onClick={e => setName("MillionV")}>设置name</button>
    </div>
  )
}
