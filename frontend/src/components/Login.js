import React from 'react';
import './Login.css';

function Login() {

  function Log(){
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const data = {
      email: email,
      password:password
    }
    console.log(data)
  }
  
  return (
    <div className="Login">
        <h1>Вход</h1>
        <div className='Login-email'>
            <p>Email</p>
            <input id='email' type='text'/>
        </div>
        <div className='Login-pass'>
            <p>Пароль</p>
            <input id='password' type='password'/>
        </div>
        <button onClick={Log}>Войти</button>
    </div>
  );
}

export default Login;