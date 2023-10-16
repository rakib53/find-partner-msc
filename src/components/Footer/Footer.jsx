import React from "react";
import whiteLogo from "../../../public/whiteLogo.png";

function Footer() {
  return (
    <section className="bg-gradient-to-r from-[#0076CE] to-[#9400D3] mt-36">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-6 xl:grid-cols-6 pt-10 pb-8">
          <div>
            <img src={whiteLogo} alt="" />
            <p>
              India's first platform dedicated to simplifying partner search
            </p>
          </div>
          <ul>
            <li>
              <a href="">Search</a>
            </li>
            <li>
              <a href="">Connect</a>
            </li>
            <li>
              <a href="">Research</a>
            </li>
            <li>
              <a href="">Academy</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Search</a>
            </li>
            <li>
              <a href="">Connect</a>
            </li>
            <li>
              <a href="">Research</a>
            </li>
            <li>
              <a href="">Academy</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Search</a>
            </li>
            <li>
              <a href="">Connect</a>
            </li>
            <li>
              <a href="">Research</a>
            </li>
            <li>
              <a href="">Academy</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Search</a>
            </li>
            <li>
              <a href="">Connect</a>
            </li>
            <li>
              <a href="">Research</a>
            </li>
            <li>
              <a href="">Academy</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Search</a>
            </li>
            <li>
              <a href="">Connect</a>
            </li>
            <li>
              <a href="">Research</a>
            </li>
            <li>
              <a href="">Academy</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
