import { useEffect, useState } from "react";

const UseEffect = () => {
  const [hidden, setHidden] = useState(false);
  const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     setInterval(() => {
  //       console.log(count);
  //       //   setCount(count);
  //     }, 1000);
  //   }, [count]);

  return (
    <div>
      {/* <button
        onClick={() => setHidden((prev) => !prev)}
        className="btn bnt-primary"
      >
        Click
      </button> */}
      <h1>{count}</h1>
    </div>
  );
};

export default UseEffect;
