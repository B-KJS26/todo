import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { useRef, useState } from 'react'
import List from './list'


const Home: NextPage = () => {
  const myRef = useRef<any | null>(null);
  const dataloading = () => {
    myRef.current.childFunction();
  }
  const [Opening, setOpening] = useState(false);
  const [adddata, setAdddata] = useState('');
  const openModal = () => {
    setOpening(!Opening);
  }
  const cancelbutton = () => {
    setOpening(!Opening);
  }
  const addtodolist = () => {
    setOpening(!Opening);
    console.log(adddata);
    postData();
    dataloading();
  }
  function postData() {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:5000/lists");
    xhr.setRequestHeader("content-type", "application/json; charset=UTF-8")
    //db.json 파일의 lists 객체에 있는 key가 id인 값은 유일한 값이라서 안넣어줘도 자동으로 생성됨.
    const data = { description: `${adddata}`, complete: 'no' };
    xhr.send(JSON.stringify(data));
    xhr.onload = () => {
      if (xhr.status === 201) {
        const res = JSON.parse(xhr.response);
        console.log(res);
      } else {
        console.log(xhr.status, xhr.statusText);
      }
    }
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
            <h1 className={styles.backbutton} onClick={cancelbutton}>X</h1>
            <input placeholder='Write what are you going to do' className={styles.addto} onChange={(e) => setAdddata(e.target.value)}></input>
            <button className={styles.addbutton} onClick={addtodolist}>추가하기</button>
          </div>
        </div> : null}
        <div className={styles.userlist}>
          <List ref={myRef} />
          <img src="/images/plus.png" className={styles.plusbutton} onClick={openModal}></img>
        </div>
      </div>
    </>
  )
}

export default Home