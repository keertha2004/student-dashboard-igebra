import React, { useEffect, useState } from "react";
import {
  RadarChart as ReRadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function RadarChart({ data, selectedStudent }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (selectedStudent && data) {
      const student = data.find((s) => s.name === selectedStudent);
      if (student) {
        const radarData = [
          { skill: "Comprehension", value: student.comprehension },
          { skill: "Attention", value: student.attention },
          { skill: "Focus", value: student.focus },
          { skill: "Retention", value: student.retention },
          { skill: "Assessment", value: student.assessment_score },
        ];
        setChartData(radarData);
      }
    }
  }, [selectedStudent, data]);

  if (!selectedStudent) return <p> Select a student to view profile.</p>;

  return (
    <div className="p-4 bg-emerald-50 rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold mb-2 text-emerald-700">{selectedStudent} - Profile</h2>
      <ResponsiveContainer width="100%" height={300}>
        <ReRadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="skill" />
          <PolarRadiusAxis />
          <Radar name={selectedStudent} dataKey="value" stroke="#d3dfb5ff" fill="#d9dbc3ff" fillOpacity={0.6} />
          <Legend />
        </ReRadarChart>
      </ResponsiveContainer>
    </div>
  );
}
