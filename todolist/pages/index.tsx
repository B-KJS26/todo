import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { createContext, useState } from 'react'
import List from './list'


const Home: NextPage = () => {
  const [Opening, setOpening] = useState(false);
  const openModal = () => {
    setOpening(!Opening);
  }
  const changejudge = () => {
    setOpening(!Opening);
  }
  const addtodolist = () => {
    setOpening(!Opening);
  }
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.logo}>DO!</h1>
        <main className={styles.main}>
          <h1 className={styles.maintext}>
            오늘의 <span className={styles.maining}>할 일</span>을 등록해주세요
          </h1>
        </main>
        {Opening ? <div className={styles.modalbackdrop}>
          <div className={styles.realmodal}>
            <h1 className={styles.backbutton} onClick={changejudge}>X</h1>
            <input placeholder='Write what are you going to do' className={styles.addto}></input>
            <button className={styles.addbutton} onClick={addtodolist}>추가하기</button>
          </div>
        </div> : null}
        <div className={styles.userlist}>
          <List />
          <img src="/images/plus.png" className={styles.plusbutton} onClick={openModal}></img>
        </div>
      </div>
    </>
  )
}

export default Home
