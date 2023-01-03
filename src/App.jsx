import "./index.css";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import NavBar from "./components/NavBar";
import Loading from "./components/Loading";
import { useStateContext } from "./context/StateContext";

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
        </Routes>
      )}
    </div>
  );
}

export default App;
