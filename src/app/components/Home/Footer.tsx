import React from 'react'
import { FaDribbble, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-950">
      <div
        className="w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2
    lg:grid-cols-4 gap-10"
      >
        {/* { 1st part} */}
        <div>
          <div className="text-white font-bold text-3xl">LOGO</div>
          <p className="mt-5 font-semibold text-gray-300 text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
            iusto quos quae! Inventore, rem doloremque?
          </p>
          {/* { Social links } */}
          <div className="flex items-center text-white space-x-4 mt-6">
            <div className="w-8 h-8 bg-blue-700 flex items-center justify-center flex-col rounded-full">
              <FaFacebook />
            </div>
            <div className="w-8 h-8 bg-sky-500 flex items-center justify-center flex-col rounded-full">
              <FaTwitter />
            </div>
            <div className="w-8 h-8 bg-pink-700 flex items-center justify-center flex-col rounded-full">
              <FaDribbble />
            </div>
            <div className="w-8 h-8 bg-rose-700 flex items-center justify-center flex-col rounded-full">
              <FaYoutube />
            </div>
          </div>
        </div>
        {/* { 2nd part } */}
        <div className="space-y-5">
          <h1 className="text-lg text-white font-bold ">Company</h1>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            About Us
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Services
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Our Customer
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Portfolio
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Blogs
          </p>
        </div>
        {/* { 3rd part } */}
        <div className="space-y-5">
          <h1 className="text-lg text-white font-bold ">Support</h1>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Legal Information
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Privacy Policy
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Terms & Conditions
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Report Abuse
          </p>
        </div>
        {/* { 4th part } */}
        <div>
          <h1 className="text-lg text-white font-bold">Get In Touch</h1>
          <div className="mt-6">
            <h1 className="text-sm text-white">Our Mobile Number</h1>
            <h1 className="text-base font-bold text-white mt-1">
              +12343 54567{" "}
            </h1>
          </div>

          <div className="mt-6">
            <h1 className="text-sm text-white">Our Address</h1>
            <h1 className="text-base font-bold text-white mt-1">
              Dhaka,Bangladesh
            </h1>
          </div>
        </div>
      </div>
      {/* { Bottom part } */}
      <div
        className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center 
      text-gray-600 text-sm"
      >
        <p className="text-center md:text-left">
          Copyright © 2024 Webdev. All rights reserved
        </p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span>Social:</span>
          <span className="text-gray-500 hover:text-gray-800 ">
            <FaFacebook />
          </span>
          <span className="text-gray-500 hover:text-gray-800 ">
            <FaTwitter />
          </span>
          <span className="text-gray-500 hover:text-gray-800 ">
            <FaDribbble />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;