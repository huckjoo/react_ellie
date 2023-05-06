import { useEffect, useState } from 'react';

export default function useProducts({salesOnly}){
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(undefined); // 에러가 있을 수 있으니까 초기화
    fetch(`data/${salesOnly ? 'sale_' : ''}products.json`)
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
  }, [salesOnly]);

  return [loading, error, products];
}
