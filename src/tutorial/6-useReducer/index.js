import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../data';
const reducer = (state, action) => {
}
const defaultState = {
  people: data,
  isModalOpen: true,
  modalContent: 'hello',
}

const Index = () => {
  const [name, setName] = useState('')
  // const [people, setPeople] = useState(data)
  // const [showModal, setShowModal] = useState(false)
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(name){

    }
    else {

    }
  }

  return (
      <>
        {state.isModalOpen && <Modal modalContent='hello' />}
        <form onSubmit={handleSubmit} className='form'>
          <div>
            <input type='text'
                   value={name}
                   onChange={(e) => setName(e.target.value)} />
          </div>
          <button type='submit' className='btn'>add</button>
        </form>
        {
          state.people.map((person) => {
            const {id, name} = person
            return (
                <div key={id}>
                  <h4>{name}</h4>
                </div>
            )
          })
        }
      </>
  )
};

export default Index;
