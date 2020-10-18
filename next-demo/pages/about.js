import React, { memo } from 'react'
import AppLayout from "../components/app-layout"

export default memo(function about() {
  return (
    <AppLayout>
      <h2>About</h2>
      <p>就很厉害</p>
    </AppLayout>
  )
})
