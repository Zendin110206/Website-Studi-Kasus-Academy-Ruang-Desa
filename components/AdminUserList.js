"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Modal from "react-modal";

// AdminUserList Component
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

  // Modal state
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [actionType, setActionType] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [blockDays, setBlockDays] = useState(1);

  // Set the app element for accessibility
  useEffect(() => {
    if (typeof window !== "undefined") {
      const appElement = document.querySelector("#__next");
      if (appElement) {
        Modal.setAppElement(appElement);
      } else {
        Modal.setAppElement(document.body);
        console.warn(
          "Element with selector #__next not found. Modal app element set to document.body."
        );
      }
    }
  }, []);

  const openModal = (type, user) => {
    setActionType(type);
    setSelectedUser(user);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedUser(null);
    setActionType("");
    setBlockDays(1);
  };

  const handleConfirmAction = () => {
    if (!selectedUser) return;

    switch (actionType) {
      case "resetPassword":
        // Implement reset password logic
        alert(`Password for ${selectedUser.username} has been reset.`);
        break;
      case "blockUser":
        // Implement block user logic
        setUsers(
          users.map((user) =>
            user.id === selectedUser.id ? { ...user, isBlocked: true } : user
          )
        );
        alert(`${selectedUser.username} has been blocked for ${blockDays} day(s).`);
        break;
      case "deleteUser":
        // Implement delete user logic
        setUsers(users.filter((user) => user.id !== selectedUser.id));
        alert(`${selectedUser.username} has been deleted.`);
        break;
      default:
        break;
    }

    closeModal();
  };

  // Define button styles for consistency
  const getButtonClasses = (variant) => {
    const baseClasses =
      "text-white px-4 py-2 rounded-md transition duration-300 text-sm w-full sm:w-auto mb-2 sm:mb-0";
    const variants = {
      primary: "bg-blue-600 hover:bg-blue-700",
      warning: "bg-yellow-500 hover:bg-yellow-600",
      orange: "bg-orange-500 hover:bg-orange-600",
      danger: "bg-red-600 hover:bg-red-700",
      success: "bg-green-600 hover:bg-green-700",
      secondary: "bg-gray-500 hover:bg-gray-600",
    };
    return `${baseClasses} ${variants[variant] || variants.primary}`;
  };

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="mt-20 text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
        User Management
      </h2>
      {/* Display table on medium and larger screens */}
      <div className="hidden md:block bg-gray-100 rounded-2xl p-4 sm:p-6 shadow-lg overflow-x-auto">
        <table className="min-w-full bg-white rounded-2xl overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-4 px-6 text-left text-lg font-semibold">Username</th>
              <th className="py-4 px-6 text-left text-lg font-semibold">Reports</th>
              <th className="py-4 px-6 text-left text-lg font-semibold">Status</th>
              <th className="py-4 px-6 text-left text-lg font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {users.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="py-4 px-6 text-lg flex items-center space-x-4">
                  {/* User Icon */}
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {user.username.charAt(0).toUpperCase()}
                  </div>
                  <span>{user.username}</span>
                </td>
                <td className="py-4 px-6 text-lg">
                  {user.reportCount} {user.reportCount === 1 ? "report" : "reports"}
                </td>
                <td className="py-4 px-6 text-lg">
                  {user.isBlocked ? (
                    <span className="text-red-600 font-semibold">Blocked</span>
                  ) : (
                    <span className="text-green-600 font-semibold">Active</span>
                  )}
                </td>
                <td className="py-4 px-6">
                  <div className="flex flex-wrap space-x-2">
                    <Link
                      href={`/admin/users/${user.id}`}
                      className={getButtonClasses("primary")}
                    >
                      View
                    </Link>
                    <button
                      onClick={() => openModal("resetPassword", user)}
                      className={getButtonClasses("warning")}
                    >
                      Reset Password
                    </button>
                    {!user.isBlocked && (
                      <button
                        onClick={() => openModal("blockUser", user)}
                        className={getButtonClasses("orange")}
                      >
                        Block
                      </button>
                    )}
                    <button
                      onClick={() => openModal("deleteUser", user)}
                      className={getButtonClasses("danger")}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan="4" className="py-4 px-6 text-center text-lg">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* Display cards on small screens */}
      <div className="md:hidden space-y-4">
        {users.length > 0 ? (
          users.map((user) => (
            <div
              key={user.id}
              className="bg-gray-100 rounded-2xl p-4 shadow-lg"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {user.username.charAt(0).toUpperCase()}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{user.username}</h3>
              </div>
              <p className="text-lg text-gray-700 mb-2">
                <span className="font-semibold">Reports:</span> {user.reportCount}
              </p>
              <p className="text-lg text-gray-700 mb-4">
                <span className="font-semibold">Status:</span>{" "}
                {user.isBlocked ? (
                  <span className="text-red-600 font-semibold">Blocked</span>
                ) : (
                  <span className="text-green-600 font-semibold">Active</span>
                )}
              </p>
              <div className="flex flex-wrap space-x-2">
                <Link
                  href={`/admin/users/${user.id}`}
                  className={getButtonClasses("primary")}
                >
                  View
                </Link>
                <button
                  onClick={() => openModal("resetPassword", user)}
                  className={getButtonClasses("warning")}
                >
                  Reset Password
                </button>
                {!user.isBlocked && (
                  <button
                    onClick={() => openModal("blockUser", user)}
                    className={getButtonClasses("orange")}
                  >
                    Block
                  </button>
                )}
                <button
                  onClick={() => openModal("deleteUser", user)}
                  className={getButtonClasses("danger")}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-lg text-gray-700">No users found.</p>
        )}
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Action Confirmation"
        className="max-w-md w-full mx-2 sm:mx-auto mt-24 bg-white rounded-lg shadow-lg p-6 outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
      >
        <div className="text-black">
          <h2 className="text-xl font-semibold mb-4">
            {actionType === "resetPassword" && "Reset Password"}
            {actionType === "blockUser" && "Block User"}
            {actionType === "deleteUser" && "Delete User"}
          </h2>
          {actionType === "blockUser" && (
            <div className="mb-4">
              <label htmlFor="blockDays" className="block text-sm font-medium text-black">
                Number of days to block:
              </label>
              <input
                type="number"
                id="blockDays"
                min="1"
                value={blockDays}
                onChange={(e) => setBlockDays(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
          <div className="flex justify-end space-y-2 sm:space-y-0 sm:space-x-2 flex-col sm:flex-row">
            <button
              onClick={closeModal}
              className={getButtonClasses("secondary")}
            >
              Cancel
            </button>
            <button
              onClick={handleConfirmAction}
              className={`${actionType === "deleteUser"
                  ? getButtonClasses("danger")
                  : actionType === "blockUser"
                  ? getButtonClasses("orange")
                  : getButtonClasses("warning")
                }`}
            >
              Confirm
            </button>
          </div>
        </div>
      </Modal>
    </main>
  );
};

export default AdminUserList;
