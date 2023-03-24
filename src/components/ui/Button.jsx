import React from "react";

const Button = ({ onClick, children, ...rest }) => {
  return (
    <button
      className="py-2 px-4 bg-heading text-lg font-medium uppercase text-white inline-block transition-all duration-200 hover:bg-primary"
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
