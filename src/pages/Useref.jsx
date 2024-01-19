import { useEffect, useRef, useState } from "react";
import CustomInput from "../Componant/CustomInput";

const Useref = () => {
  const myRef = useRef(null);

  useEffect(() => {
    myRef?.current?.focus();
  }, []);
  return (
    <div>
      <h1>UseRef</h1>
      <form>
        <CustomInput className="border border-blue-500" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Useref;
