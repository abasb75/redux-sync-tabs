import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import React from 'react';
import { State } from './store/initialState';

import { increment, decrement } from "./store/slices/counterSlice";
import { toggle } from "./store/slices/darkSlice";

function App() {
  const counter = useSelector((state:State)=>state.counter);
  const dark = useSelector((state:State)=>state.dark);

  const dispatch = useDispatch();
  return (<>
    <div className='flex'>
      <h1
      style={{color:dark.state?'black':'red'}}
      onClick={()=>dispatch(toggle())}
      >{counter.value}</h1>
      <div>
        <button onClick={()=>dispatch(increment())}>counter +</button>
        <button onClick={()=>dispatch(decrement())}>counter -</button>
      </div>
    </div>
  </>);
}

export default App;
