import React from 'react';
import './Main.css';
import { Slider } from '../components/Slider';
import slide from '../img/slide1.png'

function Main() {
  return (
    <div className="Main">
        <h1>Добро пожаловать</h1>
        <Slider>
          <div className='item item-1'>
            <img src={slide} alt=''/>
          </div>
          <div className='item item-2'></div>
          <div className='item item-3'></div>
        </Slider>
    </div>
  );
}

export default Main;