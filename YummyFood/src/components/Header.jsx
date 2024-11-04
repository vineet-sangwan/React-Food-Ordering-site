import React, { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ count }) => {
  const [sideNav, setSideNav] = useState(false);

  return (
    <>
      <div className="fixed z-50 top-0 left-0 w-full bg-white">
        <div className="navBar flex justify-between items-center bg-orange-300 py-[10px] px-[15px] drop-shadow-lg border-b z-30">
          <div className="logo text-red-800 font-semi-bold text-2xl">
            <Link to="/">
              <p>
                Yummy <span className="text-blue-400">Food</span>
              </p>
            </Link>
          </div>
          <div className="nav-links hidden lg:flex">
            <ul className="flex justify-between items-center gap-3 text-white">
              <Link to="/">
                <li className="px-5 py-3 cursor-pointer">Home</li>
              </Link>
              <Link to="menu/">
                <li className="px-5 py-3 cursor-pointer">Menu</li>
              </Link>
              <Link to="offers/">
                <li className="px-5 py-3 cursor-pointer">Offers</li>
              </Link>
              <Link to="contactus/">
                <li className="px-5 py-3 cursor-pointer">Contact Us</li>
              </Link>
              <Link to="signup/">
                <li className="px-5 py-3 cursor-pointer">Sign Up</li>
              </Link>
              <Link to="login/">
                <li className="px-5 py-3 cursor-pointer">Login</li>
              </Link>
              <Link to="about/">
                <li className="px-5 py-3 cursor-pointer">About</li>
              </Link>
            </ul>
          </div>
          {sideNav && (
            <div className="nav-links flex flex-col justify-center items-center absolute lg:top-[70px] lg:right-[5px] top-14 right-1 h-[60vh] w-[200px] bg-orange-200 z-40">
              <div
                className="top-3 right-3 absolute cursor-pointer"
                onClick={() => setSideNav(!sideNav)}
              >
                <RxCross2 size={25} />
              </div>
              <ul className="text-center space-y-4">
                <Link to="/">
                  <li className="px-5 py-3 cursor-pointer">Home</li>
                </Link>
                <Link to="menu/">
                  <li className="px-5 py-3 cursor-pointer">Menu</li>
                </Link>
                <Link to="offers/">
                  <li className="px-5 py-3 cursor-pointer">Offers</li>
                </Link>
                <Link to="contactus/">
                  <li className="px-5 py-3 cursor-pointer">Contact Us</li>
                </Link>
                <Link to="signup/">
                  <li className="px-5 py-3 cursor-pointer">Sign Up</li>
                </Link>
                <Link to="login/">
                  <li className="px-5 py-3 cursor-pointer">Login</li>
                </Link>
                <Link to="about/">
                  <li className="px-5 py-3 cursor-pointer">About</li>
                </Link>
              </ul>
            </div>
          )}
          <div className="search flex items-center rounded-lg">
            <div className="search-box hidden lg:block">
              <input
                type="text"
                className="px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Search..."
              />
              <button className="px-3 py-2 bg-orange-500 text-white rounded-r-lg hover:bg-orange-600">
                Go
              </button>
            </div>
            <div className="cart relative mx-5">
              <Link to="cart/">
                <div className="flex items-center space-x-2 cursor-pointer p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition duration-300">
                  {count > 0 && (
                    <span className="text-white text-sm font-semibold">
                      {count}
                    </span>
                  )}
                  <BsCart3 size={25} className="text-white" />
                </div>
              </Link>
            </div>

            <div
              className="hamburger cursor-pointer lg:hidden"
              onClick={() => setSideNav(!sideNav)}
            >
              <GiHamburgerMenu size={25} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
