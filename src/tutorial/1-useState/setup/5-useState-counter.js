import React, { useState } from 'react';

const UseStateCounter = () => {
  const [count, setCount] = useState(0)
  const [comCount, setComCount] = useState(0)

  const complexIncrease = () => {
      setTimeout(() => {
        //  setComCount(comCount + 1)
          setComCount((prevState) => {
              return prevState + 1
          })
      },2000)
  }
  return (
      <>
        <section>
          <h2>Regular Counter</h2>
          <h1>{ count }</h1>
          <button className='btn' onClick={() => setCount(count + 1)}> + </button>
          <button className='btn' onClick={() => setCount(count - 1)}> - </button>
          <button className='btn' onClick={() => setCount(0)}> Reset </button>
        </section>

        <section>
              <h2>Complex Counter</h2>
              <h1>{ comCount }</h1>
              <button className='btn' onClick={complexIncrease}> increase later </button>
          </section>
      </>
  )
};

export default UseStateCounter;
