// frontend/app/signin/page.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  LockClosedIcon,
  UserIcon,
  UserGroupIcon, // Replaced IdentificationIcon with UserGroupIcon
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/solid"; // Ensure these icons exist in your version
import { motion } from "framer-motion";
import Link from "next/link";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("warga");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // For password visibility toggle
  const router = useRouter();

  // Mock user data for demonstration purposes
  const mockUsers = {
    admin: {
      username: "adminUser",
      password: "adminPass",
    },
    warga: {
      username: "wargaUser",
      password: "wargaPass",
    },
    pemerintah: {
      username: "pemerintahUser",
      password: "pemerintahPass",
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setError(""); // Reset any previous errors

    // Simple validation against mock data
    const user = mockUsers[role];

    if (user) {
      if (username === user.username && password === user.password) {
        // Redirect based on role
        switch (role) {
          case "admin":
            router.push("/admin"); // Redirect to Admin Dashboard
            break;
          case "pemerintah":
            router.push("/minister"); // Redirect to Pemerintah Home
            break;
          case "warga":
          default:
            router.push("/users"); // Redirect to Warga Home
            break;
        }
      } else {
        setError("Username atau password salah.");
      }
    } else {
      setError("Peran yang dipilih tidak ada.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center px-4"
      style={{ backgroundImage: "url('/assets/bgsignin.jpg')" }}
    >
      {/* Overlay to darken the background image for better contrast */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <motion.div
        className="relative bg-white overflow-x-hidden bg-opacity-90 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-md w-full z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-gray-800 text-3xl font-semibold mb-6 text-center">
          Sign In
        </h2>
        {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username Field */}
          <div className="relative">
            <input
              type="text"
              id="username"
              name="username"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 transition-colors"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <UserIcon className="h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Password Field */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"} // Toggle visibility
              id="password"
              name="password"
              className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 transition-colors"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <LockClosedIcon className="h-5 w-5 text-gray-400" />
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 focus:outline-none"
                aria-label="Toggle password visibility"
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Role Selection */}
          <div className="relative">
            <select
              id="role"
              name="role"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 transition-colors appearance-none"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="warga">Warga</option>
              <option value="admin">Admin</option>
              <option value="pemerintah">Pemerintah</option>
            </select>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <UserGroupIcon className="h-5 w-5 text-gray-400" />
            </div>
            {/* Optional: Add a dropdown arrow icon */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              {/* You can use an icon like ChevronDownIcon if desired */}
            </div>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
          >
            Sign In
          </button>
        </form>

        {/* Forgot Password Link */}
        <div className="text-sm text-center mt-4">
          <Link href="/forgotpass" className="text-blue-600 hover:underline">
            Forgot Password?
          </Link>
        </div>

        {/* Decorative Elements (Optional) */}
        <div className="mt-6 text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Hak Cipta Dilindungi | © Ruang Desa
        </div>
      </motion.div>
    </div>
  );
}
