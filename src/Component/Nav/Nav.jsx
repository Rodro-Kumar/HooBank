import React, { useState } from "react";
import hoobank from "../../assets/hoobank.png";
import { RiMenuFoldFill } from "react-icons/ri";

const Nav = () => {
  const [show, setshow] = useState(true);

  return (
    <>
      <div className="nav">
        <div className="container">
          <div className="py-7 flex justify-between items-center">
            <div className="logo">
              <img src={hoobank} alt={hoobank} />
            </div>
            <div className="list">
              <ul className="flex gap-x-14">
                <li className="text-white opacity-[0.8] text-base font-poppins font-normal">
                  <a href="#">Home</a>
                </li>
                <li className="text-white opacity-[0.8]">
                  <a href="#">About Us</a>
                </li>
                <li className="text-white opacity-[0.8]">
                  <a href="#">Features</a>
                </li>
                <li className="text-white opacity-[0.8]">
                  <a href="#">Solution</a>
                </li>
              </ul>
            </div>
            <div
              className="toogleMenu cursor-pointer"
              onClick={() => setshow(!show)}
            >
              <RiMenuFoldFill className="text-white text-3xl" />
            </div>
          </div>
        </div>
        {show ? (
          <div className="menu text-white bg-[#454660] h-[100vh] inline-block  pt-7 rounded-r-md ">
            <ul>
              <li className="py-2 px-8 font-poppins font-medium text-base hover:bg-[#76769e]">
                <a href="#">Home</a>
              </li>
              <li className="py-2 px-8 font-poppins font-medium text-base hover:bg-[#76769e]">
                <a href="#">About Us</a>
              </li>
              <li className="py-2 px-8 font-poppins font-medium text-base hover:bg-[#76769e]">
                <a href="#">Features</a>
              </li>
              <li className="py-2 px-8 font-poppins font-medium text-base hover:bg-[#76769e]">
                {" "}
                <a href="#">Solution</a>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Nav;
