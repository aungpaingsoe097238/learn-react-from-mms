import { createContext, useContext, useState } from "react";

export const StateContext = createContext();

const StateContextProvider = ({ children }) => {
  const name = "mg mg";
  const [count, setCount] = useState(0);
  const inc = () => setCount((pre) => pre + 1);
  const dec = () => setCount((pre) => pre - 1);
  const data = { name, count, inc, dec };
  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext);
export default StateContextProvider;
