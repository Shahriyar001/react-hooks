import { useRef, useState } from "react";

const Useref = () => {
  const [count, setCount] = useState(0);
  const myRef = useRef(0);

  const increment = () => {
    myRef.current = myRef.current + 1;
    setCount(count + 1);
  };

  return (
    <div>
      <h1>UseRef</h1>
      <button onClick={() => increment()} className="btn btn-primary">
        {myRef.current}
      </button>
    </div>
  );
};

export default Useref;
