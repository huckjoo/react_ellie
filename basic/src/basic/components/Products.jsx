import React, { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const handleChange = () => setChecked((prev) => !prev);

  useEffect(() => {
    setLoading(true);
    setError(undefined); // 에러가 있을 수 있으니까 초기화
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
    .then((response) => {
        return response.json()})
      .then((data) => {
        setLoading(false);
        setProducts(data);
      }).catch(()=>{
        setError("에러 발생!!")
      }).finally(()=>{
        setLoading(false);
      })
      ;
    // unmount 될 때 호출하는 함수
    return () => {
      console.log('🧹 청소하는 일');
    };
  }, [checked]);

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
