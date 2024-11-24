"use client";

import React, { useState } from "react";

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
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="mt-20 text-3xl sm:text-4xl font-bold text-center text-[#0C1E28] mb-8">
        User Details
      </h2>
      <div className="bg-[#F2F2F2] rounded-2xl p-4 sm:p-6 shadow-lg">
        {/* User Information */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              {user.username.charAt(0).toUpperCase()}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0C1E28]">
              {user.username}
            </h3>
          </div>
          <p className="text-lg sm:text-xl text-gray-700 mb-2">Email: {user.email}</p>
          <p className="text-lg sm:text-xl text-gray-700 mb-2">
            Status:{" "}
            {user.isBlocked ? (
              <span className="text-red-600 font-bold">Blocked</span>
            ) : (
              "Active"
            )}
          </p>
          <p className="text-lg sm:text-xl text-gray-700 mb-2">
            Reports: {user.reportCount}
          </p>
          {/* Actions */}
          <div className="flex flex-wrap space-x-0 sm:space-x-2 space-y-2 sm:space-y-0 mt-4">
            <button
              onClick={handleResetPassword}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 w-full sm:w-auto"
            >
              Reset Password
            </button>
            <button
              onClick={handleBlockUser}
              className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition duration-300 w-full sm:w-auto"
            >
              Block User
            </button>
            <button
              onClick={handleDeleteUser}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300 w-full sm:w-auto"
            >
              Delete User
            </button>
          </div>
        </div>
        {/* Reports */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0C1E28] mb-4">
            Reports Against User
          </h3>
          {user.reports.length > 0 ? (
            <ul className="space-y-4">
              {user.reports.map((report) => (
                <li key={report.id} className="bg-white rounded-lg p-4 shadow">
                  <p className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                    Report ID: {report.id}
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 mb-1">
                    Reason: {report.reason}
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 mb-1">
                    Date: {report.date}
                  </p>
                  {/* Action Buttons */}
                  <div className="flex space-x-2 mt-2">
                    <button
                      onClick={() =>
                        alert(`Action taken on report ID ${report.id}.`)
                      }
                      className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300 w-full sm:w-auto"
                    >
                      Take Action
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-lg sm:text-xl text-gray-700">No reports found.</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default AdminUserDetail;
