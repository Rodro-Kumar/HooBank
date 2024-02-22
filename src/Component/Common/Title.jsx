import React from "react";

const Title = ({ className, children }) => {
  return (
    <h3
      className={`text-white font-poppins font-semibold text-4xl left-10 ${className}`}
    >
      {children ? children : "Find a better card deal in few easy steps."}
    </h3>
  );
};

export default Title;
