import React from "react";
import discountImg from "../../assets/Discount.png";
import round from "../../assets/round.png";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import hand from "../../assets/hand.png";
import { RxArrowTopRight } from "react-icons/rx";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="py-12"></div>
          <div className="left">
            <div className="discount  bg-gradient-to-l from-discountsecound to-discountfirst rounded-lg flex items-center py-1 px-[8px]">
              <img src={discountImg} alt={discountImg} className="w-6" />
              <p className="text-white text-[8px] font-normal font-poppins text-uppercase pl-2">
                20% <span className="opacity-[0.8]">DISCOUNT FOR</span>1 MONTH{" "}
                <span className="opacity-[0.8]">ACCOUNT</span>
              </p>
            </div>
            <h1 className="font-poppins text-3xl font-semibold leading-10 pt-2 text-white pb-8">
              The Next <span className="headingSpan">Generation</span> Payment
              Method.
            </h1>
            <p className="text-white opacity-[0.7] font-poppins font-normal text-[10px] leading-5">
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </p>
            <div className="getStarted  border-2 border-[#33BBCF] rounded-full w-[130px] h-[130px] bg-transparent py-[39px] cursor-pointer mt-6 mx-auto">
              <p className="text-[#5CE1E6] text-center">
                Get
                <RxArrowTopRight className="inline-block text-white ml-1 text-xl" />
                <p>Started</p>
              </p>
            </div>
          </div>
          <div className="right relative">
            <div className="round mt-10">
              <img src={round} alt={round} />
            </div>
            <div className="card1 absolute top-24 left-0 z-30">
              <img src={card1} alt={card1} />
            </div>
            <div className="card2 absolute top-40 left-0 z-20 ">
              <img src={card2} alt={card2} />
            </div>
            <div className="card3 absolute top-32 left-0 z-10">
              <img src={card3} alt={card3} />
            </div>
          </div>
        </div>
        <div className="hand pt-44">
          <img src={hand} alt={hand} />
        </div>
        <div className="container">
          <div className="user text-white flex flex-col justify-center items-center gap-y-3 mt-10">
            <div className="active flex items-center">
              <p>3800+</p>
              <p>User Active</p>
            </div>
            <div className="company flex items-center">
              <p>230+</p>
              <p>TRUSTED BY COMPANY</p>
            </div>
            <div className="Transaction flex items-center">
              <p>$230M+</p>
              <p>TRANSACTION</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
