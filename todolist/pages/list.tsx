import { NextPage } from "next";
import styles from '../styles/List.module.css';
import jsondata from './data/listdata.json';
import { json } from "stream/consumers";
import { useEffect, useState, useContext } from 'react';

const List = () => {
    let userslist: Array<string> = [];

    return (
        <>
            {jsondata.map(todolist => (
                <div key={todolist.id} className={styles.listbox}>
                    <p className={styles.listname}>{todolist.description}</p>
                    <div className={styles.imgbutton}>
                        <img src="/images/yes.png" className={styles.completebutton}></img>
                        <img src="/images/remove.png" className={styles.deletebutton}></img>
                    </div>
                </div>
            ))}

        </>
    )
}

export default List;