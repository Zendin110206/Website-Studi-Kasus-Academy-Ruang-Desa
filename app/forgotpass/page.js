// frontend/app/forgotpass/page.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  EnvelopeIcon,
  KeyIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ForgotPassword() {
  const [selectedOption, setSelectedOption] = useState(null); // null, 'email', or 'oldPassword'
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validasi sederhana
    if (!email) {
      setError("Alamat email harus diisi.");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError("Alamat email tidak valid.");
      return;
    }

    // Simulasi pengiriman email reset password
    setSuccess("Permintaan reset kata sandi telah dikirim ke email Anda.");
    setTimeout(() => {
      router.push("/signin");
    }, 3000);
  };

  const handleOldPasswordSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validasi sederhana
    if (!oldPassword || !newPassword) {
      setError("Semua field harus diisi.");
      return;
    }

    if (oldPassword.length < 6 || newPassword.length < 6) {
      setError("Kata sandi harus terdiri dari minimal 6 karakter.");
      return;
    }

    // Simulasi penggantian kata sandi
    setSuccess("Kata sandi berhasil diubah. Redirecting...");
    setTimeout(() => {
      router.push("/signin");
    }, 2000);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center px-4"
      style={{ backgroundImage: "url('/assets/bgsignin.jpg')" }}
    >
      {/* Overlay untuk memberikan kontras pada background */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <motion.div
        className="relative bg-white overflow-x-hidden bg-opacity-90 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-3xl w-full z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-gray-800 text-3xl font-semibold mb-6 text-center">
          Lupa Kata Sandi
        </h2>

        {/* Pilihan Reset Password */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-6">
          {/* Opsi Kirim Email */}
          <motion.div
            className={`flex flex-col items-center p-6 border rounded-lg cursor-pointer transition-transform transform hover:scale-105 ${
              selectedOption === "email"
                ? "border-blue-600 shadow-lg"
                : "border-gray-300"
            }`}
            onClick={() => setSelectedOption("email")}
            whileHover={{ scale: 1.05 }}
          >
            <EnvelopeIcon className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-medium text-gray-800">Kirim Email</h3>
            <p className="text-center text-gray-600 mt-2">
              Kirim tautan reset kata sandi ke alamat email Anda.
            </p>
          </motion.div>

          {/* Opsi Reset dengan Kata Sandi Lama */}
          <motion.div
            className={`flex flex-col items-center p-6 border rounded-lg cursor-pointer transition-transform transform hover:scale-105 ${
              selectedOption === "oldPassword"
                ? "border-blue-600 shadow-lg"
                : "border-gray-300"
            }`}
            onClick={() => setSelectedOption("oldPassword")}
            whileHover={{ scale: 1.05 }}
          >
            <KeyIcon className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-medium text-gray-800">
              Reset dengan Kata Sandi Lama
            </h3>
            <p className="text-center text-gray-600 mt-2">
              Masukkan kata sandi lama Anda untuk mengatur kata sandi baru.
            </p>
          </motion.div>
        </div>

        {/* Pesan Error dan Success */}
        {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
        {success && (
          <div className="mb-4 text-green-500 text-center">{success}</div>
        )}

        {/* Formulir Reset Password */}
        {selectedOption === "email" && (
          <form onSubmit={handleEmailSubmit} className="space-y-4">
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

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
            >
              Kirim Permintaan
            </button>
          </form>
        )}

        {selectedOption === "oldPassword" && (
          <form onSubmit={handleOldPasswordSubmit} className="space-y-4">
            {/* Old Password Field */}
            <div className="relative">
              <input
                type={showOldPassword ? "text" : "password"} // Toggle visibilitas password
                id="oldPassword"
                name="oldPassword"
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 transition-colors"
                placeholder="Kata Sandi Lama"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <KeyIcon className="h-5 w-5 text-gray-400" />
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <button
                  type="button"
                  onClick={() => setShowOldPassword(!showOldPassword)}
                  className="text-gray-400 focus:outline-none"
                  aria-label="Toggle old password visibility"
                >
                  {showOldPassword ? (
                    <EyeSlashIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* New Password Field */}
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"} // Toggle visibilitas password
                id="newPassword"
                name="newPassword"
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 transition-colors"
                placeholder="Kata Sandi Baru"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <KeyIcon className="h-5 w-5 text-gray-400" />
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="text-gray-400 focus:outline-none"
                  aria-label="Toggle new password visibility"
                >
                  {showNewPassword ? (
                    <EyeSlashIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
            >
              Ubah Kata Sandi
            </button>
          </form>
        )}

        {/* Link ke Sign In */}
        <div className="text-gray-600 text-sm text-center mt-6">
          Kembali ke{" "}
          <Link href="/signin" className="text-blue-600 hover:underline">
            Sign In
          </Link>
        </div>

        {/* Informasi Kontak Admin */}
        <div className="mt-4 text-center text-red-600 text-sm">
          Jika Anda membutuhkan bantuan lebih lanjut, silakan hubungi admin:
          <br />
          <a
            href="mailto:admin@ruangdesa.com"
            className="text-blue-600 hover:underline"
          >
            admin@ruangdesa.com
          </a>
        </div>

        {/* Hak Cipta */}
        <div className="mt-6 text-center text-gray-600 text-xs">
          &copy; {new Date().getFullYear()} Hak Cipta Dilindungi | © Ruang Desa
        </div>
      </motion.div>
    </div>
  );
}
