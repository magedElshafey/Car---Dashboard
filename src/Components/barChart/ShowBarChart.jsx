import React from "react";
import BarChart from "./BarChart";
import Tabs from "../tabs/Tabs";
import { useSelector } from "react-redux";
const ShowBarChart = () => {
  const state = useSelector((state) => state.SwitchMode.darkMode);
  return (
    <div
      className={`${
        state
          ? "py-4 px-4 bg-[#222] rounded-xl"
          : "py-4 px-4 bg-[#FFFFFF] rounded-xl"
      }`}
    >
      <h1 className=" text-xl mb-6">
        <span className="font-bold">miels</span> statistics
      </h1>
      <Tabs isReversed={false} bg="bg-[#2884FF]" title={"256 miels"} />
      <BarChart />
    </div>
  );
};

export default ShowBarChart;
