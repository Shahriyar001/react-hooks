import { useState } from "react";

const UseState = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((prvStatus) => prvStatus + 1);
    setCounter((prvStatus) => prvStatus + 1);
    setCounter((prvStatus) => prvStatus + 1);
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
        onClick={() => setCounter((prvStatus) => prvStatus - 1)}
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
