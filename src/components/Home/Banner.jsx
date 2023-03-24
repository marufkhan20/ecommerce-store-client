import React from "react";
import Button from "../ui/Button";

const Banner = () => {
  return (
    <div style={{ backgroundImage: `url(/img/banner.jpg)` }} className="w-full">
      <div className="container mx-auto flex flex-col justify-center h-[81vh]">
        <div className="w-[50px] h-1 bg-primary"></div>
        <h2 className="text-heading font-semibold text-[65px]">
          New Fashion Collection
        </h2>
        <h3 className="text-secondary font-normal text-[50px] uppercase">
          SALE OFFER
        </h3>
        <p className="text-body text-[17px] font-light">
          Lorem ipsum dolor sit amet, consectetur <br />
          adipiscing elit, sed do
        </p>
        <div className="mt-14">
          <Button>Order Now</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
