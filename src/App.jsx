import "./index.css";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className=" container mx-auto ">
      <NavBar/>
      <Routes>
        <Route path="/" element={ <Products/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
