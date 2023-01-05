import React, { useState } from "react";
import {
  AiFillDelete,
  AiFillPlusSquare,
  AiFillMinusSquare
} from "react-icons/ai";
import { useStateContext } from "../context/StateContext";

const CartItem = ({ item , incresePrice , decresePrice }) => {
  const { dispatch } = useStateContext();
  const [qty, setQty] = useState(1);

  const increseQty = () => {
    setQty((prev) => prev + 1);
    incresePrice(item.price + 1)
  };

  const decreseQty = () => {
    if (qty > 1) {
      setQty((prev) => prev - 1);
      decresePrice(item.price - 1)
    }
  };

  const removeItemHandler = () => {
    decresePrice( item.price * qty )
    dispatch({ type: "REMOVE_FROM_CART" , payload: item })
  }

  return (
    <div>
      <div className="flex justify-between items-center border-3 shadow-lg rounded-lg py-3 px-3">
        <div className="flex items-center gap-2">
          <img
            src={item?.image}
            className=" h-20 rounded-lg shadow-lg "
            alt=""
          />
          <div className="flex flex-col gap-2">
            <div className="text-info font-bold">{item?.title}</div>
            <div className="text-secondary text-xs font-semibold">
              $({item?.price * qty})
            </div>
            <div className="flex items-center gap-2 ">
              <AiFillMinusSquare
                className="text-2xl cursor-pointer text-danger"
                onClick={decreseQty}
              />
              {qty}
              <AiFillPlusSquare
                className="text-2xl cursor-pointer text-danger"
                onClick={increseQty}
              />
            </div>
          </div>
        </div>

        <button
          className=" text-danger text-2xl "
          onClick={ removeItemHandler }
        >
          <AiFillDelete></AiFillDelete>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
