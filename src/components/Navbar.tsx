import { useContext } from 'react';
import { PopupContext } from '../context/PopupContext';

export default function Navbar() {
  const { openPopup, changePopupCategory } = useContext(PopupContext);
  const handleButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const clickedButton = e.currentTarget.innerText;
    changePopupCategory(clickedButton);
    openPopup();
  };

  return (
    <>
      <nav className='text-center flex gap-10 relative'>
        <button
          className='bg-white w-20 p-2 rounded-md font-medium'
          onClick={handleButtonClick}
        >
          IMAGE
        </button>
        <button
          className='bg-white w-20 rounded-md font-medium'
          onClick={handleButtonClick}
        >
          VIDEO
        </button>
        <button
          className='bg-white w-20 rounded-md font-medium'
          onClick={handleButtonClick}
        >
          NOTE
        </button>
        <button
          className='bg-white w-20 rounded-md font-medium'
          onClick={handleButtonClick}
        >
          TASK
        </button>
      </nav>
    </>
  );
}
