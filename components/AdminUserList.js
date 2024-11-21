"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const AdminUserList = () => {
  // Sample user data
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "Pieceofaul",
      isBlocked: false,
      reportCount: 2,
    },
    {
      id: 2,
      username: "BuSiti",
      isBlocked: false,
      reportCount: 0,
    },
    // Add more users as needed
  ]);

  const handleResetPassword = (userId) => {
    // Implement reset password logic
    alert(`Password for user ID ${userId} has been reset.`);
  };

  const handleDeleteUser = (userId) => {
    // Implement delete user logic
    const confirmDelete = confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
      setUsers(users.filter((user) => user.id !== userId));
      alert(`User ID ${userId} has been deleted.`);
    }
  };

  const handleBlockUser = (userId) => {
    // Implement block user logic
    const blockDays = prompt("Enter number of days to block the user:", "1");
    if (blockDays) {
      setUsers(
        users.map((user) =>
          user.id === userId ? { ...user, isBlocked: true } : user
        )
      );
      alert(`User ID ${userId} has been blocked for ${blockDays} day(s).`);
    }
  };

  return (
    <main className="container mx-auto px-6 md:px-12 py-24">
      <h2 className="text-4xl font-bold text-center text-[#0C1E28] mb-8">
        User Management
      </h2>
      <div className="bg-[#D9D9D9] rounded-2xl p-6 shadow-lg overflow-x-auto">
        <table className="min-w-full bg-white rounded-2xl overflow-hidden">
          <thead className="bg-[#0C1E28] text-white">
            <tr>
              <th className="w-1/4 py-4 px-6 text-left text-xl font-bold">
                Username
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-xl font-bold">
                Reports
              </th>
              <th className="w-1/2 py-4 px-6 text-left text-xl font-bold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {users.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="py-4 px-6 text-xl flex items-center space-x-4">
                  {/* User Icon */}
                  <div className="w-12 h-12 bg-[#0C1E28] rounded-full flex items-center justify-center text-white">
                    {user.username.charAt(0).toUpperCase()}
                  </div>
                  <span>{user.username}</span>
                  {user.isBlocked && (
                    <span className="text-red-600 font-bold">(Blocked)</span>
                  )}
                </td>
                <td className="py-4 px-6 text-xl">
                  {user.reportCount} {user.reportCount === 1 ? "report" : "reports"}
                </td>
                <td className="py-4 px-6">
                  <div className="flex flex-wrap space-x-2">
                    <Link href={`/admin/users/${user.id}`}>
                      <button
                        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300 mb-2"
                      >
                        View Details
                      </button>
                    </Link>
                    <button
                      onClick={() => handleResetPassword(user.id)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 mb-2"
                    >
                      Reset Password
                    </button>
                    <button
                      onClick={() => handleBlockUser(user.id)}
                      className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition duration-300 mb-2"
                    >
                      Block User
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300 mb-2"
                    >
                      Delete User
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan="3" className="py-4 px-6 text-center">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default AdminUserList;
