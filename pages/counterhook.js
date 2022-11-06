import Head from 'next/head';
import styles from '../styles/Home.module.css';
import useCounter from '../hooks/useCounter.js';
import { useRef } from 'react';

const CounterHook = () => {
  const [increment, decrement, count, reset, setValue] = useCounter();

  const inputEl = useRef();
  const addValue = (e) => {
    e.preventDefault();
    setValue(Number(inputEl.current.value));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Custom counter hook</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the custom counter hook</h1>

        <div>
          {' '}
          <button onClick={increment}>increment</button>
          <p>{count}</p>
          <button onClick={decrement}>decrement</button>
          <button onClick={reset}>reset</button>
          <form action="">
            <input type="text" ref={inputEl} />
            <button onClick={addValue}>set Value</button>
          </form>
        </div>
      </main>
    </div>
  );
};
export default CounterHook;
