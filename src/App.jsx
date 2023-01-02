import { useReducer } from "react";
import "./index.css";

function App() {
  const initialSate = {
    count: 0
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "inc":
        return { count: state.count + action.payload };
      case "dec":
        return { count: state.count - action.payload };
      case "reset":
        return initialSate;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialSate);

  return (
    <div className=" container mx-auto">
      <div className=" text-2xl ">{state.count}</div>
      <button
        className="btn-primary"
        onClick={() => dispatch({ type: "inc", payload: 1 })}
      >
        increse
      </button>
      <button
        className="btn-primary"
        onClick={() => dispatch({ type: "dec", payload: 1 })}
      >
        decrese
      </button>
      <button
        className="btn-primary"
        onClick={() => dispatch({ type: "reset" })}
      >
        reset
      </button>
      <button
        className="btn-primary"
        onClick={() => dispatch({ type: "inc", payload: 10 })}
      >
        +10
      </button>
      <button
        className="btn-primary"
        onClick={() => dispatch({ type: "dec", payload: 10 })}
      >
        -10
      </button>
    </div>
  );
}

export default App;
