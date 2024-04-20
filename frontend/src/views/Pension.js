import React from 'react';
import './Pension.css';

function Pension() {
  return (
    <div className="Pension">
        <>
        <div className='mainscreen2'>
          <div className='main-text'>
                <h1>Получить пенсию выгодно с Банк и Точка</h1>
                <p>Для вас вклад с повышенной ставкой, скидка на кредит и кешбэк бонусами за оплату картой</p>
          </div>
          <div className='phone'></div>
        </div>
        </>
        <>
        <div className='Block1'>
          <h1>Перевести пенсию в Банк и Точка-это просто</h1>
          <p>Не нужно приходить в Социальный фонд России (бывший Пенсионный фонд)</p>
          <ul>
            <li>
              <div className='number-background'>
                  <p>1</p>
                </div>
                <div className='list-text'>
                    <h4>Заполините заявку</h4>
                    <p>В Банк и Точка и в офисе банка (понадобится СНИЛС)</p>
                  </div>
            </li>
            <li>
              <div className='number-background'>
                  <p>2</p>
                </div>
                <div className='list-text'>
                    <h4>Дождитесь решения от Социального фонда</h4>
                    <p>Обычно это занимает 3 рабочих дня</p>
                  </div>
            </li>
            <li>
              <div className='number-background'>
                  <p>3</p>
                </div>
                <div className='list-text'>
                    <h4>Получайте пенсию и привилегии</h4>
                    <p>Пенсия будет поступать по графику Социального фонда</p>
                  </div>
            </li>
          </ul>
        </div>
        </>
    </div>
  );
}

export default Pension;