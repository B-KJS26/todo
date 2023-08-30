import { NextPage } from "next";
import styles from '../styles/List.module.css';
import { json } from "stream/consumers";
import { useEffect, useState, useContext } from 'react';

const List = () => {
    const [userlist, setUserlist] = useState([]);
    function getposting() {
        const xhr = new XMLHttpRequest(); // XMLHttpRequest 객체 생성
        xhr.open("GET", "http://localhost:5000/lists");
        xhr.setRequestHeader("content-type", "application/json");
        xhr.send();
        xhr.onload = () => {
            if (xhr.status === 200) {
                const res = JSON.parse(xhr.response);
                const descriptions = res.map((item: any) => item.description); // 각 인덱스의 description 값만 추출
                setUserlist(descriptions);
            } else {
                console.log(xhr.status, xhr.statusText);
            }
        }
    }
    useEffect(() => {
        getposting();
    }, []);
    return (
        <>
            {userlist.map(todolist => (
                <div key={todolist} className={styles.listbox}>
                    <p className={styles.listname}>{todolist}</p>
                    <div className={styles.imgbutton}>
                        <img src="/images/yes.png" className={styles.completebutton} onClick={getposting}></img>
                        <img src="/images/remove.png" className={styles.deletebutton}></img>
                    </div>
                </div>
            ))}
        </>
    )
}

export default List;