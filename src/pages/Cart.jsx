import React from "react";
import { useStateContext } from "../context/StateContext";
import { AiFillDelete } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = useStateContext();

  const navigate = useNavigate();

  const checkOutHandler = () => {
    dispatch({ type: "CART_EMPTY" });
    navigate("/");
  };

  return (
    <>
      {cart.length > 0 ? (
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-2">
            <div className="flex flex-col gap-3 ">
              {cart?.map((item) => (
                <div key={item.id}>
                  <div className="flex justify-between items-center border-3 shadow-lg rounded-lg py-3 px-3">
                    <div className="flex items-center gap-2">
                      <img
                        src={item?.image}
                        className=" h-20 rounded-lg shadow-lg "
                        alt=""
                      />
                      <div>
                        <div className="text-info font-bold">{item?.title}</div>
                        <div className="text-secondary text-sm">
                          $({item?.price})
                        </div>
                        <div>{item?.qty}</div>
                      </div>
                    </div>

                    <button
                      className=" text-danger text-2xl "
                      onClick={() =>
                        dispatch({ type: "REMOVE_FROM_CART", payload: item })
                      }
                    >
                      <AiFillDelete></AiFillDelete>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-1">
            <div className="bg-gray-50 p-10 rounded-lg shadow-lg">
              <div className="text-info text-bold my-3">
                Total Price - $1000
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
