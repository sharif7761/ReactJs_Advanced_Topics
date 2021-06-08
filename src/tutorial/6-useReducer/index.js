import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../data';
const reducer = (state, action) => {
  if(action.type === 'ADD_ITEM'){
    const newItems = [...state.people, action.payload]
    return {
      ...state,
      people: newItems,
      isModalOpen: true,
      modalContent: 'item added'
    }
   }
  if(action.type === 'NO_VALUE') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'please enter value'
    }
  }
  if(action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      isModalOpen: false,
    }
  }
  if(action.type === 'REMOVE_ITEM'){
    const newPeople = state.people.filter((person) =>
    person.id !== action.payload)
    return {...state,people: newPeople}
  }
  throw new Error('no matching action')
}
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
}

const Index = () => {
  const [name, setName] = useState('')
  // const [people, setPeople] = useState(data)
  // const [showModal, setShowModal] = useState(false)
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(name){
      const newItem = {id: new Date().getTime().toString(), name}
      dispatch({type: 'ADD_ITEM', payload: newItem})
    }
    else {
      dispatch({type: 'NO_VALUE'})
    }
  }

  const closeModal = () => {
    dispatch({type: 'CLOSE_MODAL'})
  }

  return (
      <>
        {state.isModalOpen && <Modal  modalContent={state.modalContent}
                                      closeModal={closeModal} />}
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
                <div key={id} className='item'>
                  <h4>{name}</h4>
                  <button onClick={() => dispatch({type:'REMOVE_ITEM', payload:id})}>remove</button>
                </div>
            )
          })
        }
      </>
  )
};

export default Index;
