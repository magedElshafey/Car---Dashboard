import React from "react";
import { elipseApi } from "../../Data/Data";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useSelector } from "react-redux";
const ShowElipse = () => {
  const state = useSelector((state) => state.SwitchMode.darkMode);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
      {elipseApi.map((item, index) => {
        return (
          <div
            key={index}
            className={`${
              state && item.background === "bg-white"
                ? "bg-[#222] py-5 px-5 rounded-2xl "
                : `${item.background}  py-5 px-5 rounded-2xl `
            }`}
          >
            <div
              className={`${item.imgBackground} w-9 h-9 rounded-[50%] mx-auto flex items-center justify-center mb-[10px] `}
            >
              <img src={item.img} alt="img/img" />
            </div>
            <h2
              className={`${
                state && item.titleColor === "text-black"
                  ? "text-white text-center font-bold text-2xl mb-7 "
                  : `${item.titleColor} text-center font-bold text-2xl mb-7`
              }`}
            >
              {item.title}
            </h2>
            <div className="w-14 md:w-28  mx-auto">
              <CircularProgressbar
                value={item.percentage}
                text={item.text}
                counterClockwise={false}
                strokeWidth={8}
                circleRatio={0.8}
                styles={buildStyles({
                  rotation: 0.6,
                  strokeLinecap: "butt",
                  pathColor: item.color,
                  textColor:
                    state && item.textColor === "black"
                      ?'white'
                      : item.textColor,
                  trailColor: "#ddd",
                })}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShowElipse;
