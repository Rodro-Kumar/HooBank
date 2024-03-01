import React from "react";
import Button from "../Common/Button";
import dealimg from "../../assets/deal.png";

const Deal = () => {
  return (
    <>
      <div className="deal">
        <div className="container">
          <div className="pb-20 deal-wraper">
            <div>
              <h4 className="text-4xl font-poppins font-semibold text-white leading-10 pb-4">
                Find a better card deal in few easy steps.
              </h4>
              <p className="text-white font-poppins font-normal leading-6 opacity-60 pb-5 text-xs">
                Arcu tortor, purus in mattis at sed integer faucibus. Aliquet
                quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
              </p>
              <Button>Get Started</Button>
            </div>
            <div>
              <picture>
                <img src={dealimg} alt={dealimg} className="dealimg" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Deal;
