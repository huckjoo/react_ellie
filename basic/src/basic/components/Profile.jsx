import React from 'react';
import Avatar from './Avatar';

export default function Profile({ image, name, title, isNewbie }) {
  return (
    <div className='profile'>
      <Avatar image={image} isNewbie={isNewbie} />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}
