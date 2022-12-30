import React, { useRef } from "react";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [query, setQuery] = useSearchParams();
  const formRef = useRef();

  const handleSearch = (e) => {
    e.preventDefault()
    setQuery({ name : formRef.current[0].value , age : formRef.current[1].value })
  };

  const handleGet = () => {
    console.log(query.get('name'),query.get('age'))
  }

  return (
    <div>
      Home
      <form ref={formRef}>
        <input type="text" name="name" />
        <input type="number" name="age" />
        <button onClick={handleSearch}>Search</button>
      </form>
      <button onClick={handleGet}>GetData</button>
    </div>
  );
};

export default Home;
