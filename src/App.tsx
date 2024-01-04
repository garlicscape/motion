import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import Popup from './components/Popup';

export type NavbarButtons = string[];

function App() {
  const navbarButton: NavbarButtons = ['IMAGE', 'VIDEO', 'MEMO', 'TASK'];
  const [clickedButton, setClickedButton] = useState('');

  return (
    <>
      <Header
        navbarButtons={navbarButton}
        setClickedButton={setClickedButton}
      />
      {clickedButton && (
        <Popup
          clickedButton={clickedButton}
          setClickedButton={setClickedButton}
        />
      )}
      <List />
    </>
  );
}

export default App;
