import React from "react";
import { CiShop } from "react-icons/ci";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/StateContext";

const NavBar = () => {

  const { search, setSearch } = useStateContext();

  const handleSearch = (e) => { 
    setSearch(e.target.value)
  }

  return (
    <nav className="flex justify-between items-center px-5 py-2 rounded-lg my-5 bg-primary shadow-md">
      <Link to='/'>
        <div className="flex items-center gap-2">
          <CiShop className="text-4xl text-info" />
          <div className="uppercase text-xl tracking-wider font-semibold text-info">
            mms-shop
          </div>
        </div>
      </Link>

      <div className="flex gap-3 items-center">
        <div className="flex items-center gap-2 bg-secondary text-white px-4 py-2 rounded-3xl cursor-pointer">
          <FaShoppingCart />
          <small>10</small>
        </div>
        <div className="flex items-center gap-2 border-2 rounded-lg px-3 py-2">
          <FaSearch />
          <input
            type="text"
            placeholder="Search..."
            className="outline-none bg-transparent"
            onChange={ handleSearch }
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
