import React from "react";

const Card = () => {
  return (
    <div className="p-8 bg-white shadow-lg rounded-lg">
      <h3 className="text-center text-[20px] font-bold mb-5">
        Commencement of business
      </h3>
      <p className="text-base text-center font-normal mb-4">
        Invested shareholders must confirm payment and office address
      </p>
      <div className="bg-[#F4F4F4] p-[15px] rounded-[10px] flex justify-between gap-11">
        <div className="">
          <p className="text-[#0076CE] font-bold">Due date</p>
          <p>Within 180 days </p>
        </div>
        <div>
          <p className="text-[#FF6666] font-bold">Penalty fees</p>
          <p>
            <span className="font-bold">₹50,000</span> for the company
          </p>
          <p>
            <span className="font-bold">₹50,000</span> for the company
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
