import { useState } from "react";

const UseStateExample = () => {
  const [user, setUser] = useState({ name: "", email: "" });
  // const [name, setName] = useState();
  // const [email, setEmail] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <form onClick={handleSubmit}>
      <input
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        type="text"
        name="name"
        id="name"
        className="border border-2"
      />
      <input
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        type="email"
        name="email"
        id="email"
      />
      <button className="" type="submit">
        Submit
      </button>
      {/* <h1>{name}</h1> */}
      {/* <h1>{email}</h1> */}
    </form>
  );
};

export default UseStateExample;
