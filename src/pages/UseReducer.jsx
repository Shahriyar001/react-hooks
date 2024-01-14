import { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (currentState, action) => {
  switch (action.type) {
    case "increment":
      return { count: currentState.count + 1 };
    case "decrement":
      return { count: currentState.count - 1 };
    default:
      return currentState;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => dispatch({ type: "increment" })}
        className="btn btn-primary"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "decrement" })}
        className="btn btn-primary mx-2"
      >
        Decrement
      </button>
    </div>
  );
};

export default UseReducer;
