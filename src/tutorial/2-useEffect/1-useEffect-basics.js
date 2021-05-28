import React, { useState, useEffect } from 'react';

const UseEffectBasics = () => {
  const [value, setValue] = useState(0)
  useEffect(() => {
    document.title = `New Message (${value})`
  })
  return (
      <>
        <h2>{ value }</h2>
        <button className='btn' onClick={() => setValue(value + 1)}>
          click me
        </button>
      </>
  )
};

export default UseEffectBasics;
