import React, { useState } from "react";
import BarChart from "./component/BarChart";
import LineChart from "./component/LineChart";
import { UserData } from "./data/ChartsData";
import "./Charts.css";
import PieChart from "./component/PieChart";

const Charts = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        labels: "User Gain",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["red", "blue", "green", "yellow", "orange"],
      },
    ],
  });

  return (
    <body>
      <div className="chart-width">
        <BarChart chartData={userData} />
      </div>
      <div className="chart-width">
        <LineChart chartData={userData} />
      </div>
      <div className="chart-width">
        <PieChart chartData={userData} />
      </div>
    </body>
  );
  // <div className="chart-width">
  //   <BarChart chartData={userData}/>
  // </div>
};

export default Charts;
