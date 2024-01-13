import { useState } from "react";

const UseState = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleAsyncIncrement = () => {
    setTimeout(() => {
      setCounter((prvState) => prvState + 1);
    }, 2000);
  };

  console.log("render");
  return (
    <div>
      <h1> {counter}</h1>
      <button className="btn btn-primary gap-2 " onClick={handleIncrement}>
        Incriment
      </button>
      <button
        className="btn btn-primary gap-2 mx-4"
        onClick={handleAsyncIncrement}
      >
        Decrement
      </button>
      <button className="btn btn-primary gap-2  " onClick={() => setCounter(0)}>
        Reset
      </button>
    </div>
  );
};

export default UseState;
