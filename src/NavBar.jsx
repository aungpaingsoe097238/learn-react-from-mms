import React from "react";
import { BiRestaurant } from 'react-icons/bi';

const NavBar = () => {
  return (
    <div>
      <div className="flex items-center gap-2 p-3">
        <BiRestaurant className="text-xl " />
        <div className="text-xl">Meals</div>
      </div>
    </div>
  );
};

export default NavBar;
