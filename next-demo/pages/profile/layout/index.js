import React, { memo } from 'react'
import Link from 'next/link';

export default memo(function ProfileLayout(props) {
  return (
    <div>
      <Link href="/profile/info">
        <a>信息</a>
      </Link>
      <Link href="/profile/settings">
        <a>设置</a>
      </Link>
      {props.children}
    </div>
  )
})
