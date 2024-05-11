"use client";
import { addUser } from "@/store/Reducers/userReducer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.userReducer);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(addUser({ email, password }));
    setemail("");
    setpassword("");
    router.push("/");
  };

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated]);

  return (
    <div>
      <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700">
        <h1 className="font-bold text-2xl">Register :)</h1>
        <form
        onSubmit={submitHandler}
          className="flex flex-col bg-white rounded shadow-lg p-12 mt-12"
          action=""
        >
          <label className="font-semibold text-xs">Username or Email</label>
          <input
           value={email}
           onChange={(e)=>{setemail(e.target.value)}}
            className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
            type="text"
          />
          <label className="font-semibold text-xs mt-3">Password</label>
          <input
           value={password}
           onChange={(e)=>{setpassword(e.target.value)}}
            className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
            type="password"
          />
          <button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">
            register
          </button>
          <div className="flex mt-6 justify-center text-xs">
            <a className="text-blue-400 hover:text-blue-500" href="#">
              Forgot Password
            </a>
            <span className="mx-2 text-gray-300">/</span>
            <Link className="text-blue-400 hover:text-blue-500" href="/login">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
