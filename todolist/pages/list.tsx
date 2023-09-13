import { todo } from 'node:test';
import styles from '../styles/List.module.css';
import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

const List = forwardRef((props, ref) => {
    const [userlist, setUserlist] = useState<any[]>([]);
    function getposting() {
        const xhr = new XMLHttpRequest(); // XMLHttpRequest 객체 생성
        xhr.open("GET", "http://localhost:5000/lists");
        xhr.setRequestHeader("content-type", "application/json");
        xhr.send();
        xhr.onload = () => {
            if (xhr.status === 200) {
                const res = JSON.parse(xhr.response);
                console.log("OK");
                setUserlist(res);
            } else {
                console.log("BAD");
                console.log(xhr.status, xhr.statusText);
            }
        }
    }
    function deletelist(index: any) {
        console.log(index + '번째');
    	const xhr = new XMLHttpRequest();

    	xhr.open("DELETE", `http://localhost:5000/lists/${index}`);
    	xhr.getResponseHeader("content-type");
    	xhr.send();
    	xhr.onload = () => {
            console.log('h');
    		if (xhr.status === 200) {
              const res = JSON.parse(xhr.response);
              console.log(res);
              getposting();
        	} else {
    		  console.log(xhr.status, xhr.statusText);
       		}
        }
    }
    function childFunction() {
        getposting();
    }

    useImperativeHandle(ref, () => ({
        childFunction
    }));

    useEffect(() => {
        getposting();
    }, []);
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