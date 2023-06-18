import React, { useState, useEffect } from 'react';


const TimerContainer = ({ seconds, refresh, Render }) => {
 
  const [count, setCount] = useState(seconds);

  useEffect(() => {
    const startTime = performance.now();
    const interval = setInterval(() => {
      const differenceStartAndNow = Math.floor((performance.now() - startTime) / 1000);
      setCount(count => count - differenceStartAndNow);
    }, refresh);

    return () => {
      clearInterval(interval);
    };
  }, [count, refresh]);

  return (
    <div className='form-container'>
       <Render seconds={count} />
    </div>
  )
};

export default TimerContainer;


