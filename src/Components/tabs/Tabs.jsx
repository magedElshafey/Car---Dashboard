import React from "react";
import { useSelector } from "react-redux";
const Tabs = ({ isReversed, bg, title }) => {
  const state = useSelector((state) => state.SwitchMode.darkMode);

  return (
    <div
      className={
        isReversed
          ? "flex flex-col-reverse text-center gap-4 md:gap-0 md:flex-row-reverse justify-between items-center mb-4"
          : " flex flex-col md:flex-row text-center gap-4 md:gap-0 justify-between items-center mb-4"
      }
    >
      <ul className="flex items-center gap-1 md:gap-5">
        <li
          className={`${bg} py-2 font-bold px-2 md:px-6 text-center rounded-3xl text-white`}
        >
          day
        </li>
        <li
          className={`${
            state
              ? "py-2 px-2 md:px-6 font-bold text-center rounded-3xl text-[#5F6165] bg-black"
              : "py-2 px-2 md:px-6 font-bold text-center rounded-3xl text-[#5F6165] bg-white"
          }`}
        >
          week
        </li>
        <li
          className={`${
            state
              ? "py-2 px-2 md:px-6 font-bold text-center rounded-3xl text-[#5F6165] bg-black"
              : "py-2 px-2 md:px-6 font-bold text-center rounded-3xl text-[#5F6165] bg-white"
          }`}
        >
          Month
        </li>
      </ul>
      <h1 className="font-bold text-[#5F6165]">{title}</h1>
    </div>
  );
};

export default Tabs;
