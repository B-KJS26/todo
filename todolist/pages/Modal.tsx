import React from 'react';

type ModalType = {
    cancelbutton: () => void;
    setAdddata: (value: string) => void;
    addtodolist: () => void;
}
const Modal:React.FC<ModalType> = (props) => { 
    return (
        <div className="fixed flex justify-center items-center top-0 left-0 right-0 bottom-0 z-10 bg-neutral-300 bg-opacity-50">
        <div className="z-10 pt-2 w-7/12 h-3/4 sm:w-9/12 sm:h-2/6 md:w-9/12 md:h-3/6 rounded-lg bg-white justify-center items-center text-center">
        <div className="flex items-end justify-end p-4 pt-0">
          <p className="z-auto font-Haepa text-2xl sm:text-xs md:text-sm md:mt-4" onClick={props.cancelbutton}>X</p>
        </div>
          <input placeholder='할 일 입력' className="w-10/12 h-1/6 mt-20 p-4 sm:text-xs md:text-xs sm:mt-10 sm:w-10/12 md:w-10/12" onChange={(e) => props.setAdddata(e.target.value)}></input>
          <button className="w-4/12 h-20 mt-28 font-Haepa text-2xl rounded-lg bg-button-bg sm:mt-8 md:mt-12 sm:w-4/12 md:w-4/12 sm:h-12 md:h-12 sm:text-xs md:text-xs" onClick={props.addtodolist}>추가하기</button>
        </div>
      </div>
  );
}

export default Modal;
