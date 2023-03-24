import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BsBagCheck, BsGrid, BsSearch } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { GrFacebookOption } from "react-icons/gr";
import { HiOutlineBarsArrowDown } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      {/* top bar start */}
      <div className="border-b py-2">
        <div className="flex items-center justify-between container mx-auto">
          <div className="flex gap-2">
            <GrFacebookOption className="text-body text-lg" />
            <AiOutlineTwitter className="text-body text-lg" />
            <AiOutlineInstagram className="text-body text-lg" />
            <FaLinkedinIn className="text-body text-lg" />
          </div>
          <p className="text-body text-[13px]">
            FREE SHIPPINGTHIS WEEK ORDER OVER - $75
          </p>
          <ul className="flex items-center gap-3 text-[13px] text-heading uppercase font-medium cursor-pointer">
            <li>currency</li>
            <li>language</li>
          </ul>
        </div>
      </div>
      {/* top bar end */}

      {/* branding start */}
      <div className="py-5 border-b">
        <div className="flex justify-between items-center container mx-auto">
          <Link to="/">
            <img className="w-32" src="/img/logo.png" alt="logo" />
          </Link>
          <div className="flex items-center border border-primary p-3 rounded-md">
            <input
              type="text"
              className="outline-none text-body text-sm w-[480px]"
              placeholder="Search products..."
            />
            <BsSearch className="cursor-pointer text-body text-lg" />
          </div>
          <div className="flex items-center gap-8 text-[27px] text-secondary">
            <BiUser />
            <FiHeart />
            <BsBagCheck />
          </div>
        </div>
      </div>
      {/* branding end */}

      {/* nav bar start */}
      <div className="py-3 shadow-sm">
        <div className="container mx-auto flex items-center justify-between">
          <BsGrid className="text-2xl cursor-pointer" />
          <nav>
            <ul className="flex items-center gap-11 uppercase text-sm font-semibold text-secondary">
              <li className="transition-all text-primary cursor-pointer border-b-2 border-primary pb-2 inline-block">
                <Link to="/">Home</Link>
              </li>
              <li className="transition-all hover:text-primary cursor-pointer border-b-2 border-transparent hover:border-primary pb-2 inline-block">
                <Link to="/">Categories</Link>
              </li>
              <li className="transition-all hover:text-primary cursor-pointer border-b-2 border-transparent hover:border-primary pb-2 inline-block">
                <Link to="/">products</Link>
              </li>
              <li className="transition-all hover:text-primary cursor-pointer border-b-2 border-transparent hover:border-primary pb-2 inline-block">
                <Link to="/">blog</Link>
              </li>
              <li className="transition-all hover:text-primary cursor-pointer border-b-2 border-transparent hover:border-primary pb-2 inline-block">
                <Link to="/">hot offers</Link>
              </li>
            </ul>
          </nav>
          <HiOutlineBarsArrowDown className="text-3xl" />
        </div>
      </div>
      {/* nav bar end */}
    </header>
  );
};

export default Navigation;
