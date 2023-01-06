import "./index.css";
import { Routes, Route } from "react-router-dom";
import { useGetBlogsQuery } from "./services/blogsApi";

function App() {
  const { data } = useGetBlogsQuery();
  console.log(data);
  return (
    <div className=" container mx-auto">
    </div>
  );
}

export default App;
