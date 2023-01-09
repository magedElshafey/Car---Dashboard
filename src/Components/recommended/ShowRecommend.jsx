import React from "react";
import { recommendedCarsApi } from "../../Data/Data";

const ShowRecommend = () => {
  return (
    <div className=" mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {recommendedCarsApi.map((item, index) => {
        return (
          <div
            key={index}
            className={`${item.backGround} py-4 px-4 rounded-2xl`}
          >
            <div className="flex items-center mb-[12.5px] flex-col md:flex-row">
              <img src={item.vector} alt="vector/img" className="mr-[11.8px]" />
              <h2 className="text-[#242731] font-bold text-xs md:text-base">
                {item.text}
              </h2>
            </div>
            <img
              src={item.img}
              alt="recommended/img"
              className=" w-64 h-28 object-fill mx-auto mt-3"
            />
            <h1 className="text-[#1F2128] font-bold sm:text-base  md:text-xl mb-2">
              {item.title}
            </h1>
            <div className="flex items-center justify-between flex-col lg:flex-row gap-2">
              <div className="flex items-center gap-2 md:gap-3 ">
                <span className="text-sm text-[#72767C]">
                {item.subText}
                </span>
                {item.icons.map((item, index) => {
                  return (
                    <img
                      key={index}
                      src={item.icon}
                      alt="icon/img"
                     
                    />
                  );
                })}
              </div>
              <span className="text-sm text-[#72767C]">{item.price}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShowRecommend;
