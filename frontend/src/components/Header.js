import React from 'react';
import './Header.css';
import UserBox from './UserBox';

function Header({setPage, setModalBox}) {
  return (
    <div className="Header">
      <h1>БАНК И ТОЧКА</h1>
      <ul>
        <li onClick={() => setPage('Main')}>Главная</li>
        <li onClick={() => setPage('CalculatorContainer')}>Конвертер валют</li>
        <li onClick={() => setPage('Credit')}>Кредиты</li>
        <li onClick={() => setPage('Cards')}>Карты банка</li>
        <li onClick={() => setPage('Pension')}>Пенсии</li>
      </ul>
      <UserBox setModalBox={setModalBox}/>
    </div>
  );
}

export default Header;