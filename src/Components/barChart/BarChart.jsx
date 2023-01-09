import React from "react";
import { commonProperties } from "../../Data/Data.js";
import { ResponsiveBar } from "@nivo/bar";
const BarChart = () => {
  return (
    <div style={{height: 400 }}>
      <ResponsiveBar
      
        {...commonProperties}
        colors={[
          "#F4F5F9",
          "#F4F5F9",
          "#2884FF",
          "#F4F5F9",
          "#F4F5F9",
          "#F4F5F9",
          "#F4F5F9",
        ]}
        colorBy ='index'
      />
    </div>
  );
};

export default BarChart;
