"use client";
import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";

const Cart = () => {
   const [totalPrice, settotalPrice] = useState(0);
  const { items } = useSelector((state) => state.cartReducer);
  useEffect(()=>{
    let total = 0;
   items && items.forEach((item)=>{
      total += item.price * item.quantity;
    })
    settotalPrice(total);
  })
  return (
    <div>
      <div className="min-h-screen bg-gray-100 pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="product-continer rounded-lg md:w-2/3">
            {items &&
              items.map((product,i) => {
                return <CartProduct key={i} price={product.price} image={product.images[0]} title={product.title}  quantity={product.quantity} product={product} />;
              })}
           
          </div>
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">{totalPrice}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-green-700">Free</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">{totalPrice} $</p>
                <p className="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
              Check out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
