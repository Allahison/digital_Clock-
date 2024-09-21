import React, { useState, useEffect } from "react";


export default function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="digital-clock">
      <div className="time">{time}</div>
      <div className="date">
        {new Date().toLocaleDateString()}
      </div>
    </div>
  );
}


