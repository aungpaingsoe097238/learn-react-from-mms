import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const { title, price, description, image, rating } = product;
  return (
    <div className="w-80 border-2 p-5 rounded-lg shadow-sm hover:shadow-xl transition duration-700">
      <img src={product.image} className="h-[150px] mx-auto my-3" />
      <div className="text-header font-bold tracking-wider my-3">
        {product.title?.substring(0, 25)}
      </div>
      <div className="flex items-center gap-1">
        <AiFillStar className="text-danger" />
        <div className="text-secondary font-semibold">
          {product?.rating?.rate}
        </div>
      </div>
      <div className="text-secondary text-xl my-3">${product.price}</div>
      <div className="flex">
        <button className="btn-primary">Add To Card</button>
        <Link to={`/detail/${product.id}`}>
          <button className="btn-secondary">Detail</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
