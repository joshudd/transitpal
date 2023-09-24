import { timeIntervals } from "@/pages";
import React, { PureComponent } from "react";
import { getEmissionsSaved, getDaysArr } from "@/common/utils/tripUtil"
import { Step, Trip } from "../../types/data";
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
/*
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
*/
//let data[] = [];

interface ChartProps {
  value: number;
  id: string;
  trips2: Trip[]
}

export default function EmissionsChart ({ value, id, trips2 }: ChartProps) {
  //let days = getDaysArr(trips2);
  let cum: number[] = []; // each element represents a days total of savings, from least to most recent
  let k;
  if (trips2.length>6) {
    k=6;
  } else {
    k=trips2.length-1;
  }
  //trips2 = trips2.toReversed();
  let i;  
  for (i=k; i>=0 && trips2[i].date >= trips2[k].date - 7*24*60*60; i--) {
    cum[i] = getEmissionsSaved([trips2[i]], 1);
  }
  for (let q=0; q<cum.length; q++) {
    console.log(cum[q]);
  }
  while (i != -1) {
    cum[i] = 0;
    i--;
  }
  //cum = cum.toReversed();
  let data;
  if (trips2.length == 0) {
    data = [{date: "Nothing to show here!"}]
  } else {
  data = [
    {
      name: 0,
      //uv: 4000,
      pv: Math.floor(cum[0]),
      amt: 0,
      unit: "kg",
    },
    {
      name: 1,
      //uv: 3000,
      pv: Math.floor(cum[1]),
      amt: 2210,
      unit: "kg",
    },
    {
      name: 2,
      //uv: 2000,
      pv: Math.floor(cum[2]),
      amt: 2290,
      unit: "kg",
    },
    {
      name: 3,
      //uv: 2780,
      pv: Math.floor(cum[3]),
      amt: 2000,
      unit: "kg",
    },
    {
      name: 4,
      //uv: 1890,
      pv: Math.floor(cum[4]),
      amt: 2181,
      unit: "kg",
    },
    {
      name: 5,
      //uv: 2390,
      pv: Math.floor(cum[5]),
      amt: 2500,
      unit: "kg",
    },
    {
      date: new Date().toLocaleDateString(),
      name: 6,
      //uv: 3490,
      pv: Math.floor(cum[6]),
      amt: 2100,
      unit: "kg",
    }
  ]
}
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
        <Tooltip contentStyle={{borderRadius: '10px'}} />
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
