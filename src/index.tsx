import React, { Component } from "react";
import { render } from "react-dom";
import DemographicPieChart from "./components/DemographicPieChart";
import DemographicBarChart from "./components/DemographicBarChart";
import RainFallBarChart from "./components/RainFallBarChart";
import TemperatureLineChart from "./components/TemperatureLineChart";
import RainFallAreaChart from "./components/RainFallAreaChart";
import RainFallTemperatureComposedChart from "./components/RainFallTemperatureComposedChart";
import "./style.css";

const App: React.FC = () => {
  return (
    <div>
      <RainFallBarChart />
      <RainFallAreaChart />

      <TemperatureLineChart />

      <RainFallTemperatureComposedChart />

      <DemographicPieChart />
      <DemographicBarChart />
    </div>
  );
};

render(<App />, document.getElementById("root"));
