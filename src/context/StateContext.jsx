import { createContext, useContext } from "react";

const StateContext = createContext();
export const StateContextProvider = ({children}) => {
    const name = "JOne"
    const data = { name }
    return (
        <StateContext.Provider value={data}>
            { children }
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);

