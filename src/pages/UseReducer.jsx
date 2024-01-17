import { useReducer } from "react";

const initialState = { name: "", email: "" };

const reducer = (currentState, action) => {
  console.log(currentState);
  console.log("===", action);
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };
    case "adddEmail":
      return { ...currentState, email: action.payload };
    case "decrement":
      return;
    default:
      return currentState;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onClick={(e) =>
            dispatch({ type: "addName", playLoad: e.target.value })
          }
          type="text"
          name="name"
          id="name"
          className="border border-2"
        />
        <input
          onChange={(e) =>
            dispatch({ type: "addEmail", playLoad: e.target.value })
          }
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
    </div>
  );
};

export default UseReducer;
