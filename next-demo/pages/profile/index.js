import React, { memo } from 'react'
import { ProfileWrapper } from "./style"

export default memo(function Profile() {
  return (
    <ProfileWrapper>
      <p>名字：Starlog</p>
    </ProfileWrapper>
  )
})
