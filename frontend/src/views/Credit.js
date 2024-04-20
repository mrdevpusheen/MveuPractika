import React from 'react';
import './Credit.css';
import MainScreen from '../img/main-screen.png'

function Credit() {
  return (
    <div className="Credit">
        <>
        <div className='main-screen'>
          <img src={MainScreen} alt="mainscreen"/>
        </div>
        </>
        <>
        <div className='blocks'></div>
        </>
    </div>
  );
}

export default Credit;