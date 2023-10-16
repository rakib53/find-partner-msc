import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import logo from "../../../public/logo.png";

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center h-[85px]">
        <div className="flex items-center gap-[48px]">
          <div className="logoWrapper">
            <img src={logo} alt="logo" />
          </div>
          <ul className="flex items-center gap-[40px] list-none">
            <li>
              <a className="font-bold text-lg" href="">
                Solution
              </a>
            </li>
            <li>
              <a className="font-bold text-lg" href="">
                Features
              </a>
            </li>
            <li>
              <a className="font-bold text-lg" href="">
                Blog
              </a>
            </li>
            <li>
              <a className="font-bold text-lg" href="">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-[16px]">
          <button className="border-[#0076CE] border-[1.5px] py-[10px] px-[20px] rounded-[10px] text-center text-[#0076CE] font-bold">
            Login
          </button>
          <button className="bg-sky-500 text-white py-[10px] px-[20px] font-bold text-center rounded-lg">
            Register
          </button>
        </div>
        <div className="md:hidden">
          <FaBarsStaggered />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
