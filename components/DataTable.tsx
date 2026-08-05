"use client";

import { useState } from "react";

type DataTableProps = {
  data: any[];
};

export default function DataTable({ data }: DataTableProps) {
  const [search, setSearch] = useState("");
  const filteredData = data.filter((row) => {
  return (
    row["Region"]?.toString().toLowerCase().includes(search.toLowerCase()) ||
    row["Order Priority"]?.toString().toLowerCase().includes(search.toLowerCase()) ||
    row["Order ID"]?.toString().toLowerCase().includes(search.toLowerCase())
  );
});
  return (
    <div className="mt-10 w-full max-w-6xl overflow-x-auto">
      <input
  type="text"
  placeholder="Search by Region, Priority, Order ID..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="mb-4 w-full rounded-lg border border-gray-600 bg-slate-900 p-3 text-white outline-none focus:border-blue-500"
/>
      <table className="w-full border border-gray-700">
        <thead className="bg-slate-800">
          <tr>
            <th className="border p-2">Row ID</th>
            <th className="border p-2">Order ID</th>
            <th className="border p-2">Order Priority</th>
            <th className="border p-2">Sales</th>
          </tr>
        </thead>

        <tbody>
          {filteredData.slice(0, 10).map((row, index) => (
            <tr key={index}>
              <td className="border p-2">{row["Row ID"]}</td>
              <td className="border p-2">{row["Order ID"]}</td>
              <td className="border p-2">{row["Order Priority"]}</td>
              <td className="border p-2">{row["Sales"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}