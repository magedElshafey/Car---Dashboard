import React, { useState, useEffect } from "react";
import filter from "../assets/filter.png";
import icon from "../assets/icon.png";
import { bookingCars } from "../Data/Data.js";
import { useSelector } from "react-redux";
const Booking = () => {
  const state = useSelector((state) => state.SwitchMode.darkMode);
  // handle like icon
  const handleActive = (e) => {
    e.target.style.color = "red";
  };
  // handle filter option
  const [cars, setCars] = useState(bookingCars);
  const handleFiltering = (e) => {
    setCars(bookingCars.filter((item) => item.category === e.target.value));
    if (e.target.value === "All") {
      setCars(bookingCars);
    }
  };
  /*
                  summary : load all cars when the page loaded
            */
  useEffect(() => {
    setCars(bookingCars);
  }, []);
  return (
    <div>
      <h1
        className={`${
          state
            ? "font-bold text-3xl text-white mb-[34px]"
            : "font-bold text-3xl text-[#242731] mb-[34px]"
        }`}
      >
        booking
      </h1>
      <div className="flex  justify-between items-center mb-[30px]  flex-col md:flex-row gap-4">
        <div className="flex flex-col md:flex-row gap-6">
          <select
            className={`${
              state
                ? "bg-[#222] rounded-[22.5px] py-[10px] px-4 w-24  focus:outline-none"
                : "bg-[#FFFFFF] rounded-[22.5px] py-[10px] px-4 w-24  focus:outline-none"
            }`}
          >
            <option className="text-[#5F6165] capitalize">New</option>
          </select>
          <select
            onChange={(e) => handleFiltering(e)}
            className={`${
              state
                ? "bg-[#222] rounded-[22.5px] py-[10px] px-4 w-24  focus:outline-none"
                : "bg-[#FFFFFF] rounded-[22.5px] py-[10px] px-4 w-24  focus:outline-none"
            }`}
          >
            <option>All</option>
            <option className="text-[#5F6165] capitalize">toyota</option>
            <option className="text-[#5F6165] capitalize">suzuki</option>
            <option className="text-[#5F6165] capitalize">porsche</option>
            <option className="text-[#5F6165] capitalize">audi</option>
            <option className="text-[#5F6165] capitalize">mercedes</option>
            <option className="text-[#5F6165] capitalize">suzuki</option>
            <option className="text-[#5F6165] capitalize">minicooper</option>
          </select>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-2">
          <img src={icon} alt="icon/img" />
          <img src={filter} alt="filter/img" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((item, index) => {
          return (
            <div
              key={index}
              className={`${
                state
                  ? "bg-[#222]  p-6 rounded-2xl"
                  : "bg-[#FFFFFF]  p-6 rounded-2xl"
              }`}
            >
              <div className="flex items-center justify-between flex-col md:flex-row">
                <h1
                  className={`${
                    state
                      ? "font-bold text-white text-base md:text-lg mb-[4.5px]"
                      : "font-bold text-[#242731] text-base md:text-lg mb-[4.5px]"
                  }`}
                >
                  {item.title}
                </h1>
                <span
                  className="cursor-pointer text-[#A4A5A6]"
                  onClick={(e) => handleActive(e)}
                >
                  {item.icon}
                </span>
              </div>
              <p className="text-[#72767C] font-normal mb-[21px]">
                {item.text}
              </p>
              <img
                src={item.img}
                alt="bookingImg/img"
                className="mx-auto mb-[21px] object-fill"
              />
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="flex flex-col md:flex-row items-center">
                  {/*user Icon and text*/}
                  <div className="flex  items-center gap-1">
                    <img src={item.userIcon} alt="userIcon/img" />
                    <span className="font-normal text-lg text-[#72767C] mr-3">
                      {item.userText}
                    </span>
                  </div>
                  {/* rotate icon and text*/}
                  <div className="flex items-center gap-1">
                    <img src={item.vectorIcon} alt="userIcon/img" />
                    <span className="font-normal sm:text-xs md:text-lg text-[#72767C]">
                      {item.vectorText}
                    </span>
                  </div>
                </div>
                <div className="font-normal text-[#72767C]">
                  <span
                    className={`${
                      state
                        ? "text-white font-medium text-lg"
                        : "text-[#242731] font-medium text-lg"
                    }`}
                  >
                    {item.subText}
                  </span>
                  /d
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Booking;
