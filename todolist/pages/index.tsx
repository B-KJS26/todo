import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import List from './list'
import axios from 'axios';
import Modal from './Modal';
import Portal from './portal';

const Home: NextPage = () => {
  type listtype = {
    id: number;
    description: string;
    complete: boolean;
  }
  const [userlist, setUserlist] = useState<listtype[]>([]);
  const [opening, setOpening] = useState(false);
  const [adddata, setAdddata] = useState('');
  const openModal = () => {
    setOpening(!opening);
  }
  const cancelbutton = () => {
    setOpening(!opening);
  }
  const addtodolist = () => {
    if(adddata == '') {
      alert('내용이 입력되지 않았습니다! 내용을 입력해주세요!')
      return;
    }
    setOpening(!opening);
    postData();
    setAdddata('');
  }
  const postData = () => {
    //db.json 파일의 lists 객체에 있는 key가 id인 값은 유일한 값이라서 안넣어줘도 자동으로 생성됨.
    const data = { description: `${adddata}`, complete: false };
    axios.post("http://localhost:5000/lists", data)
    .then((Response) => {
      console.log('postdata');
      getposting();
    }).catch((Error) =>{
      console.log(Error);
    })
  }
  const getposting = () => {
    axios.get("http://localhost:5000/lists")
    .then((Response)=>{
      setUserlist(Response.data);
      console.log('getposting');

    }).catch((Error)=>{
        console.log(Error);
    })
}
useEffect(() => {
  getposting();
}, []);
  return (
    <>
      <main className="flex m-0 p-0 overflow-hidden flex-row sm:flex-col md:flex-col">
        <h1 className="fixed ml-4 mt-4 text-4xl font-Haepa md:text-3xl sm:text-2xl">DO!</h1>
        <div className="h-screen md:h-72 md:w-screen sm:h-60 sm:w-screen flex lg:flex-1 pl-2 flex-col justify-center items-center">
          <h2 className="font-Haepa text-4xl md:text-2xl sm:text-xs">
            오늘의 <span className="text-5xl text-white drop-shadow-3xl md:text-3xl sm:text-base" onClick={getposting}>할 일</span>을 등록해주세요
          </h2>
        </div>
        <aside className="flex w-5/12 h-screen md:w-screen sm:w-screen md:h-max sm:h-max justify-center items-center flex-col bg-gradient-to-b from-first to-second">
          <List listdata={userlist} loading={getposting}/>
            <button  className="w-1/12 m-10 md:w-6 sm:w-6 cursor-pointer transition duration-200 ease-in-out  hover:scale-110" onClick={openModal}>
              <img src="/images/plus.png" />
            </button>
        </aside>
      </main>
      <Portal>
        {
          opening ?  <Modal cancelbutton={cancelbutton} addtodolist={addtodolist} setAdddata={setAdddata} /> : null
        }
      </Portal>
    </>
  )
}

export default Home