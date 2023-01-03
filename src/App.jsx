import "./index.css";
import { Routes, Route } from "react-router-dom";
import Projects from "./pages/projects";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className=" container mx-auto ">
      <NavBar/>
      <Routes>
        <Route path="/" element={ <Projects/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
