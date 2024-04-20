import React, { useState } from 'react';
import './CalculatorContainer.css'

const MortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateMonthlyPayment = () => {
    const monthlyInterestRate = (interestRate / 100) / 12;
    const numberOfPayments = loanTerm * 12;
    const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    setMonthlyPayment(monthlyPayment.toFixed(2));
  };

  return (
    <div className='CalculatorContainer'>
      <h1>Mortgage Calculator</h1>
      <label>
        Сумма кредита:
        <input type="number" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} />
      </label>
      <br />
      <label>
        Процентная ставка (%):
        <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
      </label>
      <br />
      <label>
        Срок кредита (годы):
        <input type="number" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} />
      </label>
      <br />
      <button onClick={calculateMonthlyPayment}>Рассчитать ежемесячный платеж</button>
      <h2>Ежемесячный платеж: {monthlyPayment}₽</h2>
    </div>
  );
};

export default MortgageCalculator;

