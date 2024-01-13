import { useState } from "react";

const UseStateExample = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  return (
    <form>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        name="name"
        id="name"
        className="border border-2"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        name="email"
        id="email"
      />
      <button className="" type="submit">
        Submit
      </button>
      <h1>{name}</h1>
      <h1>{email}</h1>
    </form>
  );
};

export default UseStateExample;
