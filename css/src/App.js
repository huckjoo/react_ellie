import './App.css';
import Button1 from './components/Button1';
import Button2 from './components/Button2'; // 이 순서에 따라 후순위로 덮어쓰여진게 적용됨

function App() {
  return (
    <>
      <Button1></Button1>
      <Button2></Button2>
    </>
  );
}

export default App;
