import React from "react";
import bannerLeftImage from "../../../public/Left.png";
import Navbar from "../Navbar/Navbar";

const Banner = () => {
  return (
    <header className="w-full h-[805px] bg-[url('../../../public/banner.png')] bg-cover">
      <Navbar />
      <div className="container mx-auto flex items-center justify-between mt-32">
        <div className="w-[670px]">
          <h1 className="text-left font-bold text-[65px] leading-[80px] mb-[16px]">
            Find{" "}
            <span className="bg-gradient-to-r from-[#0076CE] to-[#9400D3] inline-block text-transparent bg-clip-text">
              Partner
            </span>{" "}
            (CAs) available online
          </h1>
          <p className="text-left text-[#616161] text-[20px] font-normal leading-[30px]">
            <span>CONNECT</span> with us where your services are listed and
            visible to a myriad of businesses seeking CA’s for compliance
            support
          </p>
          <div className="relative mt-14">
            <input
              type="text"
              className="w-full bg-white p-5 outline-none border-none rounded-lg"
              placeholder="search by name"
            />
            <button className="absolute top-0 right-0 py-5 px-11 bg-sky-500 text-white text-base font-bold text-center rounded-lg">
              Search
            </button>
          </div>
        </div>
        <div>
          <img className="-mr-20" src={bannerLeftImage} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Banner;
