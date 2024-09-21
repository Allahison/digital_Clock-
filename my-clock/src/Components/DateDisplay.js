import React, { useState, useEffect } from "react";

function DateDisplay() {
  const [date, setDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date().toLocaleDateString());
    }, 60000); // Update every minute

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="date-display">
      <h2>{date}</h2>
    </div>
  );
}

export default DateDisplay;
