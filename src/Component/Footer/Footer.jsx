import React from "react";
import logo from "../../assets/hoobank.png";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="pt-24 footer">
        <div className="container">
          <div className="pt-12 pb-8 border-b-2 border-[#fff4]">
            <div className="logo">
              <picture>
                <img src={logo} alt={logo} />
              </picture>
              <p className="text-xs font-poppins font-normal text-white opacity-45 pt-7 leading-5 pb-6">
                A new way to make the payments easy, reliable and secure.
              </p>
            </div>
            <div className="flex gap-y-10 flex-col list">
              <div className="flex justify-between second-list">
                <ul>
                  <li className="li">Usefull Links</li>
                  <li>
                    <a href="#">Content</a>
                  </li>{" "}
                  <li>
                    <a href="#">Content</a>
                  </li>{" "}
                  <li>
                    <a href="#">Content</a>
                  </li>{" "}
                  <li>
                    <a href="#">Content</a>
                  </li>{" "}
                  <li>
                    <a href="#">Content</a>
                  </li>
                </ul>

                <ul>
                  <li className="li">Usefull Links</li>
                  <li>
                    <a href="#">Content</a>
                  </li>{" "}
                  <li>
                    <a href="#">Content</a>
                  </li>{" "}
                  <li>
                    <a href="#">Content</a>
                  </li>{" "}
                  <li>
                    <a href="#">Content</a>
                  </li>{" "}
                  <li>
                    <a href="#">Content</a>
                  </li>
                </ul>
              </div>

              <ul>
                <li className="li">Usefull Links</li>
                <li>
                  <a href="#">Content</a>
                </li>{" "}
                <li>
                  <a href="#">Content</a>
                </li>{" "}
                <li>
                  <a href="#">Content</a>
                </li>{" "}
                <li>
                  <a href="#">Content</a>
                </li>{" "}
                <li>
                  <a href="#">Content</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-7 footer-bottom flex gap-y-3 items-center  justify-between">
            <div>
              <p className="text-white font-poppins font-normal text-xs opacity-45">
                Copyright <span>©️</span> 2021 HooBank. All Rights Reserved.
              </p>
            </div>
            <div className="icon flex items-center gap-x-4">
              <a
                href="#"
                className="text-white text-2xl hover:text-[#5CE1E6] transition-all "
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-white text-2xl hover:text-[#5CE1E6] transition-all "
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-white text-2xl hover:text-[#5CE1E6] transition-all "
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-white text-2xl hover:text-[#5CE1E6] transition-all "
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
