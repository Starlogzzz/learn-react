import React, { memo } from 'react'
import AppLayout from "../components/app-layout"


export default memo(function about() {
  return (
    <div>
      <h2>About</h2>
      <p>就很厉害</p>

      <style>{`
        p {
          color: green;
          font-size: 20px;
        }
      `}</style>
    </div>
  )
})
