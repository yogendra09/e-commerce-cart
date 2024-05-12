import { deleteFromCart, updateCart } from "@/store/Reducers/cartReducer";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

const CartProduct = ({ image, title, price, quantity, product }) => {
  const {items} = useSelector((state)=>state.cartReducer);
  const dispatch = useDispatch();
  const updateCartProduct = (e, item) => {
    dispatch(updateCart({ ...item, quantity: e }));
  };
  return (
    <>
      <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
        <img
          src={image}
          alt="product-image"
          className="w-full rounded-lg sm:w-40"
        />
        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div className="mt-5 sm:mt-0">
            <h2 className="text-lg font-bold text-gray-900">{title}</h2>
            <p className="mt-1 text-xs text-gray-700">{price}</p>
          </div>
          <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div className="flex items-center border-gray-100">
              
              <select
              value={quantity}
                onChange={(e) => updateCartProduct(e.target.value, product)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
              
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-sm">{price * quantity}</p>
              <IoCloseOutline onClick={()=>{
                // dispatch(deleteFromCart(items,product))
              }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
