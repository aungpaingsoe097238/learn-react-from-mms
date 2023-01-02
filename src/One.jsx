import React from "react";
import { useStateContext } from "./context/StateContext";
const One = () => {
  const { state, dispatch } = useStateContext();
  return (
    <div>
      <div className=" text-2xl ">{state}</div>
      <button className="btn-primary" onClick={() => dispatch("inc")}>
        Plus
      </button>
      <button className="btn-primary" onClick={() => dispatch("dec")}>
        Mine
      </button>
    </div>
  );
};

export default One;
