import { createContext, useContext, useEffect, useReducer } from "react";
import "../api.js"
import getData from "../api.js";

const StateContext = createContext();
export const StateContextProvider = ({ children }) => {
  const inititalState = {
    productLists: []
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "GET_PRODUCTS":
        return { ...state, productLists: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, inititalState);

  const getProducts = async() => {
    const data = await getData('products')
    dispatch({type:'GET_PRODUCTS', payload: data})
  }

  useEffect(()=>{
    getProducts()
  },[])

  const data = {state};
  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext);
