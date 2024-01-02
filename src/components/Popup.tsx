import React, { useContext } from 'react';
import { PopupContext } from '../context/PopupContext';

export default function Popup() {
  const { isPopupOpen, closePopup, content } = useContext(PopupContext);
  const handlePopupClose = () => {
    closePopup();
  };
  return (
    <div
      className={`${
        isPopupOpen ? 'visible' : 'invisible'
      } absolute bg-slate-300 top-64 w-1/3 h-72`}
    >
      <div className=' flex justify-between'>
        <span>POPUP</span>
        <button onClick={handlePopupClose}>X</button>
      </div>
      <div className='flex flex-col'>
        <span>Title</span>
        <input type='text' />
      </div>
      <div className='flex flex-col'>
        <span>{content}</span>
        <input type='text' />
      </div>
    </div>
  );
}
