import React from "react";
import logo from "../assets/logo.png";
import { CgMenuGridR } from "react-icons/cg";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineCar, AiOutlineShoppingCart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { SlCalender, SlLogout } from "react-icons/sl";
import { TbMessage } from "react-icons/tb";
import { GiCrossedSwords } from "react-icons/gi";
import { FiSettings } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const SideBar = () => {
  const state = useSelector((state) => state.SwitchMode.darkMode);
  return (
    <div className="fixed top-0 left-0 h-full w-32 md:w-60 ">
      <div className="py-4 px-4">
        {/*logo and heading*/}
        <div className="flex items-center gap-4 mb-11">
          <img src={logo} alt="logo/img" />
          <h1
            className={`${
              state
                ? "font-bold text-white text-xl"
                : "font-bold text-[#1F2128] text-xl"
            }`}
          >
            Motiv.
          </h1>
        </div>
        {/*dashboard nav links*/}
        <ul>
          <NavLink
            to="/recommended"
            className="flex items-center gap-2 text-[#5F6165] mb-[25px] object-cover"
          >
            <CgMenuGridR size={25} />
            <li className=" hidden md:block duration-300 hover:text-[#FF764C] cursor-pointer">
              dashboard
            </li>
          </NavLink>
          <div className="flex items-center gap-2 text-[#5F6165] mb-[25px]">
            <BiUserCircle size={25} />
            <li className=" hidden md:block duration-300 hover:text-[#FF764C] cursor-pointer">
              assets
            </li>
          </div>
          <NavLink
            to="/booking"
            className="flex items-center gap-2 text-[#5F6165] mb-[25px]"
          >
            <AiOutlineCar size={25} />
            <li className=" hidden md:block duration-300 hover:text-[#FF764C] cursor-pointer">
              booking
            </li>
          </NavLink>
          <div className="flex items-center gap-2 text-[#5F6165] mb-[25px]">
            <BsBag size={25} />
            <li className=" hidden md:block duration-300 hover:text-[#FF764C] cursor-pointer">
              sell cars
            </li>
          </div>
          <div className="flex items-center gap-2 text-[#5F6165] mb-[25px]">
            <AiOutlineShoppingCart size={25} />
            <li className=" hidden md:block duration-300 hover:text-[#FF764C] cursor-pointer">
              buy cars
            </li>
          </div>
          <div className="flex items-center gap-2 text-[#5F6165] mb-[25px]">
            <GiCrossedSwords size={25} />
            <li className="hidden md:block duration-300 hover:text-[#FF764C] cursor-pointer">
              services
            </li>
          </div>
          <div className="flex items-center gap-2 text-[#5F6165] mb-[25px]">
            <SlCalender size={25} />
            <li className=" hidden md:block duration-300 hover:text-[#FF764C] cursor-pointer">
              calender
            </li>
          </div>
          <div className="flex items-center gap-2 text-[#5F6165] mb-[320px]">
            <TbMessage size={25} />
            <li className=" hidden md:block duration-300 hover:text-[#FF764C] cursor-pointer">
              message
            </li>
          </div>
          <div className="flex items-center gap-2 text-[#5F6165] mb-[25px]">
            <FiSettings size={25} />
            <li className=" hidden md:block duration-300 hover:text-[#FF764C] cursor-pointer">
              settings
            </li>
          </div>
          <div className="flex items-center gap-2 text-[#5F6165] mb-[25px]">
            <SlLogout size={25} />
            <li className=" hidden md:block duration-300 hover:text-[#FF764C] cursor-pointer">
              log out
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
