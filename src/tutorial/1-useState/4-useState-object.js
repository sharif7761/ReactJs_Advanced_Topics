import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Sharif",
    age: 24,
    message: "software engineer",
  })

  // or use multiple useState for each of them
  const [name, setName] = useState("Ahmed")
  const [age, setAge] = useState(23)
  const [message, setMessage] = useState("React Developer")

  const changeMessage = () => {
    setPerson({...person, message: 'Dreamer'})
    setMessage('Laravel Developer')
  }

  return (
      <>
        <h3>{person.name}</h3>
        <h3>{person.age}</h3>
        <h3>{person.message}</h3>
        <h3>{name}</h3>
        <h3>{age}</h3>
        <h3>{message}</h3>
        <button className='btn' onClick={changeMessage}>Change message</button>
      </>
  )
};

export default UseStateObject;
