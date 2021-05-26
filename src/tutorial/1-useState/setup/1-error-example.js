import React, { useState } from 'react';

const ErrorExample = () => {
  const [title, setTitle] = useState('random title')

  const handleClick = () => {
    if(title === 'random title') {
      setTitle('changed title')
    } else {
      setTitle('random title')
    }
  }

  return (
      <>
        <h2>{ title }</h2>
        <button className='btn' onClick={handleClick}>Change Title</button>
      </>
  )
};

export default ErrorExample;
