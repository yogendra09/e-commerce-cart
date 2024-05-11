"use client";
import { addToCart } from "@/store/Reducers/cartReducer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsHandbag } from "react-icons/bs";
import Link from "next/link";
const page = ({ params }) => {
  const dispatch = useDispatch();
  const [product, setproduct] = useState({});
  const [images, setimages] = useState([]);
  const { items } = useSelector((state) => state.cartReducer);
  const getData = async () => {
    const { data } = await axios.get(
      `https://dummyjson.com/products/${params.id}`
    );
    setimages(data.images);
    setproduct(data);
  };

  const addItemToCart = () => {
    console.log(" add to cart");
    product.quantity = 1;
    dispatch(addToCart(product));
  };

  useEffect(() => {
    getData();
  }, [items.length]);

  return (
    <div>
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 lg:px-26">
          <div className=" xl:col-gap-16  grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3 lg:row-end-1">
              <div className="lg:flex lg:items-start lg:justify-center ">
                <div className="lg:order-2 lg:ml-5">
                  <div className="max-w-xl overflow-hidden rounded-lg h-[250px]">
                    <img
                      className="h-full w-full max-w-full object-contain aspect-square"
                      src={images[0]}
                      alt=""
                    />
                  </div>
                </div>

                <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                  <div className="flex flex-row items-start lg:flex-col">
                    <button
                      type="button"
                      className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src={images[1]}
                        alt=""
                      />
                    </button>
                    <button
                      type="button"
                      className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src={images[2]}
                        alt=""
                      />
                    </button>
                    <button
                      type="button"
                      className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src={images[3]}
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
              <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
                {product.title}
              </h1>

              <h2 className="mt-8 text-base text-gray-900">Product Type</h2>
              <div className="mt-3 flex select-none flex-wrap items-center gap-1">
                <label className="">
                  <input type="radio" name="type" className="peer sr-only" />
                  <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                    Powder
                  </p>
                </label>
                <label className="">
                  <input type="radio" name="type" className="peer sr-only" />
                  <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                    Whole Bean
                  </p>
                </label>
                <label className="">
                  <input type="radio" name="type" className="peer sr-only" />
                  <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                    Groud
                  </p>
                </label>
              </div>

              <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                <div className="flex items-end">
                  <h1 className="text-3xl font-bold">$ {product.price}</h1>
                  <span className="text-base">/month</span>
                </div>

                {items.length &&
                items.find((val) => {
                 return val.id === product.id;
                }) ? (
                  <Link
                    href={"/auth/cart"}
                    className="inline-flex gap-4 items-center justify-center rounded-md border-2 border-transparent bg-green-700 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                  >
                    <BsHandbag className="text-2xl" />
                    Added to cart
                  </Link>
                ) : (
                  <button
                    onClick={addItemToCart}
                    type="button"
                    className="inline-flex gap-4 items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                  >
                    <BsHandbag className="text-2xl" />
                    Add to cart
                  </button>
                )}
              </div>

              <ul className="mt-8 space-y-2">
                <li className="flex items-center text-left text-sm font-medium text-gray-600">
                  <svg
                    className="mr-2 block h-5 w-5 align-middle text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      className=""
                    ></path>
                  </svg>
                  Free shipping worldwide
                </li>

                <li className="flex items-center text-left text-sm font-medium text-gray-600">
                  <svg
                    className="mr-2 block h-5 w-5 align-middle text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      className=""
                    ></path>
                  </svg>
                  Cancel Anytime
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
