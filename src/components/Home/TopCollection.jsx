import React from "react";
import Product from "../shared/Product";
import SectionTitle from "../shared/SectionTitle";

const TopCollection = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <SectionTitle
          heading="Our Top Collection"
          subHeading="Browse The Collection of Top Products"
        />

        <div className="grid grid-cols-4 gap-6">
          <Product
            title="Hello"
            image={"1.jpg"}
            oldPrice="50"
            currentPrice="20"
          />
          <Product
            title="Hello World"
            image={"2.jpg"}
            oldPrice="35"
            currentPrice="20"
          />
          <Product
            title="Hello"
            image={"3.jpg"}
            oldPrice="35"
            currentPrice="20"
          />
          <Product
            title="Hello"
            image={"4.jpg"}
            oldPrice="35"
            currentPrice="20"
          />
          <Product
            title="Hello"
            image={"5.jpg"}
            oldPrice="35"
            currentPrice="20"
          />
          <Product
            title="Hello"
            image={"3.jpg"}
            oldPrice="35"
            currentPrice="20"
          />
          <Product
            title="Hello"
            image={"2.jpg"}
            oldPrice="35"
            currentPrice="20"
          />
          <Product title="Hello" image={"1.jpg"} currentPrice="20" />
        </div>

        <div className="text-center mt-[35px]">
          <button className="text-secondary text-base font-semibold border-b border-secondary pb-1">
            Shop All Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopCollection;
