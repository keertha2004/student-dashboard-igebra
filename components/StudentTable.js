import React, { useState, useEffect } from "react";

export default function StudentTable({ data }) {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [page, setPage] = useState(0); // Pagination page
  const rowsPerPage = 10;

  useEffect(() => {
    if (data) setStudents(data);
  }, [data]);

  const handleSort = (key) => {
    const order = sortBy === key && sortOrder === "asc" ? "desc" : "asc";
    setSortBy(key);
    setSortOrder(order);
    const sorted = [...students].sort((a, b) => {
      if (a[key] < b[key]) return order === "asc" ? -1 : 1;
      if (a[key] > b[key]) return order === "asc" ? 1 : -1;
      return 0;
    });
    setStudents(sorted);
  };

  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  // Slice data for pagination
  const paginatedData = filtered.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

  return (
    <div className="mt-6 p-4 bg-emerald-50 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-emerald-700">
        Students Table
      </h2>
      <input
        type="text"
        placeholder="Search by name..."
        className="mb-4 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-emerald-400"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(0); // Reset page when search changes
        }}
      />

      <div className="overflow-x-auto border rounded shadow-inner">
        <table className="min-w-full border-collapse text-sm">
          <thead className="bg-emerald-300 sticky top-0 z-10">
            <tr>
              {[
                "name",
                "class",
                "comprehension",
                "attention",
                "focus",
                "retention",
                "assessment_score",
                "engagement_time",
              ].map((col) => (
                <th
                  key={col}
                  className="border p-2 cursor-pointer text-left text-gray-800"
                  onClick={() => handleSort(col)}
                >
                  {col.replace("_", " ").toUpperCase()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((s, idx) => (
              <tr
                key={s.student_id}
                className={`${
                  idx % 2 === 0 ? "bg-emerald-700" : "bg-beige-100"
                } hover:bg-emerald-200 transition`}
              >
                <td className="border p-2">{s.name}</td>
                <td className="border p-2">{s.class}</td>
                <td className="border p-2">{s.comprehension}</td>
                <td className="border p-2">{s.attention}</td>
                <td className="border p-2">{s.focus}</td>
                <td className="border p-2">{s.retention}</td>
                <td className="border p-2">{s.assessment_score}</td>
                <td className="border p-2">{s.engagement_time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between mt-2">
        <button
          className="px-4 py-1 bg-emerald-300 text-gray-800 rounded disabled:opacity-50"
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>
        <span className="text-gray-700">
          Page {page + 1} of {Math.ceil(filtered.length / rowsPerPage)}
        </span>
        <button
          className="px-4 py-1 bg-emerald-300 text-gray-800 rounded disabled:opacity-50"
          disabled={(page + 1) * rowsPerPage >= filtered.length}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
