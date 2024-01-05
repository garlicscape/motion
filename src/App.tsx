import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import Popup from './components/Popup';

export type NavbarButtons = string[];

export interface PopupData {
  title: string;
  content: string;
}

export interface Lists extends PopupData {
  id: string;
  clickedButton: string;
}

function App() {
  const navbarButton: NavbarButtons = ['IMAGE', 'VIDEO', 'MEMO', 'TASK'];
  const [clickedButton, setClickedButton] = useState('');
  const [data, setData] = useState<PopupData>({
    title: '',
    content: '',
  });
  const [lists, setLists] = useState<Lists[]>([]);

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
          data={data}
          setData={setData}
          lists={lists}
          setLists={setLists}
        />
      )}
      <List lists={lists} />
    </>
  );
}

export default App;
