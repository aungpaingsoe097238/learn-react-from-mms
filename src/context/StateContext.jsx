import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState
} from "react";
import "../api.js";
import getData from "../api.js";

const StateContext = createContext();
export const StateContextProvider = ({ children }) => {
  const inititalState = {
    productLists: []
  };

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const reducer = (state, action) => {
    switch (action.type) {
      case "GET_PRODUCTS":
        return { ...state, productLists: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, inititalState);

  const getProducts = async () => {
    setLoading(true);
    const data = await getData("products");
    dispatch({ type: "GET_PRODUCTS", payload: data });
    data && setLoading(false)
  };

  useEffect(() => {
    getProducts();
  }, []);

  const data = { state, loading, search, setSearch };
  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext);
