import { useRef, useState } from "react";

const Useref = () => {
  const myRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(myRef.current.value);
  };

  return (
    <div>
      <h1>UseRef</h1>
      <form onSubmit={handleSubmit}>
        <input
          ref={myRef}
          type="text"
          className="border border-red-500"
          name="name"
          id="name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Useref;
