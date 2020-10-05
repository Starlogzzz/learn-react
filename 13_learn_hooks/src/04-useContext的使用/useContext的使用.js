import React, { useContext } from 'react'

import {
  PersonContext,
  ThemeContext
} from "../App"
export default function ContextHook() {
  const user = useContext(PersonContext)
  const theme = useContext(ThemeContext)
  console.log(user);
  console.log(theme);
  
  return (
    <div>
      <h2>ContextHook</h2>
    </div>
  )
}
