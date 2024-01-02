import { useState } from 'react';
import { createContext } from 'react';

type Popup = {
  isPopupOpen: boolean;
  content: 'url' | 'body';
  openPopup: () => void;
  closePopup: () => void;
  changePopupCategory: (button: string) => void;
};

export const PopupContext = createContext<Popup>({
  isPopupOpen: false,
  content: 'url',
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
  const [content, setContent] = useState<Popup['content']>('url');
  const openPopup = () => setIsPopupOpen((isOpen) => isOpen || !isOpen);
  const closePopup = () => setIsPopupOpen((isClose) => isClose && !isClose);
  const changePopupCategory = (button: string) => {
    switch (button) {
      case 'IMAGE':
      case 'VIDEO':
        setContent((content) => (content = 'url'));
        break;
      case 'NOTE':
      case 'TASK':
        setContent((content) => (content = 'body'));
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
