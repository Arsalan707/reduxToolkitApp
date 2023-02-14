import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+ 1</button>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrement())}>- 1</button>
    </div>
  );
}

export default Counter;
