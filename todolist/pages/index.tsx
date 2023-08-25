import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import List from './list'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>DO!</h1>
      <main className={styles.main}>
        <h1 className={styles.maintext}>
          오늘의 <span className={styles.maining}>할 일</span>을 등록해주세요
        </h1>
      </main>
      <List />
    </div>
  )
}

export default Home
