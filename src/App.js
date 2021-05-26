import React from 'react'
import Basic from './tutorial/1-useState/setup/1-error-example'
import Array from './tutorial/1-useState/setup/3-useState-array'
import Object from './tutorial/1-useState/setup/4-useState-object'

function App() {
  return (
    <div className='container'>
        <h1>useState Hook</h1>
        <hr/><br/>
        <Basic />
        <hr/><br/>
        <Array />
        <hr/><br/>
        <Object />
    </div>
  )
}

export default App
