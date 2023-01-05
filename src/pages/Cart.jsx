import React, { useEffect, useState } from "react";
import { useStateContext } from "../context/StateContext";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = useStateContext();

  const [total, setTotal] = useState(0);

  const navigate = useNavigate();

  const incresePrice = (price) => {
    setTotal(prev => prev + price)
  }

  const decresePrice = (price) => {
    setTotal(prev => prev - price)
  }

  const checkOutHandler = () => {
    dispatch({ type: "CART_EMPTY" });
    navigate("/");
  };

  useEffect(() => {
    setTotal(cart.reduce((a, c) => a + c.price, 0));
  }, [cart]);

  return (
    <>
      {cart.length > 0 ? (
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-2">
            <div className="flex flex-col gap-3 ">
              {cart?.map((item) => (
                <CartItem item={item} key={item.id} incresePrice={incresePrice} decresePrice={decresePrice} />
              ))}
            </div>
          </div>

          <div className="col-span-1">
            <div className="bg-gray-50 p-10 rounded-lg shadow-lg">
              <div className="text-info text-bold my-3">
                Total Price - ${total.toFixed(2)}
              </div>
              <button className="btn-primary" onClick={checkOutHandler}>
                Checkout
              </button>
            </div>
          </div>

          <div className="col-span-3 text-center">
            <button
              className=" text-danger font-semibold"
              onClick={() => dispatch({ type: "CART_EMPTY" })}
            >
              Empty Cart
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full h-[100vh] flex flex-col items-center justify-center gap-4">
          <div className="text-xl text-danger font-semibold ">
            Your Cart is Empty
          </div>
          <Link to={"/"}>
            <button className="btn-secondary">Go Shopping</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
