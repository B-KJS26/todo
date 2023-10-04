import axios from 'axios';
const List = (props: any) => {
    const deletelist = (index: any) => {
        axios.delete(`http://localhost:5000/lists/${index}`)
        .then((Response) => {
            props.loading();
            console.log(Response);
        }).catch((Error) => {
            console.log(Error);
        })
    }
    const checklist = ({ index, description, complete }: { index: number; description: string; complete: boolean }) => {
        axios.put(`http://localhost:5000/lists/${index}`, { description: description, complete : !complete })
        .then((Response) => {
            props.loading();
            console.log(Response);
            console.log('good');
        }).catch((Error) => {
            console.log('bad');
        })
    }
    return (
        <ul className="w-10/12 pt-0 md:pt-4 sm:pt-4 [&>*:first-child]:mt-0" >
            {props.listdata && props.listdata.map((todolist: any) => (
                <li key={todolist.id} className={ 
                    todolist.complete ? "p-5 mt-3 w-full h-20 sm:w-10/12 sm:h-10 md:w-10/12 md:h-14 bg-green-300 rounded-lg whitespace-nowrap flex flex-row justify-start items-center" 
                    : "mt-3 w-full p-5 sm:h-10 md:h-14 h-20 sm:p-2 md:p-3 bg-white rounded-lg whitespace-nowrap flex flex-row justify-start items-center"}>
                    <p className="font-Haepa text-xl sm:text-xs md:text-base">{todolist.description}</p>
                    <div className="flex flex-1 justify-end items-center">
                        <button className="w-9 sm:w-6 sm:h-6 md:w-8 md:h-8 cursor-pointer transition duration-200 ease-in-out hover:scale-110" onClick={() => checklist({ index: todolist.id, description: todolist.description, complete: todolist.complete })}>
                            <img src="/images/yes.png" />
                        </button>
                        <button  className="ml-4 w-9 sm:w-6 sm:h-6 md:h-8 md:w-8 cursor-pointer transition duration-200 ease-in-out hover:scale-110" onClick={() => deletelist(todolist.id)}>
                            <img src="/images/remove.png"/>
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    )
};

export default List;