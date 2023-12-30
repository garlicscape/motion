import React from 'react';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className='flex flex-col items-center'>
      <h1 className='text-2xl'>MOTION</h1>
      <Navbar />
    </header>
  );
}
