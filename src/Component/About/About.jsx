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
              <div className={"flex-col pt-10  flex"}>
                <div className="owner">
                  <Card className={"card"} />
                  <Card className={"card my-7"} />
                  <Card className={"card"} />
                </div>
              </div>
            </div>
            <div>
              <Flex className={"pt-12 flex-col items-center gap-y-7"}>
                <div className="company-logo">
                  <img
                    src={company1}
                    alt={company1}
                    className="w-28 cursor-pointer"
                  />
                  <img
                    src={company2}
                    alt={company2}
                    className="w-28 cursor-pointer mt-4"
                  />
                </div>

                <div className="company-logo">
                  <img
                    src={company3}
                    alt={company3}
                    className="w-28 cursor-pointer"
                  />
                  <img
                    src={company4}
                    alt={company4}
                    className="w-28 cursor-pointer mt-4"
                  />
                </div>
              </Flex>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
