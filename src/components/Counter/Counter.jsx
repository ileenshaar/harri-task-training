import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  let [counter, setCounter] = useState(0);

  return (
    <div className="counterContainer">
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
      <div>{counter}</div>
      <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
    </div>
  );
}

export default Counter;

//prev=>prev+1 the safe way

//setCounter(counter + 1);
//setCounter(counter + 1);
//setCounter(counter + 1);
//You get: +1
//(because each update reads the same old counter value)
