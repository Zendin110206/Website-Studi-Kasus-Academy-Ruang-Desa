"use client";

import React, { useState, useEffect } from "react";

const AdminUserDetail = ({ userId }) => {
  // Sample user data
  const [user, setUser] = useState({
    id: userId,
    username: "User" + userId,
    email: "user" + userId + "@example.com",
    isBlocked: false,
    reportCount: 2,
    reports: [
      {
        id: 1,
        reason: "Inappropriate content",
        date: "2023-10-01",
      },
      {
        id: 2,
        reason: "Spam",
        date: "2023-10-05",
      },
    ],
  });

  const handleResetPassword = () => {
    // Implement reset password logic
    alert(`Password for user ID ${userId} has been reset.`);
  };

  const handleBlockUser = () => {
    // Implement block user logic
    const blockDays = prompt("Enter number of days to block the user:", "1");
    if (blockDays) {
      setUser({ ...user, isBlocked: true });
      alert(`User ID ${userId} has been blocked for ${blockDays} day(s).`);
    }
  };

  const handleDeleteUser = () => {
    // Implement delete user logic
    const confirmDelete = confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
      // Redirect to user list after deletion
      alert(`User ID ${userId} has been deleted.`);
      window.location.href = "/admin/users";
    }
  };

  return (
    <main className="container mx-auto px-6 md:px-12 py-24">
      <h2 className="text-4xl font-bold text-center text-[#0C1E28] mb-8">
        User Details
      </h2>
      <div className="bg-[#F2F2F2] rounded-2xl p-6 shadow-lg">
        {/* User Information */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-[#0C1E28] mb-4">
            {user.username}
          </h3>
          <p className="text-xl text-gray-700 mb-2">Email: {user.email}</p>
          <p className="text-xl text-gray-700 mb-2">
            Status:{" "}
            {user.isBlocked ? (
              <span className="text-red-600 font-bold">Blocked</span>
            ) : (
              "Active"
            )}
          </p>
          <p className="text-xl text-gray-700 mb-2">
            Reports: {user.reportCount}
          </p>
          {/* Actions */}
          <div className="flex flex-wrap space-x-2 mt-4">
            <button
              onClick={handleResetPassword}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 mb-2"
            >
              Reset Password
            </button>
            <button
              onClick={handleBlockUser}
              className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition duration-300 mb-2"
            >
              Block User
            </button>
            <button
              onClick={handleDeleteUser}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300 mb-2"
            >
              Delete User
            </button>
          </div>
        </div>
        {/* Reports */}
        <div>
          <h3 className="text-2xl font-bold text-[#0C1E28] mb-4">
            Reports Against User
          </h3>
          {user.reports.length > 0 ? (
            <ul className="space-y-4">
              {user.reports.map((report) => (
                <li key={report.id} className="bg-white rounded-lg p-4 shadow">
                  <p className="text-xl font-bold text-gray-800 mb-2">
                    Report ID: {report.id}
                  </p>
                  <p className="text-lg text-gray-700 mb-1">
                    Reason: {report.reason}
                  </p>
                  <p className="text-lg text-gray-700 mb-1">
                    Date: {report.date}
                  </p>
                  {/* Action Buttons */}
                  <div className="flex space-x-2 mt-2">
                    <button
                      onClick={() =>
                        alert(`Action taken on report ID ${report.id}.`)
                      }
                      className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
                    >
                      Take Action
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xl text-gray-700">No reports found.</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default AdminUserDetail;
