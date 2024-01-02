import { useState } from 'react';
import { createContext } from 'react';

type Popup = {
  isPopupOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
};

export const PopupContext = createContext<Popup>({
  isPopupOpen: false,
  openPopup: () => {},
  closePopup: () => {},
});

export default function PopupStateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen((isOpen) => isOpen || !isOpen);
  const closePopup = () => setIsPopupOpen((isClose) => isClose && !isClose);

  return (
    <PopupContext.Provider value={{ isPopupOpen, openPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  );
}
