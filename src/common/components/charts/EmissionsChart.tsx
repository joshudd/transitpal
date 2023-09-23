import { timeIntervals } from '@/pages';
import React, { PureComponent } from 'react';
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
} from 'recharts';
import { AxisDomainItem } from 'recharts/types/util/types';

const data = [
  {
    date: '12/3/1999',
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

export default function EmissionsChart(props: { value: number }) {
    return (
      <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 30,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name"  type="number" domain={[0, props.value]}/>
            {/* <XAxis dataKey="id" /> */}
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="pv" stroke="#00a5cf" fill="#82ca9d" />
          </AreaChart>
        </ResponsiveContainer>
    );
  }

