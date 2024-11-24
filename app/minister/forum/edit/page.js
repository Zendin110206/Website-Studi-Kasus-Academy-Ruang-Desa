"use client";

import MinisterHeader2 from "../../../../components/MinisterHeader2";
import Footer2 from "../../../../components/Footer2";
import { useState } from "react";
import { ExclamationCircleIcon, CheckIcon } from "@heroicons/react/24/solid";
import { FaSpinner } from "react-icons/fa";

const EditForumPage = () => {
  const [selectedForum, setSelectedForum] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const forums = [
    {
      id: 1,
      title: "Pemilihan Ketua RT",
      description:
        "Forum diskusi ini dapat menjadi kesempatan bagi kita untuk saling mengenal dan mendukung calon Ketua RT baru yang siap memimpin dengan penuh tanggung jawab.",
    },
    {
      id: 2,
      title: "Fasilitas Umum",
      description:
        "Forum diskusi ini dapat menjadi momen bagi kita untuk bersama-sama mendukung perbaikan fasilitas umum yang akan meningkatkan kualitas hidup di lingkungan kita.",
    },
    {
      id: 3,
      title: "Keamanan Lingkungan",
      description:
        "Diskusi ini sekaligus menjadi momen bagi kita untuk bersama-sama mendukung perbaikan fasilitas umum yang akan meningkatkan kualitas hidup di lingkungan kita.",
    },
  ];

  const handleForumChange = (e) => {
    const forumId = parseInt(e.target.value);
    const forum = forums.find((f) => f.id === forumId);
    if (forum) {
      setSelectedForum(forum);
      setTitle(forum.title);
      setDescription(forum.description);
      setErrorMessage("");
      setSubmitSuccess(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedForum) {
      setErrorMessage("Silakan pilih forum yang akan diubah.");
      return;
    }

    setIsSubmitting(true);
    setSubmitSuccess(false);
    setErrorMessage("");

    try {
      // Implementasi update forum ke backend

      // Simulasi permintaan dengan delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset setelah submit
      setSelectedForum(null);
      setTitle("");
      setDescription("");

      // Sembunyikan status sukses setelah beberapa detik
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.error("Error updating forum:", error);
      setErrorMessage("Gagal mengubah forum. Silakan coba lagi nanti.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <MinisterHeader2 />

      {/* Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-12 mt-8 sm:mt-16">
        {/* Judul */}
        <div className="text-center mb-8">
          <h4 className="mt-16 sm:mt-8 text-3xl sm:text-5xl font-bold text-[#0C1E28]">
            Cireundeu
          </h4>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-[#0C1E28] mt-2">
            Edit Forum
          </h2>
        </div>

        {/* Pesan Kesalahan */}
        {errorMessage && (
          <div className="flex items-center bg-red-100 text-red-700 p-4 rounded mb-6">
            <ExclamationCircleIcon className="h-6 w-6 mr-2" aria-hidden="true" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Select Forum to Edit */}
        <div className="mb-6">
          <div className="relative">
            <label htmlFor="select-forum" className="sr-only">
              Pilih Forum untuk Diedit
            </label>
            <select
              id="select-forum"
              onChange={handleForumChange}
              value={selectedForum ? selectedForum.id : ""}
              className="w-full px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white text-[#0C1E28] text-base sm:text-lg font-semibold shadow-md focus:outline-none appearance-none border border-gray-300 focus:border-[#D6CF35]"
            >
              <option value="" disabled>
                Pilih Forum untuk Diedit
              </option>
              {forums.map((forum) => (
                <option key={forum.id} value={forum.id}>
                  {forum.title}
                </option>
              ))}
            </select>
            {/* Panah Kustom */}
            <svg
              className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none w-5 h-5 text-[#0C1E28]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Form Edit Forum */}
        {selectedForum && (
          <form
            onSubmit={handleSubmit}
            className="bg-gray-100 rounded-2xl p-4 sm:p-6 shadow-lg"
          >
            {/* Judul Forum */}
            <div className="mb-6">
              <label
                htmlFor="title"
                className="block text-[#0C1E28] font-medium text-lg sm:text-xl mb-2"
              >
                Judul Forum
              </label>
              <div className="flex items-center">
                {/* Sidebar Kuning */}
                <div className="hidden sm:block w-2 sm:w-4 h-full bg-[#D6CF35] rounded-l-full"></div>
                <input
                  id="title"
                  type="text"
                  placeholder="Judul Forum"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="flex-1 bg-white rounded-full py-2 sm:py-3 px-4 sm:px-6 text-black text-base sm:text-lg font-semibold placeholder-gray-400 shadow-md focus:outline-none border border-gray-300 focus:border-[#D6CF35]"
                  required
                />
              </div>
            </div>

            {/* Deskripsi Forum */}
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
                className="w-full bg-white rounded-2xl p-3 sm:p-4 text-[#0C1E28] text-base sm:text-lg font-medium placeholder-gray-400 shadow-md focus:outline-none border border-gray-300 focus:border-[#D6CF35] resize-none"
                required
              ></textarea>
            </div>

            {/* Tombol Simpan */}
            <div className="flex justify-end">
              <button
                type="submit"
                className={`bg-[#D6CF35] text-[#0C1E28] font-bold text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg transition-transform duration-300 flex items-center justify-center ${
                  isSubmitting
                    ? "cursor-not-allowed opacity-50"
                    : "hover:scale-105"
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 mr-2 text-[#0C1E28]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                    </svg>
                    Menyimpan...
                  </>
                ) : submitSuccess ? (
                  <>
                    <CheckIcon className="h-5 w-5 mr-2" />
                    Berhasil Disimpan
                  </>
                ) : (
                  "Simpan"
                )}
              </button>
            </div>

            {/* Notifikasi Sukses */}
            {submitSuccess && (
              <div
                className="flex items-center bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4"
                role="alert"
              >
                <CheckIcon className="h-6 w-6 mr-2" />
                <span className="block sm:inline">Forum berhasil diubah.</span>
              </div>
            )}
          </form>
        )}
      </main>

      {/* Footer */}
      <Footer2 />
    </div>
  );
};

export default EditForumPage;
