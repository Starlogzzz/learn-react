import React, { memo } from 'react'
import AppLayout from "../components/app-layout"
import Router from "next/router"
import Link from "next/link"
import styles from "../styles/Home.module.css"
import axios from 'axios'

const Home =  memo(function(props) {
  const {name, banners, recommends} = props;

  const onChangeId = (item) => {
    Router.push({
      pathname: "/recommend",
      query: {
        id: item
      }
    })
  }
  return (
    <div>
      <h2 className={styles.title}>Home</h2>
      <h2>Banners</h2>
      <ul>
        {
          [1,2,3,4].map((item, index) => {
            return (
              // <Link key={item} href={`/recommend?id=${item}`}>
              //   <li>推荐数据id：{item}</li>
              // </Link>
              <li onClick={e => onChangeId(item)}>推荐数据id：{item}</li>
            )
          })
        }
      </ul>
      <p>名字：{name}</p>
      <p>轮播图数据：</p>
      <ul>
        {
          banners.map((item, index) => {
            return <li key={item.acm}>{item.title}</li>
          })
        }
      </ul>
    </div>
  )
})

Home.getInitialProps = async (props) => {
  const res = await axios({ url:"http://123.207.32.32:8000/home/multidata"});

  return {
    name: "gzc",
    banners: res.data.data.banner.list,
    recommends: res.data.data.recommend.list
  }
}
export default Home;