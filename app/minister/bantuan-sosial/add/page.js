// frontend/app/minister/bantuan-sosial/add/page.js

"use client";

import MinisterHeader2 from "../../../../components/MinisterHeader2";
import Footer2 from "../../../../components/Footer2";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import { FaSpinner } from "react-icons/fa"; // Pastikan untuk menginstal react-icons

const TambahBantuanSosialPage = () => {
  const [namaBansos, setNamaBansos] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  
  // State untuk mengelola status tombol
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);

    // Implementasikan logika penambahan bantuan sosial di sini
    // Misalnya, panggil API untuk menambahkan bantuan sosial

    // Simulasi permintaan dengan delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Setelah berhasil
    setIsSubmitting(false);
    setSubmitSuccess(true);
    alert("Bantuan Sosial berhasil ditambahkan!");
    
    // Reset form setelah submit
    setNamaBansos("");
    setDeskripsi("");

    // Sembunyikan status sukses setelah beberapa detik
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <MinisterHeader2 />

      {/* Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-12">
        {/* Judul */}
        <div className="text-center mb-8">
          <h4 className="mt-28 sm:mt-60 text-4xl sm:text-6xl font-bold text-[#0C1E28]">
            Tambah
          </h4>
          <h2 className="text-6xl sm:text-8xl font-extrabold text-[#0C1E28] mt-2">
            Bantuan Sosial
          </h2>
        </div>

        {/* Form Tambah Bantuan Sosial */}
        <form onSubmit={handleSubmit} className="bg-[#0C1E28] rounded-2xl p-4 sm:p-8 shadow-lg">
          {/* Nama Bantuan Sosial */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Nama Bantuan Sosial"
              value={namaBansos}
              onChange={(e) => setNamaBansos(e.target.value)}
              className="w-full px-4 sm:px-6 py-2 sm:py-4 rounded-full bg-white text-[#0C1E28] text-lg sm:text-2xl font-bold placeholder-gray-500 shadow-lg focus:outline-none"
              required
            />
          </div>

          {/* Deskripsi Bantuan Sosial */}
          <div className="mb-6">
            <textarea
              placeholder="Deskripsi Bantuan Sosial (Tujuan, Persyaratan, dan Pendaftaran)"
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
              className="w-full px-4 sm:px-6 py-2 sm:py-4 rounded-2xl bg-white text-[#0C1E28] text-lg sm:text-2xl font-bold placeholder-gray-500 shadow-lg h-40 sm:h-64 focus:outline-none"
              required
            ></textarea>
          </div>

          {/* Tombol Simpan */}
          <div className="flex justify-end">
            <button
              type="submit"
              className={`bg-[#B7DC3D] text-[#0C1E28] font-bold text-lg sm:text-2xl px-6 sm:px-8 py-2 sm:py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center ${
                isSubmitting ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <FaSpinner className="animate-spin h-6 w-6 mr-2" />
              ) : submitSuccess ? (
                <CheckIcon className="h-6 w-6 mr-2" />
              ) : null}
              {isSubmitting
                ? "Menyimpan..."
                : submitSuccess
                ? "Berhasil Disimpan"
                : "Simpan"}
            </button>
          </div>
        </form>

        {/* Notifikasi Sukses */}
        {submitSuccess && (
          <div className="flex items-center bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4" role="alert">
            <CheckIcon className="h-6 w-6 mr-2" />
            <span className="block sm:inline">Bantuan Sosial berhasil ditambahkan.</span>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer2 />
    </div>
  );
};

export default TambahBantuanSosialPage;
