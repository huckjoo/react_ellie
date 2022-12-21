import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

export default function AppCounter() {
  const [totalCount, setTotalCount] = useState(0);

  const getTotalCount = (number) => {
    setTotalCount(number);
  };

  return (
    <div className='container'>
      <div className='banner'>
        Total Count: {totalCount} {totalCount > 10 ? '🔥' : '❄️'}
      </div>
      <div className='counters'>
        <Counter getTotalCount={getTotalCount} totalCount={totalCount} />
        <Counter getTotalCount={getTotalCount} totalCount={totalCount} />
      </div>
    </div>
  );
}
