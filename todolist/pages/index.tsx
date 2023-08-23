import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.maintext}>
          오늘의 <span className={styles.maining}>할 일</span>을 등록해주세요
        </h1>
      </main>
      <div className={styles.userlist}>
        <div className={styles.listbox}>
          <p className={styles.listname}>간다아아</p>
          <div className={styles.imgbutton}>
            <img src="/images/yes.png" className={styles.completebutton}></img>
            <img src="/images/remove.png" className={styles.deletebutton}></img>
          </div>
        </div>
        <img src="/images/plus.png" className={styles.plusbutton}></img>
      </div>
    </div>
  )
}

export default Home
