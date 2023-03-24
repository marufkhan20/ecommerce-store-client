import React from "react";

const OfferItem = ({ image, title, category, discount }) => {
  return (
    <div
      style={{ backgroundImage: `url(/img/banner/${image})` }}
      className="min-h-[333px] px-[36px] flex flex-col justify-center border rounded-lg"
    >
      <span className="text-xl text-body font-normal">{title}</span>
      <h3 className="text-heading leading-8 my-3 text-[28px] font-extrabold">
        {category}
      </h3>
      <span className="text-base text-body font-normal">
        {discount}% Discount
      </span>
    </div>
  );
};

export default OfferItem;
