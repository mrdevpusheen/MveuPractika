import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './views/Main';
import ModalBox from './components/ModalBox';
import Login from './components/Login';
import Registration from './components/Registration';
import CalculatorContainer from './views/CalculatorContainer'
import Cards from './views/Cards';
import Credit from './views/Credit';
import Pension from './views/Pension';


function App() {

  const[page, setPage] = useState('Main')
  const[modalBox, setModalBox] = useState('none')

  const pages = {
    Main: <Main/>,
    CalculatorContainer: <CalculatorContainer/>,
    Credit: <Credit/>,
    Cards: <Cards/>,
    Pension: <Pension/>
  }

  const modalBoxes = {
    none: null,
    Login: <ModalBox setModalBox={setModalBox}><Login/></ModalBox>,
    Registration: <ModalBox setModalBox={setModalBox}><Registration/></ModalBox>,
  }

  return (
    <div className="App">
      <Header setPage={setPage} setModalBox={setModalBox}/>
      {modalBoxes[modalBox]}
      {pages[page]}
      <Footer />
    </div>
  );
}

export default App;
