import React, { useState } from "react";

const now = new Date().toLocaleTimeString();

function App() {
  setInterval(updateTime, 1000);

  const [time, setTime] = useState(now);

  function updateTime() {
    var newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
