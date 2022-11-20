import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div style={{
      display:'flex',
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <h1>猫画像アプリ</h1>
      <img src="https://cdn2.thecatapi.com/images/du0.jpg" alt="" />
      <button>今日の猫さん</button>
    </div>
  )
}

export default Home
