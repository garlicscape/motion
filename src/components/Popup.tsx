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
      } absolute top-64 w-1/3 h-72 bg-gray-200 rounded-lg shadow-2xl`}
    >
      <div className='grid grid-cols-3 py-1 '>
        <span className='col-start-2 text-center font-bold text-lg'>입력</span>
        <button
          className='justify-self-end px-2 cursor-pointer font-bold text-lg text-red-700'
          onClick={handlePopupClose}
        >
          X
        </button>
      </div>
      <div className='flex flex-col px-5 mt-7'>
        <span className='font-semibold'>Title</span>
        <input type='text' className='p-1 outline-none' />
      </div>
      <div className='flex flex-col px-5 mt-6'>
        <span className='font-semibold'>{content}</span>
        <input type='text' className='p-1 outline-none' />
      </div>
      <div className='mt-8 flex justify-center'>
        <button className='py-1 px-3 bg-sky-600 font-semibold text-white rounded-sm'>
          추가하기
        </button>
      </div>
    </div>
  );
}
