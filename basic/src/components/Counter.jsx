import React, { useState } from 'react';

export default function Counter({ getTotalCount, totalCount }) {
  const [count, setCount] = useState(0);

  return (
    <div className='counter'>
      <span className='number'>
        {count} / {totalCount}
      </span>
      <button
        className='button'
        onClick={() => {
          setCount(count + 1);
          getTotalCount((prev) => prev + 1);
        }}
      >
        Add +
      </button>
    </div>
  );
}
