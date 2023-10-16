import React from "react";
import bookmark from "../../../public/about_us/bookmark.png";
import graduted from "../../../public/about_us/graduted.png";
import people from "../../../public/about_us/people.png";
import search from "../../../public/about_us/search.png";

const AboutUs = () => {
  return (
    <section className="mt-32">
      <div className="container mx-auto">
        <div>
          <div className="w-[670px]">
            <h3 className="text-left font-bold text-[65px] leading-[80px] mb-4">
              <span className="bg-gradient-to-r from-[#0076CE] to-[#9400D3] inline-block text-transparent bg-clip-text">
                All-in-One
              </span>{" "}
              platform that Makes Easier
            </h3>
            <p className="text-2xl">
              We are more than a platform; We are your success partner. Discover
              our services to achieve your business and educational goals
            </p>
            <div className="flex flex-wrap gap-8 mt-8">
              <div className="w-[310px] flex gap-4">
                <img
                  className="w-[65px] h-[65px] object-fill"
                  src={search}
                  alt=""
                />
                <p className="text-xl font-normal">
                  <span className="font-bold">SEARCH</span> for vital company
                  information
                </p>
              </div>
              <div className="w-[310px] flex gap-4">
                <img
                  className="w-[65px] h-[65px] object-fill"
                  src={people}
                  alt=""
                />
                <p className="text-xl font-normal">
                  <span className="font-bold">CONNECT</span> with the resources
                  to meet your business needs
                </p>
              </div>
              <div className="w-[310px] flex gap-4">
                <img
                  className="w-[65px] h-[65px] object-fill"
                  src={bookmark}
                  alt=""
                />
                <p className="text-xl font-normal">
                  <span className="font-bold">RESEARCH</span> and generate
                  reports that drive growth
                </p>
              </div>
              <div className="w-[310px] flex gap-4">
                <img
                  className="w-[65px] h-[65px] object-fill"
                  src={graduted}
                  alt=""
                />
                <p className="text-xl font-normal">
                  <span className="font-bold">ACADEMY</span> to give you the
                  skills for success in your career
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
