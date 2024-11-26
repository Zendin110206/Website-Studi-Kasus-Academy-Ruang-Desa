// frontend/app/minister/forum/add/page.js

"use client";

import MinisterHeader2 from "../../../../components/MinisterHeader2";
import MinisterFooter2 from "../../../../components/MinisterFooter2";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa"; // Spinner icon
import { CheckIcon, ExclamationCircleIcon } from "@heroicons/react/24/solid"; // Icons for notifications

const AddForumPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // State untuk mengelola status pengiriman dan notifikasi
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Mulai proses pengiriman
    setSubmitSuccess(false); // Reset status sukses
    setErrorMessage(""); // Reset pesan kesalahan

    try {
      // TODO: Implementasikan logika penambahan forum di sini
      // Misalnya, panggil API untuk menambahkan forum
      // Contoh:
      // await axios.post('/api/forums', { title, description });

      // Simulasi permintaan dengan delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Setelah berhasil
      setIsSubmitting(false); // Selesai proses pengiriman
      setSubmitSuccess(true); // Set status sukses
      setTitle(""); // Reset form
      setDescription("");

      // Sembunyikan notifikasi sukses setelah beberapa detik
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      // Tangani kesalahan yang terjadi selama pengiriman
      console.error("Error adding forum:", error);
      setErrorMessage("Gagal menambahkan forum. Silakan coba lagi nanti.");
      setIsSubmitting(false); // Selesai proses pengiriman
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <MinisterHeader2 />

      {/* Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-12 mt-8 sm:mt-16">
        {/* Judul */}
        <div className="text-center mb-8 sm:mb-12">
          <h4 className="text-3xl sm:text-5xl font-bold text-[#0C1E28] mt-20 sm:mt-16">
            Cireundeu
          </h4>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-[#0C1E28] mt-2 sm:mt-4">
            Tambah Forum
          </h2>
        </div>

        {/* Pesan Kesalahan */}
        {errorMessage && (
          <div className="flex items-center bg-red-100 text-red-700 p-4 rounded mb-6">
            <ExclamationCircleIcon
              className="h-6 w-6 mr-2"
              aria-hidden="true"
            />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Pesan Sukses */}
        {submitSuccess && (
          <div
            className="flex items-center bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6"
            role="alert"
          >
            <CheckIcon className="h-6 w-6 mr-2" aria-hidden="true" />
            <span className="block sm:inline">Forum berhasil ditambahkan.</span>
          </div>
        )}

        {/* Form Tambah Forum */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#F2F2F2] rounded-2xl p-4 sm:p-6 shadow-lg"
        >
          {/* Title Input */}
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block text-[#0C1E28] font-medium text-lg sm:text-xl mb-2"
            >
              Judul Forum
            </label>
            <div className="flex items-center">
              {/* Div Kuning - Sembunyikan pada layar kecil */}
              <div className="hidden sm:block w-24 sm:w-24 h-20 bg-[#D6CF35] rounded-l-2xl"></div>
              <input
                id="title"
                type="text"
                placeholder="Judul Forum"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="flex-1 bg-white rounded-full sm:rounded-r-full py-2 sm:py-3 px-4 sm:px-6 text-base sm:text-lg font-semibold placeholder-gray-400 shadow-md focus:outline-none text-black"
                required
              />
            </div>
          </div>

          {/* Description Input */}
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block text-[#0C1E28] font-medium text-lg sm:text-xl mb-2"
            >
              Deskripsi Forum
            </label>
            <textarea
              id="description"
              placeholder="Deskripsi"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="6"
              className="w-full bg-white rounded-2xl p-3 sm:p-4 text-base sm:text-lg font-medium placeholder-gray-400 shadow-md focus:outline-none resize-none text-black"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className={`bg-[#B7DC3D] text-[#0C1E28] font-bold text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center ${
                isSubmitting ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="animate-spin h-5 w-5 mr-2" />
                  Menyimpan...
                </>
              ) : (
                "Simpan"
              )}
            </button>
          </div>
        </form>
      </main>

      {/* Footer */}
      <MinisterFooter2 />
    </div>
  );
};

export default AddForumPage;
