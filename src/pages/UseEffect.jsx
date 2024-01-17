import { useEffect } from "react";

const UseEffect = () => {
  useEffect(() => {
    console.log("render");
  }, []);

  return <div></div>;
};

export default UseEffect;
