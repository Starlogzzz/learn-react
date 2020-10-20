import React, { memo } from 'react'

import ProfileLayout from "../layout"

import { InfoWrapper } from "./style";
export default memo(function Info() {
  return (
    <ProfileLayout>
      <InfoWrapper>
        <h2>My name is WuhuDsm</h2>
      </InfoWrapper>
    </ProfileLayout>
  )
})
