import React, { useState, useEffect } from 'react';


const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)

  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', checkSize)
    return () => {
      window.removeEventListener('resize', checkSize)
    }
  },[size])

  return <h2>Window {size}px</h2>;
};

export default UseEffectCleanup;
