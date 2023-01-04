import React from "react";
import { useStateContext } from "../context/StateContext";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = useStateContext();
  return (
    <div>
      {cart?.map((item) => (
        <div key={item.id} className="flex items-center gap-4">
          <img
            src={item?.image}
            className=" h-32 rounded-lg shadow-lg "
            alt=""
          />
          <div>
            <div>{item?.title}</div>
            <div>{item?.price}</div>
            <div>{item?.qty}</div>
            <button
              className=" text-danger "
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
  );
};

export default Cart;
