import React, { useState } from 'react';

export default function Counter({ onClick, totalCount }) {
  const [count, setCount] = useState(0);

  return (
    <div className='counter'>
      <p className='number'>
        {count} <span className='total'>/ {totalCount}</span>
      </p>
      <button
        className='button'
        onClick={() => {
          setCount(count + 1);
          onClick();
        }}
      >
        Add +
      </button>
    </div>
  );
}
