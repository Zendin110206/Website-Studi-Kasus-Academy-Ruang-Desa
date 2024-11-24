"use client";

import React, { useState } from "react";
import Link from "next/link";

// AdminReportsList Component
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
    alert(`Action has been taken on report ID ${reportId}.`);
    // Optionally: remove report from list
    setReports(reports.filter((report) => report.id !== reportId));
  };

  // Define button styles for consistency
  const getButtonClasses = (variant) => {
    const baseClasses =
      "text-white px-3 py-1 rounded-md transition duration-300 text-sm mb-2 sm:mb-0";
    const variants = {
      primary: "bg-blue-600 hover:bg-blue-700",
      warning: "bg-yellow-500 hover:bg-yellow-600",
      orange: "bg-orange-500 hover:bg-orange-600",
      danger: "bg-red-600 hover:bg-red-700",
      secondary: "bg-gray-300 hover:bg-gray-400",
      success: "bg-green-600 hover:bg-green-700",
    };
    return `${baseClasses} ${variants[variant] || variants.primary}`;
  };

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="mt-20 sm:mt-40 text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
        Reports Management
      </h2>
      {/* Display table on medium and larger screens */}
      <div className="hidden md:block bg-[#D9D9D9] rounded-2xl p-4 sm:p-6 shadow-lg overflow-x-auto">
        <table className="min-w-full bg-white rounded-2xl overflow-hidden">
          <thead className="bg-[#0C1E28] text-white">
            <tr>
              <th className="py-4 px-6 text-left text-lg font-semibold">Report ID</th>
              <th className="py-4 px-6 text-left text-lg font-semibold">User</th>
              <th className="py-4 px-6 text-left text-lg font-semibold">Reason</th>
              <th className="py-4 px-6 text-left text-lg font-semibold">Date</th>
              <th className="py-4 px-6 text-left text-lg font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {reports.map((report) => (
              <tr key={report.id} className="border-b hover:bg-gray-50">
                <td className="py-4 px-6 text-lg">{report.id}</td>
                <td className="py-4 px-6 text-lg">
                  {report.username} (ID: {report.userId})
                </td>
                <td className="py-4 px-6 text-lg">{report.reason}</td>
                <td className="py-4 px-6 text-lg">{report.date}</td>
                <td className="py-4 px-6">
                  <div className="flex flex-wrap space-x-2">
                    <button
                      onClick={() => handleTakeAction(report.id)}
                      className={getButtonClasses("success")}
                    >
                      Take Action
                    </button>
                    <Link
                      href={`/admin/users/${report.userId}`}
                      className={getButtonClasses("primary")}
                    >
                      View User
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
            {reports.length === 0 && (
              <tr>
                <td colSpan="5" className="py-4 px-6 text-center text-lg">
                  No reports found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* Display cards on small screens */}
      <div className="md:hidden space-y-4">
        {reports.length > 0 ? (
          reports.map((report) => (
            <div
              key={report.id}
              className="bg-[#D9D9D9] rounded-2xl p-4 shadow-lg"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-gray-800">
                  Report ID: {report.id}
                </h3>
                <p className="text-sm text-gray-600">{report.date}</p>
              </div>
              <p className="text-lg text-gray-700 mb-2">
                <span className="font-semibold">User:</span> {report.username} (ID: {report.userId})
              </p>
              <p className="text-lg text-gray-700 mb-4">
                <span className="font-semibold">Reason:</span> {report.reason}
              </p>
              <div className="flex flex-wrap space-x-2">
                <button
                  onClick={() => handleTakeAction(report.id)}
                  className={getButtonClasses("success")}
                >
                  Take Action
                </button>
                <Link
                  href={`/admin/users/${report.userId}`}
                  className={getButtonClasses("primary")}
                >
                  View User
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-lg text-gray-700">No reports found.</p>
        )}
      </div>
    </main>
  );
};

export default AdminReportsList;
