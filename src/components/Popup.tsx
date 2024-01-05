import React from 'react';
import { Lists, PopupData } from '../App';
import { v4 as uuidv4 } from 'uuid';

export default function Popup({
  clickedButton,
  setClickedButton,
  data,
  setData,
  lists,
  setLists,
}: {
  clickedButton: string;
  setClickedButton: React.Dispatch<React.SetStateAction<string>>;
  data: PopupData;
  setData: React.Dispatch<React.SetStateAction<PopupData>>;
  lists: Lists[];
  setLists: React.Dispatch<React.SetStateAction<Lists[]>>;
}) {
  const handleSumbit = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    e.preventDefault();
    setLists([
      ...lists,
      {
        id: uuidv4(),
        title: data.title,
        content: data.content,
        clickedButton: clickedButton,
      },
    ]);
    setClickedButton('');
    setData({ title: '', content: '' });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const closePopup = () => {
    setClickedButton('');
    setData({ title: '', content: '' });
  };

  return (
    <div
      className={`absolute top-64 w-1/3 h-72 bg-gray-200 rounded-lg shadow-2xl`}
    >
      <div className='grid grid-cols-3 py-1 '>
        <span className='col-start-2 text-center font-bold text-lg'>
          {clickedButton}
        </span>
        <button
          onClick={closePopup}
          className='justify-self-end px-2 cursor-pointer font-bold text-lg text-red-700'
        >
          X
        </button>
      </div>
      <form onSubmit={handleSumbit} className='flex flex-col px-7 '>
        <div className='flex flex-col mt-7'>
          <label htmlFor='title' className='font-semibold'>
            Title
          </label>
          <input
            type='text'
            id='title'
            value={data.title}
            name='title'
            onChange={handleChange}
            className='p-1 outline-none'
          />
        </div>
        <div className='flex flex-col mt-6'>
          <label htmlFor='content' className='font-semibold'>
            {(clickedButton === 'IMAGE' || clickedButton === 'VIDEO') && 'Url'}
            {(clickedButton === 'MEMO' || clickedButton === 'TASK') && 'Body'}
          </label>
          <input
            type='text'
            id='content'
            value={data.content}
            name='content'
            onChange={handleChange}
            className='p-1 outline-none'
          />
        </div>
        <button
          name='submit'
          className='self-center py-1 px-3 mt-7 w-24 bg-sky-600 font-semibold text-white rounded-sm'
        >
          추가하기
        </button>
      </form>
    </div>
  );
}
