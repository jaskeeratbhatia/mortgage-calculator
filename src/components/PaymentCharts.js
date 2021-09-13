import React from "react";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  BarChart,
  Legend,
} from "recharts";
import { colors } from "../globals/theme";

export const PaymentCharts = (props) => {
  return (
    <>
      <div className="container-fluid">
        <h2 className="diagram-heading">Payment Diagrams</h2>
        <div className="row justify-content-center justify-content-md-around mb-3 mt-3">
          <AreaChart
            className='chart-container'
            width={500}
            height={250}
            data={props.graphData}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={colors.RBC_YELLOW} stopOpacity={1} />
                <stop offset="95%" stopColor={colors.RBC_YELLOW} stopOpacity={0.6} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" tick={{ stroke: colors.RBC_WHITE }} />
            <YAxis tick={{ stroke: colors.RBC_WHITE }} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="principal"
              stroke={colors.RBC_YELLOW}
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>

          <BarChart
            className='chart-container'
            width={250}
            height={250}
            data={props.barData}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="totalCost" tick={{ stroke: colors.RBC_WHITE }} />
            <YAxis tick={{ stroke: colors.RBC_WHITE }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="principal" fill={colors.RBC_YELLOW} />
            <Bar dataKey="interest" fill={colors.RBC_WHITE} />
          </BarChart>
        </div>
      </div>
    </>
  );
};
