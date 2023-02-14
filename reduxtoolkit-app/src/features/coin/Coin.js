import React from 'react';
import { useSelector } from 'react-redux';

function Coin() {
  const count = useSelector((state) => state.counter.count);
  return (
    <div>
      <h2>this is coin component {count}</h2>
    </div>
  );
}

export default Coin;
