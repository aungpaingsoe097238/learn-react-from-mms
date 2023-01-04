import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="flex justify-center">
      <div className="">
        <div className="text-4xl font-semibold tracking-wider my-5 text-info">
          Thanks For Purchasing
        </div>
        <Link to="/">
          <button className="btn-primary">Go Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
