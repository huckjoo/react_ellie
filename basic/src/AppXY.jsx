import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }); // 상태를 객체 단위로 보관, 업데이트

  const handleMouseMove = (e) => {
    setMousePosition((prev) => ({ ...prev, x: e.clientX }));
  };
  return (
    <div onMouseMove={handleMouseMove} className='container'>
      <div
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
        className='pointer'
      ></div>
    </div>
  );
}
