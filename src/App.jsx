import "./index.css";
import { Routes, Route } from "react-router-dom";
import Blogs from "./Blogs";
import Detail from "./Detail";
import CreateBlog from "./CreateBlog";
import EditBlog from "./EditBlog";

function App() {
  return (
    <div className=" container mx-auto">
      <Routes>
        <Route path="/" element={<Blogs />}></Route>
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/edit/:id" element={<EditBlog />} />
      </Routes>
    </div>
  );
}

export default App;
