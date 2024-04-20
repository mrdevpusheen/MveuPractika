import React from 'react';
import './Cards.css';
import creditcard from '../img/card.png'
import card from '../img/Card2.png'
import cardblackedition from '../img/CardBlackEdition.png'

function Cards() {
  return (
    <div className="Cards">
        <>
        <div className='mainscreen'>
          <h1 className='h1-2'>Закажи себе карту банка</h1>
          <img src={creditcard} alt='Credit Card'/>
        </div>
        </>
        <>
        <div className='1block'>
          <ul className='ul2'>
            <li className='li2'>
              <p className='li2text'>Кредитная карта</p>
              <div className='imgcenter'><img src={card} alt='Credit Card'/></div>
              
              <button>Заказать</button>
            </li>
            <li className='li2-2'>
              <p className='li2text'>Дебетовая карта</p>
              <div className='imgcenter'><img src={card} alt='Debit Card'/></div>
              
              <button>Заказать</button>
            </li>
            <li className='li2-3'>
              <p className='li2text'>Кредитная карта Black Edition</p>
              <div className='imgcenter'><img src={cardblackedition} alt='Credit Card Black Edition'/></div>
              
              <button>Заказать</button>
            </li>
            <li className='li2-4'>
              <p className='li2text'>Дебетовая карта Black Edition</p>
              <div className='imgcenter'><img src={cardblackedition} alt='Debit Card Black Edition'/></div>
              
              <button>Заказать</button>
            </li>
          </ul>
        </div>
        </>
    </div>
  );
}

export default Cards;