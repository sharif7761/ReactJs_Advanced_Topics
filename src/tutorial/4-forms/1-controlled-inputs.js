import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitted')
  }
  return (
      <>
        <article>
          <form className='form' onSubmit={handleSubmit}>
            <div className='form-control'>
              <label htmlFor='name'>Name: </label>
              <input type='text' id='name' name='name'/>
            </div>
            <div className='form-control'>
              <label htmlFor='email'>Email: </label>
              <input type='email' id='email' name='email'/>
            </div>
            <button type='submit'>Add Person</button>
          </form>
        </article>
      </>
  )
};

export default ControlledInputs;
