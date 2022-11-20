import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const fetchCatImage = async() => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const result = await res.json();
    return result[0]
  }
  return (
    <div style={{
      display:'flex',
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh"
    }}>
      <h1>猫画像アプリ</h1>
      <img src="https://cdn2.thecatapi.com/images/du0.jpg" width={500} height="auto"/>
      <button style={{marginTop: "18"}} onClick={fetchCatImage}>今日の猫さん</button>
    </div>
  )
}

export default Home
