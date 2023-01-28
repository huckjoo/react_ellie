import React from 'react';

export default function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avatar
          image='https://images.unsplash.com/photo-1548858806-e064cf9872c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGF0dHJhY3RpdmUlMjB3b21hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
          name='Olivia'
          size={200}
        ></Avatar>
        <p>안녕하세요!</p>
      </Navbar>
    </div>
  );
}

function Navbar({ children }) {
  return <header style={{ backgroundColor: 'yellow' }}>{children}</header>;
}

function Avatar({ image, name, size }) {
  return (
    <div>
      <img
        src={image}
        alt={`${name}`}
        width={size}
        height={size}
        style={{ borderRadius: '50%' }}
      />
    </div>
  );
}
