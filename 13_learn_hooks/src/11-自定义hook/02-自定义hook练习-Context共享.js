import React, { useContext } from 'react'
import useUserHook from '../hooks/user-hook';

export default function CustomLifeHookDemo02() {
  const [user, theme] = useUserHook();
  console.log(user,theme);
  
  return (
    <div>
      CustomLifeHookDemo02
    </div>
  )
}
