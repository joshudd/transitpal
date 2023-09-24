import { timeIntervals } from "@/pages";
import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";
import { AxisDomainItem } from "recharts/types/util/types";

const data = [
  {
    date: "12/3/1999",
    name: 0,
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 1,
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 2,
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 3,
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 4,
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 5,
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 6,
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

interface ChartProps {
  value: number;
  id: string;
}
export default function EmissionsChart ({ value, id }: ChartProps) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart
        width={500}
        height={200}
        data={data}
        syncId={id}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          {/* <linearGradient id="colorUv" x1="1" y1="1" x2="0" y2="0">
            <stop offset="100%" stopColor="#FB3640" stopOpacity={1} />
            <stop offset="100%" stopColor="#FB3640" stopOpacity={1} />
          </linearGradient> */}
        </defs>

        <XAxis 
          dataKey="date" 
          fontSize={12}
        />
        {/* <XAxis dataKey="id" /> */}
        {/* <YAxis /> */}
        <Tooltip />
        <Area
          type="monotone"
          dataKey="pv"
          stroke="#9F2E34"
          strokeWidth={3.5}
          fill="#FB3640"
          fillOpacity={1}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
