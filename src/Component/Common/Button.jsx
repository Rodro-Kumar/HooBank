import React from "react";

const Button = ({ className, children }) => {
  return (
    <button
      className={`py-4 px-8 rounded-lg  text-lg font-poppins font-medium text-black bg-gradient-to-b from-thirdColor from-10% via-secoundColor via-30% to-firstColor to-90% ${className}`}
    >
      {children ? children : "Button"}
    </button>
  );
};

export default Button;
