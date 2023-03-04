import {useState, useRef} from 'react';

export default function StopWatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart(){
    setStartTime(Date.now());
    setNow(Date.now());
    clearInterval(intervalRef.current); 
    // 이미 handleStop에서 clearInterval을 했는데 왜 또 해야하지?
    // 왜냐하면 연속으로 Start 버튼을 두 번 이상 누를 경우 : 여기서 바뀐 intervalRef와 handleStop에서 멈춰줄 intervalRef의 값을 일치시켜야 하기 때문.
    // clearInterval 하면 왜 일치되는가? 모르겠음
    intervalRef.current = setInterval(()=>{
      setNow(Date.now()); // ref에 10ms마다 현재 시간 동기화
    },10)
  } 

  function handleStop(){
    clearInterval(intervalRef.current); // now 값의 업데이트를 멈춤
  }

    let secondsPassed = 0;
    if(startTime != null && now != null){
      secondsPassed = (now - startTime) / 1000;
    }
    return (
      <>
        <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </>
    );
  }


