import { NextPage } from "next";
import styles from '../styles/List.module.css';
import jsondata from './data/listdata.json';
import { json } from "stream/consumers";
const List = () => {
    return (
        <>
            <div className={styles.userlist}>
                {jsondata.map(todolist => (
                    <div key={todolist.id} className={styles.listbox}>
                        <p className={styles.listname}>{todolist.description}</p>
                        <div className={styles.imgbutton}>
                            <img src="/images/yes.png" className={styles.completebutton}></img>
                            <img src="/images/remove.png" className={styles.deletebutton}></img>
                        </div>
                    </div>
                ))}
                <img src="/images/plus.png" className={styles.plusbutton}></img>
            </div>
        </>
    )
}

export default List;