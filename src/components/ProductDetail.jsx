import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../api.js";
import getData from "../api.js";
import { AiFillStar } from "react-icons/ai";
import { useStateContext } from "../context/StateContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const { dispatch } = useStateContext();

  const getProductDetail = async () => {
    setProduct(await getData(`products/${id}`));
  };

  const getProductByCat = async () => {
    const data = await getData(`products/category/${product.category}`);
    const filterData = data?.filter((item) => item.id !== product.id);

    setProducts(filterData);
  };

  useEffect(() => {
    getProductDetail();
    getProductByCat();
  }, [product]);

  return (
    <div className="">
      {/* Show Product */}
      <div className="flex my-20 gap-5 items-start">
        <img
          src={product.image}
          className=" h-96 border-2 shadow-lg p-10 rounded-lg "
          alt=""
        />
        <div className="flex gap-5 mt-4 flex-col">
          <div className="bg-secondary text-primary px-2 py-1 text-xs rounded-full text-center w-36 ">
            {product?.category}
          </div>
          <div className="text-2xl font-semibold text-header">
            {product.title}
          </div>
          <div>
            <div className="text-header">Description</div>
            <div className="text-secondary tracking-wider leading-6">
              {product.description}
            </div>
          </div>
          <div className="flex items-center gap-2 text-danger">
            <AiFillStar />{" "}
            <small className="text-secondary font-bold">
              ({product?.rating?.rate})
            </small>
          </div>
          <div className="text-header text-xl font-semibold">
            ${product.price}
          </div>
          <div>
            <button
              className="btn-primary"
              onClick={() =>
                dispatch({ type: "Add_TO_CART", payload: product })
              }
            >
              Add To Cart
            </button>
            <Link to="/success">
              <button className="btn-secondary">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
      {/* Category Products */}
      <div className="my-20">
        <div className="text-2xl font-semibold text-header">
          You may also like
        </div>
        <div className="flex flex-wrap gap-7">
          {products?.map((product) => (
            <div key={product.id}>
              <img
                src={product?.image}
                className=" h-52 shadow-lg p-5 rounded-lg"
              />
              <div className="text-secondary font-semibold mt-1">
                ${product?.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
