import React, { useReducer } from 'react'
import { reducer } from './reducer';

const UseReducer2 = () => {

  const [state, dispatch] = useReducer(reducer, {name:'Saipul', count: 0}) 
    return (
    <div>
        <h1>UseReducer</h1>
        <h2>{state.name}</h2>
        <h2>{state.count}</h2>
        <button onClick={() => dispatch({type: 'CHANGE_NAME'})}>Change name</button>
        <button onClick={() => dispatch({type: 'INCREMENT'})}>Increment/tambah</button>
        <button onClick={() => dispatch({type: 'DECREMENT'})}>Decrement</button>
    </div>
    
    )
}


export default UseReducer2;