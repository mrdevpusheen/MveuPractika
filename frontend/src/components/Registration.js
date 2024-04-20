import React from 'react';
import './Registration.css';
import Login from './Login';

function Registration() {

  function Reg(){
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const login = document.getElementById('login').value
    const passport = document.getElementById('passport').value
    const data = {
      email: email,
      password:password,
      login:login,
      passport:passport,
    }
    console.log(data)
  }
  return (
    <div className="Registration">
      <h1>Регистрация</h1>
      <>
        <div className='Reg-email'>
            <p>Email</p>
            <input id='email' type='text'/>
        </div>
        <div className='Reg-pass'>
            <p>Пароль</p>
            <input id='password' type='password'/>
        </div>
        <div className='Reg-login'>
            <p>Логин</p>
            <input id='login' type='text'/>
        </div>
        <div className='Reg-passport'>
            <p>Серия и номер паспорта</p>
            <input id='passport' type='text'/>
        </div>
        <button onClick={Reg}>Регистрироваться</button>
      </>

    </div>
  );
}

export default Registration;