import React from "react";
import png from "../../assets/“.png";
import manimg from "../../assets/man1.png";
import Flex from "./Flex";

const Card = ({ className }) => {
  return (
    <div
      className={` py-10 px-6 rounded-3xl border border-solid border-[#ffffff3a] ${className}`}
    >
      <div className="all-content">
        <img src={png} alt={png} className="mb-8" />
        <p className="pb-5 text-xs font-poppins font-normal text-white leading-5">
          Money is only a tool. It will take you wherever you wish, but it will
          not replace you as the driver.
        </p>
        <Flex className={"flex-col gap-y-3"}>
          <div>
            <img src={manimg} alt={manimg} />
          </div>
          <div>
            <h4 className="text-base font-poppins font-normal text-white">
              Steve Mark
            </h4>
            <p className="text-xs font-poppins font-normal text-white opacity-45">
              Founder & Leader
            </p>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default Card;
