import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import 'semantic-ui-css/semantic.min.css'
import {Loader} from "semantic-ui-react"

interface searchCatImage  {
  id: string;
  url: string;
  height: number;
  width: number;
}

interface IndexPage {
  initialCatImage: string;
}

const fetchCatImage = async():Promise<searchCatImage> => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const result = await res.json();
  return result[0];
}

const Home: NextPage<IndexPage> = ({initialCatImage}) => {
  const [catImageUrl, setCatImageUrl] = useState(initialCatImage);
  const [isLoading, setIsLoading] = useState(false)
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
      <img src={catImageUrl} alt="" />
      <button style={{marginTop: 18}} onClick={handleClick}>今日の猫さん</button>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<
IndexPage
> = async () => {
  const initialImage = await fetchCatImage();
  return {
    props: {
      initialCatImage: initialImage.url
    },
  }
}

export default Home
