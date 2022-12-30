import "./index.css";
import { Routes, Route } from "react-router-dom";
import Meals from "./Meals";
import Detail from "./Detail";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="container mx-auto">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Meals />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
