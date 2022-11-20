import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

interface searchCatImage  {
  id: string;
  url: string;
  height: number;
  width: number;
}

interface IndexPageProps {
  initigalCatImageUrl: string;
}

const Home: NextPage = () => {
  const [catImageUrl, setCatImageUrl] = useState("")

  const handleClick = async() => {
    const catImage = await fetchCatImage();
    setCatImageUrl(catImage.url)
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
      <img src={catImageUrl} width={500} height="auto"/>
      <button style={{marginTop: 18}} onClick={handleClick}>今日の猫さん</button>
    </div>
  )
}

export const getSeverSideProps: GetServerSideProps<IndexPageProps> = async () => {
  const catImageUrl = await fetchCat
};

export default Home
