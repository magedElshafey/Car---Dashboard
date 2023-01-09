import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { commonLineProp } from "../../Data/Data.js";
const LineChart = () => {
  return (
    <div style={{ height: 400 }}>
      <ResponsiveLine {...commonLineProp} />
    </div>
  );
};

export default LineChart;
