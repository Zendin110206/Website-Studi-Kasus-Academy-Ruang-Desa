// frontend/app/minister/layanan/add/page.js

"use client";

import MinisterHeader2 from "../../../../components/MinisterHeader2";
import Footer2 from "../../../../components/Footer2";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import { FaSpinner } from "react-icons/fa"; // Pastikan untuk menginstal react-icons

const AddLayananPage = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  // State untuk mengelola status tombol
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);

    // Implementasikan logika penambahan layanan di sini
    // Misalnya, panggil API untuk menambahkan layanan

    // Simulasi permintaan dengan delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Setelah berhasil
    setIsSubmitting(false);
    setSubmitSuccess(true);
    alert("Layanan berhasil ditambahkan!");

    // Reset form setelah submit
    setTitle("");
    setUrl("");

    // Sembunyikan status sukses setelah beberapa detik
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <MinisterHeader2 />

      {/* Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-12 mt-24 sm:mt-32">
        {/* Judul */}
        <div className="text-center mb-8">
          <h4 className="mt-16  text-4xl sm:text-6xl font-bold text-[#0C1E28]">
            Cireundeu
          </h4>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-[#0C1E28] mt-2">
            Tambah Layanan
          </h2>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#F2F2F2] rounded-2xl p-6 sm:p-8 shadow-lg"
        >
          {/* Title Input */}
          <div className="mb-6">
            <label htmlFor="title" className="sr-only">
              Judul Surat
            </label>
            <div className="flex items-center">
              <div className="w-24 h-20 bg-[#D6CF35] rounded-l-2xl"></div>
              <input
                id="title"
                type="text"
                placeholder="Judul Surat"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="flex-1 bg-white rounded-r-2xl py-4 px-6 text-[#0C1E28] text-lg sm:text-xl font-bold placeholder-gray-400 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* URL Input */}
          <div className="mb-6">
            <label htmlFor="url" className="sr-only">
              Link URL
            </label>
            <input
              id="url"
              type="url"
              placeholder="Link URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full bg-white rounded-2xl py-4 px-6 text-[#0C1E28] text-lg sm:text-xl font-bold placeholder-gray-400 focus:outline-none"
              required
            />
          </div>

          {/* Tombol Simpan */}
          <div className="flex justify-end">
            <button
              type="submit"
              className={`bg-[#B7DC3D] text-[#0C1E28] font-bold text-lg sm:text-xl px-6 sm:px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center ${
                isSubmitting ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <FaSpinner className="animate-spin h-5 w-5 mr-2" />
              ) : submitSuccess ? (
                <CheckIcon className="h-5 w-5 mr-2" />
              ) : null}
              {isSubmitting
                ? "Menyimpan..."
                : submitSuccess
                ? "Berhasil Disimpan"
                : "Simpan"}
            </button>
          </div>
        </form>
      </main>

      {/* Footer */}
      <Footer2 />
    </div>
  );
};

export default AddLayananPage;
