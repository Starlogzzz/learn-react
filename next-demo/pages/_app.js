import '../styles/globals.css'
import Head from "next/head";
import Link from "next/link";

import "../styles/app.css" // 全局生效

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Starlog Test</title>
      </Head>
      <header>
        <h2>头部区域</h2>
        <Link href="/about">
          <a>关于</a>
        </Link>
        <Link href="/profile">
          <a>profile</a>
        </Link>
        <hr />
      </header>
      <Component {...pageProps} />
      <footer>
        <hr />
        <h2>底部区域</h2>
      </footer>
    </>
  )
}

export default MyApp
