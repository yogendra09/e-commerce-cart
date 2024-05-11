import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";
import { SlSocialTwitter } from "react-icons/sl";
import { MdAddIcCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <div data-scroll data-scroll-speed='-0.2' className="main w-full  lg:px-10 py-10 ">
      <div className="div  flex flex-col lg:flex-row items-center  justify-around gap-10 lg:gap-0">
        <div className="first w-full lg:w-fit flex flex-col justify-center items-center capitalize gap-5">
          <div className="logo text-center">
            <h1 className="font-bold text-xl">your logo</h1>
          </div>
          <h1 className="font-medium text-lg mt-3">subscribe now</h1>
          <div className="input flex gap-1 border-b-[1px] border-black">
            <i className="ri-mail-fill"></i>
            <input className="outline-none p-1" type="email" placeholder="enter your mail" />
          </div>
          <button className="bg-black text-white rounded-xl px-5 py-2 capitalize">
            subscribe
          </button>
        </div>

        <div className="middle w-full lg:w-fit flex justify-center gap-6 lg:gap-20 lg:flex-row pl-1">
          <div className="one capitalize">
            <h1 className="text-lg lg:text-2xl font-semibold">information</h1>
            <div className="links capitalize opacity-50 gap-1 font-medium mt-5 flex flex-col">
              <a href="">about us</a>
              <a href="">more search</a>
              <a href="">blog</a>
              <a href="">testimonials</a>
              <a href="">events</a>
            </div>
          </div>

          <div className="three capitalize">
            <h1 className="text-lg lg:text-2xl font-semibold">our services</h1>
            <div className="links capitalize opacity-50 gap-1 font-medium mt-5 flex flex-col">
              <a href="">brand list</a>
              <a href="">order</a>
              <a href="">exchange</a>
              <a href="">fashion list</a>
              <a href="">blog</a>
            </div>
          </div>
        </div>
        <div className="end flex flex-col gap-7">
          <h1 className="text-lg lg:text-2xl font-semibold text-center lg:text-start capitalize">
            contact Me
          </h1>
          <div className="div lg:text-start text-center text-lg opacity-50">
            <h1 className="flex items-center justify-center lg:justify-start gap-3">
            <MdAddIcCall className="mb-[-4px]" />
             +91 7999356540</h1>
            <h1 className="flex items-center gap-5">
              <MdEmail className="mb-[-8px]" />
              yogendrayadav09@yahoo.coom</h1>
          </div>
          <div className="icons flex gap-3 justify-center lg:justify-start mt-3">
            <a href="">
              <SlSocialTwitter className="text-2xl" />
            </a>
            <a href="">
              <IoLogoInstagram className="text-2xl" />
            </a>
            <a href="">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="">
              <FaGithub className="text-2xl" />
            </a>
            <a href="">
              <IoLogoWhatsapp className="text-2xl"  />
            </a>
          </div>
        </div>
      </div>
      <div className="line w-full h-[1.5px] bg-gray-100 mt-10 opacity-50"></div>
      <div className="text flex justify-between text-xs mt-3 px-5">
        <h1 className="w-[100px] lg:w-fit">2018 company.Ltd.|All Right reserved</h1>
        <div className="div flex gap-2">
          <a href="">FAQ</a>
          <a href="">Privacy</a>
          <a href="">Terms & Conditions</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

