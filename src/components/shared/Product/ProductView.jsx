import React from "react";
import { AiFillStar } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import Button from "../../ui/Button";

const ProductView = ({
  isOpen,
  setIsOpen,
  title,
  image,
  oldPrice,
  currentPrice,
}) => {
  return (
    <div
      className={`transition-all duration-500 ${
        isOpen ? "scale-100" : "scale-0"
      } fixed inset-0 bg-black/40 w-full h-full z-50 flex justify-center items-center`}
    >
      <div className="bg-white w-[40%] border border-gray-400 rounded p-4">
        {/* product details */}
        <div className="flex gap-6">
          <div>
            <img
              className="w-full"
              src={`/img/products/${image}`}
              alt="product"
            />
            <div className="flex items-center gap-2 justify-center mt-5">
              <img
                className="w-14 cursor-pointer border border-transparent hover:border-black"
                src="/img/products/2.jpg"
                alt="product"
              />
              <img
                className="w-14 cursor-pointer border border-transparent hover:border-black"
                src="/img/products/2.jpg"
                alt="product"
              />
              <img
                className="w-14 cursor-pointer border border-transparent hover:border-black"
                src="/img/products/2.jpg"
                alt="product"
              />
              <img
                className="w-14 cursor-pointer border border-transparent hover:border-black"
                src="/img/products/2.jpg"
                alt="product"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center mb-5 gap-3 justify-between">
              <h2 className="text-xl font-bold text-secondary">{title}</h2>
              <GrClose
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-lg"
              />
            </div>
            <div className="flex gap-1">
              <AiFillStar className="text-sm text-[#FF9191]" />
              <AiFillStar className="text-sm text-[#FF9191]" />
              <AiFillStar className="text-sm text-[#FF9191]" />
              <AiFillStar className="text-sm text-[#FF9191]" />
              <AiFillStar className="text-sm text-[#C9C9C9]" />
            </div>
            <p className="mt-[14px] text-body text-sm leading-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <div className="flex items-center gap-2 mt-3">
              <del className="text-lg text-secondary">${oldPrice}.00</del>
              <h3 className="text-heading text-[22px] font-bold">
                ${currentPrice}.00
              </h3>
            </div>
            <div className="mt-3">
              <span className="text-base text-[#212121] font-semibold block">
                Color
              </span>
              <div className="flex items-center gap-1 mt-2">
                <div className="w-[24px] h-[24px] rounded-full bg-[#B0FDDD] border-2 border-white cursor-pointer"></div>
                <div className="w-[24px] h-[24px] rounded-full bg-[#C6B1F9] border-2 border-white cursor-pointer"></div>
              </div>
            </div>
            <div className="mt-5">
              <span className="text-base text-[#212121] font-semibold block mb-3">
                Size
              </span>
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

            <div className="flex gap-2 mt-7">
              <input
                type="number"
                value="1"
                className="py-[6px] w-[75px] text-center border outline-none inline-block "
              />
              <Button>
                <div className="flex gap-2 items-center">
                  <RiShoppingBasket2Fill />
                  <span className="text-sm">ADD TO CART</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
