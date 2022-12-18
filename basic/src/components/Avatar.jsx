import React from 'react';

export default function Avatar({ isNewbie, image }) {
  return (
    <div className='avatar'>
      {isNewbie && <div className='newbie'>new</div>}
      <img className='photo' src={image} alt='avatar' />
    </div>
  );
}
