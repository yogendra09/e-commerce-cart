import Link from "next/link";
import React from "react";
import { GiShoppingCart } from "react-icons/gi";

const Nav = () => {
  return (
    <div className="">
      <nav className="flex items-center justify-between h-16 lg:h-20 px-[10px]">
        <div className="flex-shrink-0">
          <Link href="/"  className="flex">
            <img
              className="w-auto h-8 lg:h-10"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
              alt=""
            />
          </Link>
        </div>

        <Link href={"/auth/cart"}
          type="button"
          className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
        >
          <GiShoppingCart className="text-black text-2xl" />
        </Link>

        <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
          <a
            href="#"
            title=""
            className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
          >
            {" "}
            Features{" "}
          </a>

          <a
            href="#"
            title=""
            className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
          >
            {" "}
            Solutions{" "}
          </a>

          <a
            href="#"
            title=""
            className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
          >
            {" "}
            Resources{" "}
          </a>

          <a
            href="#"
            title=""
            className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
          >
            {" "}
            Pricing{" "}
          </a>
        </div>

        <Link
          href="/auth/cart"
          className="items-center justify-center hidden  py-3 ml-10 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md lg:inline-flex"
        >
          <GiShoppingCart className="text-black text-2xl" />
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
