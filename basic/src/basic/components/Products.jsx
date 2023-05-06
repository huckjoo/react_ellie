import React, { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const handleChange = () => setChecked((prev) => !prev);

  useEffect(() => {
    setIsLoading(true);
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
    .then((response) => {
        return response.json()})
      .then((data) => {
        setIsLoading(false);
        setProducts(data);
      }).catch(()=>{
        setIsLoading(false);
        setIsError(true)
      })
      ;
    // unmount 될 때 호출하는 함수
    return () => {
      console.log('🧹 청소하는 일');
    };
  }, [checked]);

  return (
    <>
    {isError && <h3>ERROR 발생!</h3>}
    {!isError && isLoading && <h3>로딩중...🤫</h3>}
    {!isError && !isLoading && <><input
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
      </ul> </>}
    </>
  );
}
