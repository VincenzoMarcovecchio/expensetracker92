import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
export default function AddTransation() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type='text'
            id='text'
            placeholder='Enter text...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
          </label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type='number'
            id='amount'
            placeholder='Enter amount...'
          />
        </div>
        <button type='submit' className='btn'>
          Add transaction
        </button>
      </form>
    </>
  );
}
