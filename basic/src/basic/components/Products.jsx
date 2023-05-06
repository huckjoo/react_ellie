import React, { useState } from 'react';
import useProducts from '../../hooks/use-products.jsx'

export default function Products() {
  const [checked, setChecked] = useState(false);
  const [loading, error, products] = useProducts({salesOnly: checked});
  const handleChange = () => setChecked((prev) => !prev);

  

  if(loading){
    return  <h3>로딩중...🤫</h3>
  }

  if(error) return <h3>{error}</h3>

  return (
    <>
    <input
        id='checkbox'
        type='checkbox'
        value={checked}
        onChange={handleChange}
      ></input>
      <label htmlFor='checkbox'>Show Only 🔥 Sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul> 
    </>
  );
}
