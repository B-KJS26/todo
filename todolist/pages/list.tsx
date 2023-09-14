import { todo } from 'node:test';
import styles from '../styles/List.module.css';
import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import axios from 'axios';
const List = forwardRef((props, ref) => {
    const [userlist, setUserlist] = useState<any[]>([]);
    function getposting() {
        axios.get("http://localhost:5000/lists")
        .then((Response)=>{
            setUserlist(Response.data);
        }).catch((Error)=>{
            console.log(Error);
        })
    }
    function deletelist(index: any) {
        axios.delete(`http://localhost:5000/lists/${index}`)
        .then((Response) => {
            console.log(Response);
            getposting();
        }).catch((Error) => {
            console.log(Error);
        })
    }
    function childFunction() {
        getposting();
    }
    useImperativeHandle(ref, () => ({
        childFunction
    }));
    useEffect(() => {
        getposting();
    }, [userlist]);
    return (
        <>
            {userlist.map((todolist) => (
                <div key={todolist.id} className={styles.listbox}>
                    <p className={styles.listname}>{todolist.description}</p>
                    <div className={styles.imgbutton}>
                        <img src="/images/yes.png" className={styles.completebutton} onClick={getposting}></img>
                        <img src="/images/remove.png" className={styles.deletebutton} onClick={() => deletelist(todolist.id)}></img>
                    </div>
                </div>
            ))}
        </>
    )
});

export default List;