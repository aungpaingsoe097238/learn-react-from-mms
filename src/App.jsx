import "./index.css";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import NavBar from "./components/NavBar";
import Loading from "./components/Loading";
import { useStateContext } from "./context/StateContext";
import ProductDetail from "./components/ProductDetail";

function App() {
  const { loading } = useStateContext();
  return (
    <div className=" container mx-auto ">
      <NavBar />
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<Products />}></Route>
          <Route path="/detail/:id" element={<ProductDetail />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
