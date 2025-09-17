import React, { useEffect, useState } from "react";
import {
  ScatterChart as ReScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ScatterChart({ data }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      const limitedData = data.slice(0, 50); // adjust sample size
      setChartData(limitedData);
    }
  }, [data]);

  return (
    <div className="p-4 bg-emerald-50 rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold mb-2 text-emerald-700">Attention vs Assessment Score</h2>
      <ResponsiveContainer width="100%" height={300}>
        <ReScatterChart margin={{ top: 20, right: 20, bottom: 10, left: 0 }}>
          <CartesianGrid />
          <XAxis type="number" dataKey="attention" name="Attention" />
          <YAxis type="number" dataKey="assessment_score" name="Assessment Score" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter name="Students" data={chartData} fill="#d6dfc7ff" />
        </ReScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
