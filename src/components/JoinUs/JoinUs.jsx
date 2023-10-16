import React from "react";
import Card from "./Card";

export default function JoinUs() {
  return (
    <section className="w-full bg-[url('../../../public/join_us_bg.png')] bg-no-repeat bg-cover mt-32 pb-3">
      <div className="container mx-auto">
        <h2 className="text-center font-bold text-[65px] leading-[80px] mb-4">
          Want to{" "}
          <span className="bg-gradient-to-r from-[#9400D3] to-[#0076CE] inline-block text-transparent bg-clip-text">
            Join
          </span>{" "}
          Us?
        </h2>
        <p className="text-center text-2xl">
          To remain with us, it is essential that you diligently follow the
          steps provided
        </p>
        <div className="grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-20 mb-8">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <p className="text-base">
          * For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200
          every day until you file the form . There is no maximum penalty
          amount. So, if you don't file the form for a year, you will owe
          ₹73,000 per form
        </p>
      </div>
    </section>
  );
}
