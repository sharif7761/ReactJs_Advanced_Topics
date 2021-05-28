import React from 'react'
import Basic from './tutorial/1-useState/setup/1-error-example'
import Array from './tutorial/1-useState/setup/3-useState-array'
import Object from './tutorial/1-useState/setup/4-useState-object'
import Counter from './tutorial/1-useState/setup/5-useState-counter'
import BasicEffect from './tutorial/2-useEffect/1-useEffect-basics'
import CleanUpEffect from './tutorial/2-useEffect/2-useEffect-cleanup'
import FetchData from './tutorial/2-useEffect/3-useEffect-fetch-data'

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
        <hr/><br/>
        <Counter />
        <hr/><br/><hr/><br/>
        <h1>useEffect Hook</h1>
        <hr/><br/>
        <BasicEffect />
        <hr/><br/>
        <CleanUpEffect />
        <hr/><br/>
        <FetchData />
    </div>
  )
}

export default App
