import { createContext, useContext, useReducer, useState } from "react";

export const StateContext = createContext();

const StateContextProvider = ({ children }) => {
  const initialSate = 0;
  const reducer = (state, action) => {
    switch (action) {
      case "inc":
        return state + 1;
      case "dec":
        return state - 1;
      case "reset":
        return initialSate;
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialSate)
  const data = {state, dispatch}
  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext);
export default StateContextProvider;
