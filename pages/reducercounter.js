import React, { useRef, useReducer } from 'react';
import styles from '../styles/Home.module.css';

const ReducerCounter = () => {
  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      case 'reset':
        return { count: 0 };
      case 'setvalue':
        return { ...state, count: Number(action.payload) };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const inputEl = useRef();

  function increment() {
    dispatch({ type: 'increment' });
  }
  function decrement() {
    dispatch({ type: 'decrement' });
  }
  function reset() {
    dispatch({ type: 'reset' });
  }
  function setValue(e) {
    e.preventDefault();
    let inputFieldData = inputEl.current.value;
    dispatch({ type: 'setvalue', payload: inputFieldData });
    inputEl.current.value = '';
  }

  return (
    <div>
      <h1>useReducer page</h1>
      <button onClick={increment}>increment</button>
      <p>{state.count}</p>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
      <form action="">
        <input type="text" ref={inputEl} name="countInput" />
        <button onClick={setValue}>set Value</button>
      </form>
    </div>
  );
};

export default ReducerCounter;
