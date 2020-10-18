import React, { memo } from 'react'
import Head from 'next/head'
import Link from 'next/link';

export default memo(function AppLayout(props) {
  return (
    <div>
      <Head>
        <title>Starlog Test</title>
      </Head>
        <header>
          <h2>头部区域</h2>
          <Link href="/about">
            <a>关于</a>
          </Link>
          <hr />
        </header>
        {props.children}
        <footer>
          <hr />
          <h2>底部区域</h2>
        </footer>
    </div>
  )
})
