import React from 'react';
import Navbar from './components/navbar'
import Routes from './routes'

export default function App() {
  return (
    <>
      <div className='container'>
        <Navbar />
        <Routes />
      </div>
    </>
  );
}