import React, { useState } from 'react';

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [login, setLogin] = useState(false)
   const firstValue = text || 'hello world';
   const secondValue = text && 'hello world';

  return (
      <>
        <h2>Short Circuit</h2>
        <h3>first value: {firstValue}</h3>
        <h3>second value: {secondValue}</h3>
        <h3>{text || 'Sharif'}</h3>
        <h3>{text && 'Ahmed'}</h3>
        <h3>{!text && 'Ahmed'}</h3>
         <h2>Ternary operator</h2>
          <h3>
              {
                login ? 'Logged in' : 'Join now'
              }
          </h3>
          <button className='btn' onClick={() => setLogin(!login)}>{login ? 'Logout' : 'Login'}</button>
      </>
  );
};

export default ShortCircuit;
