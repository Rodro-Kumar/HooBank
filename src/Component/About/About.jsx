import React from "react";
import Title from "../Common/Title";
import Card from "../Common/Card";
import Flex from "../Common/Flex";
import company1 from "../../assets/company1.png";
import company2 from "../../assets/company2.png";
import company3 from "../../assets/company3.png";
import company4 from "../../assets/company4.png";

const About = () => {
  return (
    <>
      <div className="about pb-20">
        <div className="container">
          <div>
            <div>
              <div>
                <Title>What people are saying about us</Title>
                <p className="text-xs font-poppins font-normal text-white opacity-60 leading-5 pt-4">
                  Everything you need to accept card payments and grow your
                  business anywhere on the planet.
                </p>
              </div>
            </div>
            <div>
              <Flex className={"flex-col gap-y-7 pt-10"}>
                <Card className={"card"} />
                <Card className={"card"} />
                <Card className={"card"} />
              </Flex>
            </div>
            <div>
              <Flex className={"pt-12 flex-col items-center gap-y-7"}>
                <img src={company1} alt={company1} className="w-36" />
                <img src={company2} alt={company2} className="w-36" />
                <img src={company3} alt={company3} className="w-36" />
                <img src={company4} alt={company4} className="w-36" />
              </Flex>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
