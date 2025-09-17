import React, { useEffect, useState } from "react";
import {
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function BarChart({ data }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      const limitedData = data
        .sort((a, b) => b.assessment_score - a.assessment_score)
        .slice(0, 10)
        .map((s) => ({
          name: s.name,
          comprehension: s.comprehension,
          attention: s.attention,
          focus: s.focus,
          retention: s.retention,
          assessment_score: s.assessment_score,
        }));
      setChartData(limitedData);
    }
  }, [data]);

  return (
    <div className="p-4 bg-emerald-50 rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold mb-2 text-emerald-900">Skill vs Assessment Score</h2>
      <ResponsiveContainer width="100%" height={300}>
        <ReBarChart data={chartData} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* Dark distinct colors for each bar */}
          <Bar dataKey="comprehension" fill="#064e3b" />  {/* Dark green */}
          <Bar dataKey="attention" fill="#1e3a8a" />      {/* Dark blue */}
          <Bar dataKey="focus" fill="#78350f" />          {/* Dark brown */}
          <Bar dataKey="retention" fill="#0f766e" />      {/* Teal-dark */}
          <Bar dataKey="assessment_score" fill="#6b21a8" />{/* Dark purple */}
        </ReBarChart>
      </ResponsiveContainer>
    </div>
  );
}
