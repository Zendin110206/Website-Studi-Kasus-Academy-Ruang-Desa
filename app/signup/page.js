// app/signup/page.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  UserIcon,
  EnvelopeIcon,
  KeyIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/solid"; // Pastikan ikon ini tersedia
import { motion } from "framer-motion";

export default function SignUp() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Untuk toggle visibilitas password
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah form dari pengiriman default
    setError("");
    setSuccess("");

    // Validasi sederhana
    if (!fullname || !email || !username || !password) {
      setError("Semua field harus diisi.");
      return;
    }

    // Validasi email sederhana
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError("Alamat email tidak valid.");
      return;
    }

    // Simulasi pendaftaran berhasil
    // Anda dapat mengganti ini dengan logika pendaftaran sebenarnya
    setSuccess("Pendaftaran berhasil! Redirecting...");
    setTimeout(() => {
      router.push("/signin");
    }, 2000);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/bgsignin.jpg')" }}
    >
      {/* Overlay untuk memberikan kontras pada background */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <motion.div
        className="relative bg-white bg-opacity-80 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-md w-full z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-gray-800 text-3xl font-semibold mb-6 text-center">
          Sign Up
        </h2>
        {error && (
          <div className="mb-4 text-red-500 text-center">{error}</div>
        )}
        {success && (
          <div className="mb-4 text-green-500 text-center">{success}</div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Fullname Field */}
          <div className="relative">
            <input
              type="text"
              id="fullname"
              name="fullname"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 transition-colors"
              placeholder="Nama Lengkap"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <UserIcon className="h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 transition-colors"
              placeholder="Alamat Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <EnvelopeIcon className="h-5 w-5 text-gray-400" />
            </div>
          </div>

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
              type={showPassword ? "text" : "password"} // Toggle visibilitas password
              id="password"
              name="password"
              className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 transition-colors"
              placeholder="Kata Sandi"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <KeyIcon className="h-5 w-5 text-gray-400" />
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

          {/* Link to Sign In */}
          <div className="text-red-600 text-sm text-center mb-4">
            Sudah memiliki akun?{" "}
            <a href="/signin" className="text-blue-600 hover:underline">
              Masuk
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
          >
            Daftar
          </button>
        </form>

        {/* Decorative Elements (Optional) */}
        <div className="mt-6 text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Hak Cipta Dilindungi | © Ruang Desa
        </div>
      </motion.div>
    </div>
  );
}
