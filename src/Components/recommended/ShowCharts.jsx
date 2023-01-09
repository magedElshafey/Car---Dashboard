import React from "react";
import ShowLineChart from "../lineChart/ShowLineChart";
import ShowBarChart from "../barChart/ShowBarChart";
const ShowCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 gap-10">
      <ShowBarChart />
      <ShowLineChart/>
    </div>
  );
};

export default ShowCharts;
