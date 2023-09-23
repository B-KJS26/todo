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
    function checklist({ index, description, complete }: { index: number; description: string; complete: boolean }) {
        console.log(index);
        axios.put(`http://localhost:5000/lists/${index}`, { description: description, complete : !complete })
        .then((Response) => {
            console.log(Response);
            console.log('good');
            getposting();
        }).catch((Error) => {
            console.log('bad');
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
                <div key={todolist.id} className={ todolist.complete ?  "mt-5 w-10/12 h-20 bg-green-300 rounded-lg whitespace-nowrap flex flex-row justify-start items-center basis-1/12" : "mt-5 w-10/12 h-20 bg-white rounded-lg whitespace-nowrap flex flex-row justify-start items-center basis-1/12"}>
                    <p className="ml-5 font-Haepa text-2xl">{todolist.description}</p>
                    <div className="flex flex-1 justify-end m-4">
                        <img src="/images/yes.png" className="w-12 cursor-pointer transition duration-200 ease-in-out hover:scale-110" onClick={() => checklist({ index: todolist.id, description: todolist.description, complete: todolist.complete })}></img>
                        <img src="/images/remove.png" className="ml-4 w-12 cursor-pointer transition duration-200 ease-in-out hover:scale-110" onClick={() => deletelist(todolist.id)}></img>
                    </div>
                </div>
            ))}
        </>
    )
});

export default List;