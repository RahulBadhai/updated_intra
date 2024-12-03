"use client";
import React, { useState } from "react";

const LeaveManagement = () => {
  // Sample leave data
  const [leaves, setLeaves] = useState([
    { type: "Annual Leave", from: "21 Jan 2024", to: "25 Jan 2024", days: 5, status: "Approved", approvedBy: "Doglas Martini" },
    { type: "Annual Leave", from: "15 Mar 2024", to: "17 Mar 2024", days: 3, status: "Approved", approvedBy: "Doglas Martini" },
    { type: "Annual Leave", from: "15 Nov 2024", to: "15 Nov 2024", days: 1, status: "New", approvedBy: "Warren Morales" },
    { type: "Casual Leave", from: "12 Apr 2024", to: "16 Apr 2024", days: 5, status: "Declined", approvedBy: "Doglas Martini" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  // Filter and search functionality
  const filteredLeaves = leaves
    .filter((leave) => leave.type.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (!sortField) return 0;
      if (sortDirection === "asc") {
        return a[sortField] > b[sortField] ? 1 : -1;
      }
      return a[sortField] < b[sortField] ? 1 : -1;
    });

  // Sorting handler
  const handleSort = (field) => {
    setSortField(field);
    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h1 className="text-xl font-bold">Leaves</h1>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">Add Leave</button>
        </div>

        {/* Leave Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
          {[
            { title: "Annual Leaves", count: 5, remaining: 7, color: "bg-gray-900" },
            { title: "Medical Leaves", count: 11, remaining: 1, color: "bg-blue-600" },
            { title: "Casual Leaves", count: 2, remaining: 10, color: "bg-purple-600" },
            { title: "Other Leaves", count: 7, remaining: 5, color: "bg-pink-600" },
          ].map((card, index) => (
            <div key={index} className={`p-4 rounded-lg text-white ${card.color}`}>
              <h2 className="text-lg font-semibold">{card.title}</h2>
              <p className="text-4xl font-bold">{card.count}</p>
              <p className="text-sm">Remaining Leaves: {card.remaining}</p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-md p-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div>
              <button className="bg-gray-200 px-4 py-2 rounded-md">Export</button>
            </div>
          </div>

          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border" onClick={() => handleSort("type")}>Leave Type</th>
                <th className="p-2 border" onClick={() => handleSort("from")}>From</th>
                <th className="p-2 border">To</th>
                <th className="p-2 border">No of Days</th>
                <th className="p-2 border">Status</th>
                <th className="p-2 border">Approved By</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeaves.map((leave, index) => (
                <tr key={index} className="odd:bg-gray-50">
                  <td className="p-2 border">{leave.type}</td>
                  <td className="p-2 border">{leave.from}</td>
                  <td className="p-2 border">{leave.to}</td>
                  <td className="p-2 border">{leave.days}</td>
                  <td className="p-2 border">{leave.status}</td>
                  <td className="p-2 border">{leave.approvedBy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaveManagement;
