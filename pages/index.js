import { useState } from "react";
import studentsData from "../public/students_processed.json";

import OverviewStats from "../components/OverviewStats";
import BarChart from "../components/BarChart";
import ScatterChart from "../components/ScatterChart";
import RadarChart from "../components/RadarChart";
import StudentTable from "../components/StudentTable";
import Insights from "../components/Insights";
import { FaChartBar, FaBrain, FaUsers, FaRobot, FaLightbulb } from "react-icons/fa";

export default function Dashboard() {
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <div className="min-h-screen bg-beige-50 text-gray-800 p-8">
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-emerald-700 drop-shadow-lg">
          📊 Student Dashboard
        </h1>
        <p className="text-gray-600 mt-2 tracking-wide">
          Insights, analytics, and performance tracking
        </p>
      </header>

      {/* Overview Stats */}
      <section className="mb-12 bg-beige-100 p-6 rounded-2xl shadow-lg border-2 border-emerald-700">
        <OverviewStats data={studentsData} />
      </section>

 {/* Charts */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-gradient-to-r from-beige-100 to-emerald-700 p-6 rounded-2xl shadow-lg border-2 border-emerald-700 hover:-translate-y-1 hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center mb-2">
            <FaChartBar className="text-emerald-700 mr-2" />
            <h3 className="font-bold text-emerald-700 text-lg">Bar Chart</h3>
          </div>
          <BarChart data={studentsData} />
        </div>

       <div className="bg-gradient-to-r from-beige-100 to-emerald-700 p-6 rounded-2xl shadow-lg border-2 border-emerald-700 hover:-translate-y-1 hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center mb-2">
            <FaBrain className="text-emerald-700 mr-2" />
            <h3 className="font-bold text-emerald-700 text-lg">Scatter Chart</h3>
          </div>
          <ScatterChart data={studentsData} />
        </div>
<div className="bg-gradient-to-r from-beige-100 to-emerald-700 p-6 rounded-2xl shadow-lg border-2 border-emerald-700 hover:-translate-y-1 hover:scale-[1.02] transition-transform duration-300">
          <div className="mb-4 flex items-center">
            <label className="font-semibold text-emerald-700 mr-2">
              Select Student for Radar Chart:
            </label>
            <select
              className="border border-gray-300 bg-white text-emerald-700 p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
              value={selectedStudent || ""}
              onChange={(e) => setSelectedStudent(e.target.value)}
            >
              <option value="">--Select--</option>
              {studentsData.map((s) => (
                <option key={s.student_id} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
          <RadarChart data={studentsData} selectedStudent={selectedStudent} />
        </div>
      </section>

      {/* Student Table */}
      <section className="mb-12 bg p-6 rounded-2xl shadow-lg border-2 border-emerald-700">
        <StudentTable data={studentsData} />
      </section>

      {/* Insights */}
      <section className="bg p-6 rounded-2xl shadow-lg border-2 border-emerald-700">
        <Insights data={studentsData} />
      </section>
    </div>
  );
}
