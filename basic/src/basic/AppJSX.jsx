import './App.css';

function AppJSX() {
  const name = '디크론';
  const list = ['우유', '딸기', '바나나', '메론'];
  return (
    <>
      <h1 className='orange'>{`Hello! ${name}`}</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img
        style={{ width: '200px', height: '200px' }}
        src='https://images.unsplash.com/photo-1660315999670-1d5beab50d96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80'
        alt='whale'
      />
    </>
  );
}

export default AppJSX;
