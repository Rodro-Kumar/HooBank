import React from "react";
import Title from "../Common/Title";
import Button from "../Common/Button";

const Service = () => {
  return (
    <>
      <div className="service">
        <div className="container">
          <div>
            <div className="pb-4">
              <Title className={"service-title"}>
                Let’s try our service now!
              </Title>
              <p className="text-white opacity-50 text-xs leading-6 pt-4">
                Everything you need to accept card payments and grow your
                business anywhere on the planet.
              </p>
            </div>
            <div>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
