import React from "react";

export default function OverviewStats({ data }) {
  if (!data || data.length === 0) return <p>Loading stats...</p>;

  const total = data.length;
  const avg = {
    comprehension: (data.reduce((sum, s) => sum + s.comprehension, 0) / total).toFixed(1),
    attention: (data.reduce((sum, s) => sum + s.attention, 0) / total).toFixed(1),
    focus: (data.reduce((sum, s) => sum + s.focus, 0) / total).toFixed(1),
    retention: (data.reduce((sum, s) => sum + s.retention, 0) / total).toFixed(1),
    assessment_score: (data.reduce((sum, s) => sum + s.assessment_score, 0) / total).toFixed(1),
    engagement_time: (data.reduce((sum, s) => sum + s.engagement_time, 0) / total).toFixed(1),
    cluster: (() => {
      const clusterCount = {};
      data.forEach((s) => {
        clusterCount[s.cluster] = (clusterCount[s.cluster] || 0) + 1;
      });
      return Object.entries(clusterCount).sort((a, b) => b[1] - a[1])[0][0];
    })(),
  };

  // Solid green background for all cards
  const cardBg = "bg-emerald-700"; // deep green
  const textColor = "text-beige-200"; // light beige text

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6">
      {Object.entries(avg).map(([key, value]) => (
        <div
          key={key}
          className={`${cardBg} p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-[1.03]`}
        >
          <p className={`uppercase text-sm ${textColor}`}>{key.replace("_", " ")}</p>
          <p className={`text-2xl font-bold mt-2 ${textColor}`}>{value}</p>
        </div>
      ))}
    </div>
  );
}
