import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import "../api.js";
import getData from "../api.js";

const StateContext = createContext();
export const StateContextProvider = ({ children }) => {
  const inititalState = {
    products: [],
    cart: [],
  };

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [productLists, setProductLists] = useState([]);

  const reducer = (state, action) => {
    switch (action.type) {
      case "GET_PRODUCTS":
        return { ...state, products: action.payload };
      case "Add_TO_CART":
        const item = action.payload;
        const isExisted = state.cart.find(c => c.id === item.id);
        if(isExisted){
          return {
            ...state, cart: [...state.cart]
          }
        } else {
          return {
            ...state, cart: [...state.cart, {...item}]
          }
        }
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, inititalState);

  const getProducts = async () => {
    setLoading(true);
    const data = await getData("products");
    data && setLoading(false);
    setProductLists(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_PRODUCTS", payload: productLists });
    const filterProducts = productLists.filter((pd) =>
      pd.title.toLowerCase().includes(search.toLocaleLowerCase())
    );
    dispatch({ type: "GET_PRODUCTS", payload: filterProducts });
  }, [productLists, search]);

  const data = { state, loading, search, setSearch, dispatch };
  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext);
