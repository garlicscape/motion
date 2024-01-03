import { useState } from 'react';
import { createContext } from 'react';

type Popup = {
  isPopupOpen: boolean;
  content: 'Url' | 'Body';
  openPopup: () => void;
  closePopup: () => void;
  changePopupCategory: (button: string) => void;
};

export const PopupContext = createContext<Popup>({
  isPopupOpen: false,
  content: 'Url',
  openPopup: () => {},
  closePopup: () => {},
  changePopupCategory: (button: string) => {},
});

export default function PopupStateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [content, setContent] = useState<Popup['content']>('Url');
  const openPopup = () => setIsPopupOpen((isOpen) => isOpen || !isOpen);
  const closePopup = () => setIsPopupOpen((isClose) => isClose && !isClose);
  const changePopupCategory = (button: string) => {
    switch (button) {
      case 'IMAGE':
      case 'VIDEO':
        setContent((content) => (content = 'Url'));
        break;
      case 'NOTE':
      case 'TASK':
        setContent((content) => (content = 'Body'));
        break;
      default:
        throw Error('not valid button!!');
    }
  };

  //const value = ;

  return (
    <PopupContext.Provider
      value={{
        isPopupOpen,
        openPopup,
        closePopup,
        content,
        changePopupCategory,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
}
