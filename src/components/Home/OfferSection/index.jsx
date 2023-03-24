import React from "react";
import OfferItem from "./OfferItem";

const OfferSection = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto grid grid-cols-2 gap-7">
        <OfferItem
          image="1.jpg"
          title="New Arrivals"
          category={
            <span>
              MENS <br />
              SPORT SHOES
            </span>
          }
          discount="30"
        />
        <OfferItem
          image="2.jpg"
          title="New Trending"
          category={
            <span>
              SMART <br />
              WATCHES
            </span>
          }
          discount="20"
        />
      </div>
    </section>
  );
};

export default OfferSection;
