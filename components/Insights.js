import React from "react";
import { FaUsers, FaChartBar, FaBrain, FaRobot, FaLightbulb } from "react-icons/fa";

const MSE = 32.977660853373244;
const R2 = 0.44447978433607493;

export default function Insights({ data }) {
  if (!data || data.length === 0) return <p>Loading insights...</p>;

  const totalStudents = data.length;

  // Cluster distribution
  const clusterCount = {};
  data.forEach((s) => {
    if (s.cluster) clusterCount[s.cluster] = (clusterCount[s.cluster] || 0) + 1;
  });

  const clustersSummary = Object.entries(clusterCount).map(([cluster, count]) => (
    <p key={cluster} className="text-white font-medium">{cluster}: {count} students</p>
  ));

  // Correlation summary
  const corr = {
    comprehension: "positive",
    attention: "positive",
    focus: "moderate",
    retention: "positive",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {/* Total Students */}
      <div className="p-6 bg-gradient-to-r from-emerald-700 to-emerald-700 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition">
        <div className="flex items-center mb-4">
          <FaUsers className="text-white text-2xl mr-3" />
          <h3 className="text-white text-xl font-bold">Total Students</h3>
        </div>
        <p className="text-white text-3xl font-extrabold">{totalStudents}</p>
      </div>

      {/* Cluster Distribution */}
      <div className="p-6 bg-gradient-to-r from-emerald-700 to-emerald-700 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition">
        <div className="flex items-center mb-4">
          <FaChartBar className="text-white text-2xl mr-3" />
          <h3 className="text-white text-xl font-bold">Cluster Distribution</h3>
        </div>
        {clustersSummary}
      </div>

      {/* Correlations */}
      <div className="p-6 bg-gradient-to-r from-emerald-700 to-emerald-700 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition">
        <div className="flex items-center mb-4">
          <FaBrain className="text-white text-2xl mr-3" />
          <h3 className="text-white text-xl font-bold">Correlations</h3>
        </div>
        {Object.entries(corr).map(([skill, relation]) => (
          <p key={skill} className="text-white font-medium">{skill}: {relation}</p>
        ))}
      </div>

      {/* ML Metrics */}
      <div className="p-6 bg-gradient-to-r from-emerald-700 to-emerald-700 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition">
        <div className="flex items-center mb-4">
          <FaRobot className="text-white text-2xl mr-3" />
          <h3 className="text-white text-xl font-bold">ML Model Metrics</h3>
        </div>
        <p className="text-white font-medium">Mean Squared Error (MSE): {MSE.toFixed(2)}</p>
        <p className="text-white font-medium">R² Score: {R2.toFixed(2)}</p>
      </div>

      {/* Other Insights */}
      <div className="p-6 bg-gradient-to-r from-emerald-700 to-emerald-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition col-span-1 md:col-span-2 lg:col-span-1">
        <div className="flex items-center mb-4">
          <FaLightbulb className="text-white text-2xl mr-3" />
          <h3 className="text-white text-xl font-bold">Other Insights</h3>
        </div>
        <ul className="list-disc ml-4 text-white font-medium">
          <li>Top performing clusters have higher comprehension & attention.</li>
          <li>Students with low retention often need additional support.</li>
          <li>Engagement time correlates moderately with assessment score.</li>
        </ul>
      </div>
    </div>
  );
}
