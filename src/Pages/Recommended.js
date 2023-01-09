import React from "react";
import ShowRecommend from "../Components/recommended/ShowRecommend.jsx";
import ShowElipse from "../Components/recommended/ShowElipse.jsx";
import ShowCharts from "../Components/recommended/ShowCharts.jsx";
const Recommended = () => {
  return (
    <>
      <ShowElipse />
      <ShowCharts />
      <ShowRecommend />
    </>
  );
};

export default Recommended;
