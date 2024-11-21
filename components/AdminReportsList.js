"use client";

import React, { useState, useEffect } from "react";

const AdminReportsList = () => {
  // Sample report data
  const [reports, setReports] = useState([
    {
      id: 1,
      userId: 1,
      username: "Pieceofaul",
      reason: "Inappropriate content",
      date: "2023-10-01",
    },
    {
      id: 2,
      userId: 2,
      username: "BuSiti",
      reason: "Spam",
      date: "2023-10-05",
    },
    // Add more reports as needed
  ]);

  const handleTakeAction = (reportId) => {
    // Implement action logic
    alert(`Action taken on report ID ${reportId}.`);
    // Optionally remove report from the list
    setReports(reports.filter((report) => report.id !== reportId));
  };

  return (
    <main className="container mx-auto px-6 md:px-12 py-24">
      <h2 className="text-4xl font-bold text-center text-[#0C1E28] mb-8">
        Reports Management
      </h2>
      <div className="bg-[#D9D9D9] rounded-2xl p-6 shadow-lg overflow-x-auto">
        <table className="min-w-full bg-white rounded-2xl overflow-hidden">
          <thead className="bg-[#0C1E28] text-white">
            <tr>
              <th className="py-4 px-6 text-left text-xl font-bold">Report ID</th>
              <th className="py-4 px-6 text-left text-xl font-bold">User</th>
              <th className="py-4 px-6 text-left text-xl font-bold">Reason</th>
              <th className="py-4 px-6 text-left text-xl font-bold">Date</th>
              <th className="py-4 px-6 text-left text-xl font-bold">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {reports.map((report) => (
              <tr key={report.id} className="border-b">
                <td className="py-4 px-6 text-xl">{report.id}</td>
                <td className="py-4 px-6 text-xl">
                  {report.username} (ID: {report.userId})
                </td>
                <td className="py-4 px-6 text-xl">{report.reason}</td>
                <td className="py-4 px-6 text-xl">{report.date}</td>
                <td className="py-4 px-6">
                  <div className="flex flex-wrap space-x-2">
                    <button
                      onClick={() => handleTakeAction(report.id)}
                      className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300 mb-2"
                    >
                      Take Action
                    </button>
                    <button
                      onClick={() =>
                        window.location.href = `/admin/users/${report.userId}`
                      }
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 mb-2"
                    >
                      View User
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {reports.length === 0 && (
              <tr>
                <td colSpan="5" className="py-4 px-6 text-center">
                  No reports found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default AdminReportsList;
