import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import Navbar from './components/Navbar';
import Popup from './components/Popup';
import PopupStateProvider from './context/PopupContext';

function App() {
  return (
    <>
      <Header />
      <PopupStateProvider>
        <Navbar />
        <Popup />
      </PopupStateProvider>
      <List />
    </>
  );
}

export default App;
