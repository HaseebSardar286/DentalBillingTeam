"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    value: 100,
    date: "2022-01-01",
  },
  {
    value: 50,
    date: "2022-01-02",
  },
  {
    value: 300,
    date: "2022-01-03",
  },
  {
    value: 100,
    date: "2022-01-04",
  },
  {
    value: 500,
    date: "2022-01-05",
  },
];

export default function Chart() {
  return (
    <>
      <div className="container">
        <h2 className="fw-bold">Visitors</h2>
      </div>

      <ResponsiveContainer
        width="100%"
        height={300}
        className="mt-3 shadow-lg rounded-3"
      >
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" strokeWidth={1} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}
