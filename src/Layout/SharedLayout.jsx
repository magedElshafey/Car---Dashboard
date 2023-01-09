import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
const SharedLayout = () => {
  const state = useSelector((state) => state.SwitchMode.darkMode);
  return (
    <div
      className={`${state ? " bg-[#222] text-white" : "bg-white text-black"}`}
    >
      <div className="flex">
        <SideBar />
        <Header />
      </div>
      <div
        className={`${
          state
            ? "ml-32 md:ml-60 bg-black p-8 mt-4"
            : "ml-32 md:ml-60 bg-[#F5F5F5] p-8 mt-4"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default SharedLayout;
