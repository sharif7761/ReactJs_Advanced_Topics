import React, { useState } from 'react';

const ErrorExample = () => {
  const [title, setTitle] = useState('random title')

  const handleClick = () => {
      setTitle('changed title')
  }

  return (
      <>
        <h2>{ title }</h2>
        <button className='btn' onClick={handleClick}>Change Title</button>
      </>
  )
};

export default ErrorExample;
