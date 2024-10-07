import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0); // useState returns a array of state and a function

  const incrementValue = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  const decrementValue = () => {
    if (counter > 0) setCounter(counter - 1);
    else {
      alert("counter value cannot be negative");
    }
    console.log(counter);
  };

  return (
    <>
      <h1>Counter</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={incrementValue}>+</button>
      <br />
      <button onClick={decrementValue}>-</button>
    </>
  );
}

export default App;
