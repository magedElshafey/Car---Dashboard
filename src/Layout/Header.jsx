import React from "react";
import { useDispatch } from "react-redux";
import { handleSwitch } from "../Components/Redux/SwitchModeSlice";
import { AiOutlineSearch } from "react-icons/ai";
import { RxSwitch } from "react-icons/rx";
import ring from "../assets/ring.png";
import avatar from "../assets/avatar.png";
import { useSelector } from "react-redux";
const Header = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.SwitchMode.darkMode);
  return (
    <div className="flex-1 ml-32 md:ml-60 h-20 py-4 px-2">
      <div className="flex items-center justify-between">
        {/*input field*/}
        <div className="flex justify-between items-center ">
          <div
            className={`${
              state
                ? "hidden md:flex items-center  gap-2  text-[#7C7C8D] md:bg-black py-3 px-3 rounded-lg"
                : "hidden md:flex items-center  gap-2  text-[#7C7C8D]   md:bg-[#F5F4F6] py-3 px-3 rounded-lg  "
            }`}
          >
            <AiOutlineSearch size={30} />
            <input
              type="text"
              placeholder="Search or Type"
              className="bg-transparent focus:outline-none caret-orange-500"
            />
          </div>
        </div>
        {/*notification and avatar*/}
        <div className="notifi relative flex items-center gap-3">
          <img src={ring} alt="notifi/img" />
          <img
            src={avatar}
            alt="avatar/img"
            className="w-10 h-10 rounded-[50%] object-cover "
          />
          <RxSwitch
            size={40}
            className="cursor-pointer"
            onClick={() => {
              dispatch(handleSwitch());
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
