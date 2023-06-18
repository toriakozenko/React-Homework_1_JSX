
import React, { useState, useEffect } from 'react';

const Timer = ({ sec }) => {
  const [count, setCount] = useState(sec);
  const [ButtonWithPaused, setButtonWithPaused] = useState(false);

  useEffect(() => {
    let timer;

    if (!ButtonWithPaused && count > 0) {
      timer = setInterval(() => {
        setCount(count => count - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
    
  }, [count, ButtonWithPaused]);

  const handlePauseClick = () => {
    setButtonWithPaused(ButtonWithPaused => !ButtonWithPaused);
  };

  const formatTime = time => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return (
      `${hours} : ${minutes} : ${seconds}`
    )
  };

  return (
    <div className='form-container'>
      <div>{formatTime(count)}</div>
      <button onClick={handlePauseClick}>{ButtonWithPaused ? 'Відновити' : 'Пауза'} </button>
    </div>
  );
};


export default Timer;
