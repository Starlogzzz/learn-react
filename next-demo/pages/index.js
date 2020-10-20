import React, { memo } from 'react'
import AppLayout from "../components/app-layout"
import Link from "next/link"
import styles from "../styles/Home.module.css"

export default memo(function Home() {
  return (
    <div>
      <h2 className={styles.title}>Home</h2>
      <h2>Banners</h2>
      <ul>
        {
          [1,2,3,4].map((item, index) => {
            return (
              <Link href={`/recommend`}>
                <li>{item}</li>
              </Link>
            )
          })
        }
      </ul>
    </div>
  )
})