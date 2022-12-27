import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  const [mousePosition, setMousePosition] = useState({ left: 0, top: 0 });

  const handleMouseMove = (e) => {
    console.log(e.pageX, e.pageY);
    setMousePosition({ left: e.pageX, top: e.pageY });
  };
  return (
    <div onMouseMove={handleMouseMove} className='container'>
      <div
        style={{ left: mousePosition.left - 15, top: mousePosition.top - 15 }}
        className='pointer'
      ></div>
    </div>
  );
}
