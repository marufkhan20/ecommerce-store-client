import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsEye, BsSuitHeart } from "react-icons/bs";
import { IoBagOutline } from "react-icons/io5";
import { VscGitCompare } from "react-icons/vsc";
import ProductView from "./ProductView";

const Product = ({ title, image, oldPrice, currentPrice }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="p-3 rounded-xl border product">
        <div className="border overflow-hidden relative">
          <img
            className="w-full h-full transition-all hover:scale-110"
            src={`/img/products/${image}`}
            alt="product"
          />

          <div className="absolute -bottom-[200%] right-3 product-opt transition-all duration-500 opacity-0">
            <ul className="flex flex-col gap-1">
              <li className="inline-block p-2 text-body text-lg border bg-white rounded-tl-md rounded-tr-md duration-200 transition-all hover:shadow-md cursor-pointer">
                <IoBagOutline />
              </li>
              <li className="inline-block p-2 text-body text-lg border bg-white duration-200 transition-all hover:shadow-md cursor-pointer">
                <BsSuitHeart />
              </li>
              <li className="inline-block p-2 text-body text-lg border bg-white duration-200 transition-all hover:shadow-md cursor-pointer">
                <VscGitCompare />
              </li>
              <li
                className="inline-block p-2 text-body text-lg border bg-white rounded-bl-md rounded-br-md duration-200 transition-all hover:shadow-md cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                <BsEye />
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p className="my-2 text-base font-normal text-body hover:text-primary cursor-pointer">
            {title}
          </p>
          <div className="flex items-center">
            <AiFillStar className="text-sm text-[#FF9191]" />
            <AiFillStar className="text-sm text-[#FF9191]" />
            <AiFillStar className="text-sm text-[#FF9191]" />
            <AiFillStar className="text-sm text-[#FF9191]" />
            <AiFillStar className="text-sm text-[#C9C9C9]" />
          </div>
          <div className="flex items-center gap-3 mt-2">
            {oldPrice && (
              <h3 className="text-[15px] font-light text-body">
                <del>${oldPrice}.00</del>
              </h3>
            )}
            <h3 className="text-[15px] font-semibold text-heading">
              ${currentPrice}.00
            </h3>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <div className="w-[24px] h-[24px] rounded-full bg-[#B0FDDD] border-2 border-white shadow-md cursor-pointer"></div>
              <div className="w-[24px] h-[24px] rounded-full bg-[#C6B1F9] border-2 border-white shadow-md cursor-pointer"></div>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xs text-body inline-block bg-[#efefef] py-[1px] px-[5px] hover:bg-[#e2e2e2] cursor-pointer">
                S
              </span>
              <span className="text-xs text-body inline-block bg-[#efefef] py-[1px] px-[5px] hover:bg-[#e2e2e2] cursor-pointer">
                M
              </span>
              <span className="text-xs text-body inline-block bg-[#efefef] py-[1px] px-[5px] hover:bg-[#e2e2e2] cursor-pointer">
                X
              </span>
              <span className="text-xs text-body inline-block bg-[#efefef] py-[1px] px-[5px] hover:bg-[#e2e2e2] cursor-pointer">
                XL
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* product view modal */}
      <ProductView
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        image={image}
        title={title}
        oldPrice={oldPrice}
        currentPrice={currentPrice}
      />
    </>
  );
};

export default Product;
