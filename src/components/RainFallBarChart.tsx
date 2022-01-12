import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar
} from "recharts";
import ChartCard from "./ui-lib/ChartCard/ChartCard";
import { RAINFALL } from "../data/melb-monthly-rainfall";
import { getMonthNameByOrder } from "../utils/month-mapping";
import { TooltipContainerStyles } from "../constants/tooltip-container-styles";

const RainFallBarChart: React.FC = () => {
  return (
    <ChartCard heading="Melbourne 2019 monthly rainfall">
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={RAINFALL["2019"]} 
        /*
        // @ts-ignore */
        fontSize={14}>
          <CartesianGrid
            vertical={false}
            stroke="#d6d9da"
            strokeDasharray="3 3"
          />
          <XAxis
            dataKey="month"
            tickFormatter={getMonthNameByOrder}
            tickLine={false}
          />
          <YAxis unit="ml" width={35} axisLine={false} tickLine={false} />
          <Tooltip
            labelFormatter={getMonthNameByOrder}
            cursor={false}
            contentStyle={TooltipContainerStyles}
          />
          <Bar dataKey="rainfall" fill="#3066BE" unit="ml" name="Rainfall" />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

export default RainFallBarChart;
