import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { useRef, useState } from 'react'
import List from './list'
import axios from 'axios';

const Home: NextPage = () => {
  const myRef = useRef<any | null>(null);
  const dataloading = () => {
    myRef.current.childFunction();
  }
  const [opening, setOpening] = useState(false);
  const [adddata, setAdddata] = useState('');
  const openModal = () => {
    setOpening(!opening);
  }
  const cancelbutton = () => {
    setOpening(!opening);
  }
  const addtodolist = () => {
    setOpening(!opening);
    console.log(adddata);
    postData();
    dataloading();
  }
  function postData() {
    //db.json 파일의 lists 객체에 있는 key가 id인 값은 유일한 값이라서 안넣어줘도 자동으로 생성됨.
    const data = { description: `${adddata}`, complete: false };
    axios.post("http://localhost:5000/lists", data)
    .then((Response) => {
      console.log(Response);
    }).catch((Error) =>{
      console.log(Error);
    })
  }

  return (
    <>
      <div className="flex m-0 p-0 overflow-hidden">
        <h1 className="fixed ml-4 mt-4 text-4xl font-Nexa">DO!</h1>
        <main className="min-h-full flex flex-1 pl-2 flex-col justify-center items-center">
          <h2 className="font-Haepa text-5xl">
            오늘의 <span className="text-6xl text-white drop-shadow-3xl">할 일</span>을 등록해주세요
          </h2>
        </main>
        {opening ? <div className="fixed flex justify-center items-center top-0 left-0 right-0 bottom-0 z-10 bg-neutral-300 bg-opacity-50">
          <div className="z-10 w-7/12 h-3/4 rounded-lg bg-white justify-center items-center text-right pr-20">
            <p className="z-auto font-Nexa text-4xl ml-20 mt-10" onClick={cancelbutton}>X</p>
            <input placeholder='Write what are you going to do' className="w-10/12 h-1/6 mt-20 mr-12 pl-4" onChange={(e) => setAdddata(e.target.value)}></input>
            <button className="w-1/4 h-20 mr-96 mt-48 font-Haepa text-2xl rounded-lg bg-button-bg" onClick={addtodolist}>추가하기</button>
          </div>
        </div> : null}
        <div className="flex w-5/12 h-screen justify-center items-center flex-col bg-gradient-to-b from-first to-second">
          <List ref={myRef} />
          <img src="/images/plus.png" className="w-1/12 m-10 cursor-pointer transition duration-200 ease-in-out  hover:scale-110" onClick={openModal}></img>
        </div>
      </div>
    </>
  )
}

export default Home