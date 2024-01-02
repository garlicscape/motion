import React, { useContext } from 'react';
import { PopupContext } from '../context/PopupContext';

export default function Popup() {
  const { isPopupOpen, closePopup } = useContext(PopupContext);
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
    </div>
  );
}
