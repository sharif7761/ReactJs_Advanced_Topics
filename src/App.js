import React from 'react'
import Basic from './tutorial/1-useState/1-error-example'
import Array from './tutorial/1-useState/3-useState-array'
import Object from './tutorial/1-useState/4-useState-object'
import Counter from './tutorial/1-useState/5-useState-counter'
import BasicEffect from './tutorial/2-useEffect/1-useEffect-basics'
import CleanUpEffect from './tutorial/2-useEffect/2-useEffect-cleanup'
import FetchData from './tutorial/2-useEffect/3-useEffect-fetch-data'
import MultipleReturns from './tutorial/3-conditional-rendering/1-multiple-returns'
import ShortCircuit from './tutorial/3-conditional-rendering/2-short-circuit'
import ShowHide from "./tutorial/3-conditional-rendering/3-show-hide";
import ControlledInputs from "./tutorial/4-forms/1-controlled-inputs";
import MultipleInputs from "./tutorial/4-forms/2-multiple-inputs";
import UseRefBasics from "./tutorial/5-useRef/1-useRef-basics";
import ReducerIndex from "./tutorial/6-useReducer/index";

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
        <hr/><br/><hr/><br/>
        <h1>Conditional Rendering</h1><hr/><br/>
        <MultipleReturns />
        <hr/><br/>
        <ShortCircuit />
        <hr/><br/>
        <ShowHide />
        <h1>Form</h1><hr/><br/>
        <h2>Controlled Inputs</h2><hr/><br/>
        <ControlledInputs />
        <h2>MultipleInputs</h2><hr/><br/>
        <MultipleInputs />
        <h2>Use Ref</h2><hr/><br/>
        <UseRefBasics />
        <h2>Use Reducer</h2><hr/><br/>
        <ReducerIndex />


    </div>
  )
}

export default App
