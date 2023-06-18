import { useState } from "react";
import Timer from "./Timer";

function TimerControl() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [startTimer, setStartTimer] = useState(false);

  function toggleContentHandler(){
    setStartTimer(true);
  }

  function getTimeInSeconds(){
    const hoursInSeconds = +hours * 3600;
    const minutesInSeconds = +minutes * 60;

    return hoursInSeconds + minutesInSeconds + +seconds;
  }


  return ( 
    <div className="form-container">
      <span>Enter hours:</span>
      <input value={hours} onChange={(e) => setHours(e.target.value)} type="number" />

      <span>Enter minutes:</span>
      <input value={minutes} onChange={(e) => setMinutes(e.target.value)} type="number" />

      <span>Enter seconds:</span>
      <input value={seconds} onChange={(e) => setSeconds(e.target.value)} type="number" />

      <button onClick={toggleContentHandler}>Start</button>
      <div>{startTimer && <Timer sec={getTimeInSeconds()} />}</div>
    </div>
  );
}

export default TimerControl;



