"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const Hero = () => {
  const [products, setproducts] = useState([]);
  const router = useRouter();
  const {isAuthenticated} = useSelector((state)=>state.userReducer);
  const getData = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    setproducts(data.products);
    console.log(data.products);
  };

  useEffect(() => {
    if(!isAuthenticated){
      router.push('/login');
    }
    getData();
  }, [isAuthenticated]);

  return (
    <div>
      <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Our featured items
            </h2>
            <p className="mt-4 text-base font-normal leading-7 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              faucibus massa dignissim tempus.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-3">
            {products &&
              products.map((product) => {
                return (
                  <Link href={`/auth/product/`+ product.id} key={product.id}>
                    <ProductCard
                      title={product.title}
                      price={product.price}
                      image={product.images[0]}
                    />
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
