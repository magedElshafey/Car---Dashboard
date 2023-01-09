import React from "react";
import LineChart from "./LineChart";
import Tabs from "../tabs/Tabs";
import { useSelector } from "react-redux";
const ShowLineChart = () => {
  const state = useSelector((state) => state.SwitchMode.darkMode);
  return (
    <div
      className={`${
        state
          ? "py-4 px-2 md:px-4 bg-[#222] rounded-xl"
          : "py-4 px-2 md:px-4 bg-[#FFFFFF] rounded-xl"
      }`}
    >
      <h1 className=" text-xl mb-6">
        <span className="font-bold">car</span> statistics
      </h1>
      <Tabs isReversed={true} bg="bg-[#FF764C]" title={"20 february 2022"} />
      <LineChart />
    </div>
  );
};

export default ShowLineChart;
