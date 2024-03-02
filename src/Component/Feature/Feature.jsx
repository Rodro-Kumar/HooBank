import React from "react";
import Button from "../Common/Button";
import { TiStarFullOutline } from "react-icons/ti";
import { HiShieldCheck } from "react-icons/hi2";
import { RiSendPlaneFill } from "react-icons/ri";

const Feature = () => {
  return (
    <>
      <div className="feature">
        <div className="container">
          <div className="py-32 feature-wraper">
            <div className="left">
              <h3 className="text-3xl font-poppins font-semibold text-white">
                You do the business, we’ll handle the money.
              </h3>
              <p className="text-xs font-poppins font-normal text-white opacity-70 leading-6 pt-6 pb-6">
                With the right credit card, you can improve your financial life
                by building credit, earning rewards and saving money. But with
                hundreds of credit cards on the market.
              </p>
              <Button>Get Started</Button>
            </div>
            <div className="right pt-10">
              <div className="flex items-center">
                <div className="py-3 px-3 bg-[#09977d28] rounded-full mr-4 flex items-center justify-center">
                  <TiStarFullOutline className="text-[#00F6FF] text-3xl" />
                </div>
                <div>
                  <h5 className="text-base text-white font-poppins font-semibold">
                    Rewards
                  </h5>
                  <p className="text-sm font-poppins font-normal text-white opacity-60 pt-2 reward-title">
                    The best credit cards offer some tantalizing combinations of
                    promotions and prizes
                  </p>
                </div>
              </div>
              <div className="flex items-center py-8">
                <div className="py-3 px-3 bg-[#09977d28] rounded-full mr-4 items-center  flex ">
                  <HiShieldCheck className="text-[#00F6FF] text-3xl" />
                </div>
                <div>
                  <h5 className="text-base text-white font-poppins font-semibold">
                    100% Secured
                  </h5>
                  <p className="text-sm font-poppins font-normal text-white opacity-60 pt-2 reward-title">
                    We take proactive steps make sure your information and
                    transactions are secure.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="py-3 px-3 bg-[#09977d28] rounded-full mr-4 flex items-center justify-center">
                  <RiSendPlaneFill className="text-[#00F6FF] text-3xl" />
                </div>
                <div>
                  <h5 className="text-base text-white font-poppins font-semibold">
                    Balance Transfer
                  </h5>
                  <p className="text-sm font-poppins font-normal text-white opacity-60 pt-2 reward-title">
                    A balance transfer credit card can save you a lot of money
                    in interest charges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
