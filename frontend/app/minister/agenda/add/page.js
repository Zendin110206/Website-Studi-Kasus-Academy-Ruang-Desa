// frontend/app/minister/agenda/add/page.js

"use client";

import MinisterHeader2 from "../../../../components/MinisterHeader2";
import MinisterFooter2 from "../../../../components/MinisterFooter2";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import { FaSpinner } from "react-icons/fa"; // Pastikan untuk menginstal react-icons

const AddAgendaPage = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [contact, setContact] = useState("");

  // State untuk mengelola status tombol
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);

    // Implementasikan logika penambahan agenda di sini
    // Misalnya, panggil API untuk menambahkan agenda

    // Simulasi permintaan dengan delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Setelah berhasil
    setIsSubmitting(false);
    setSubmitSuccess(true);
    alert("Agenda berhasil ditambahkan!");

    // Reset form setelah submit
    setTitle("");
    setDate("");
    setLocation("");
    setTime("");
    setContact("");

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
          <h4 className="mt-28 sm:mt-28 text-4xl sm:text-6xl font-bold text-[#0C1E28]">
            Cireundeu
          </h4>
          <h2 className="text-6xl sm:text-8xl font-extrabold text-[#0C1E28] mt-2">
            Tambah Agenda
          </h2>
        </div>

        {/* Form Tambah Agenda */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#DCCC3D] rounded-2xl p-8 shadow-lg"
        >
          {/* Judul Agenda */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Judul Agenda"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-6 py-4 rounded-full bg-white text-[#0C1E28] text-2xl font-bold placeholder-gray-400 shadow-md focus:outline-none"
              required
            />
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            {/* Tanggal */}
            <div>
              <label className="block text-[#0C1E28] font-medium text-xl mb-2">
                Tanggal
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-3 rounded-full bg-white text-[#0C1E28] text-xl font-bold placeholder-gray-400 shadow-md focus:outline-none"
                required
              />
            </div>
            {/* Lokasi */}
            <div>
              <label className="block text-[#0C1E28] font-medium text-xl mb-2">
                Lokasi
              </label>
              <input
                type="text"
                placeholder="Tempat"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-3 rounded-full bg-white text-[#0C1E28] text-xl font-bold placeholder-gray-400 shadow-md focus:outline-none"
                required
              />
            </div>
            {/* Waktu */}
            <div>
              <label className="block text-[#0C1E28] font-medium text-xl mb-2">
                Waktu
              </label>
              <input
                type="text"
                placeholder="xx.xx-xx.xx"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-4 py-3 rounded-full bg-white text-[#0C1E28] text-xl font-bold placeholder-gray-400 shadow-md focus:outline-none"
                required
              />
            </div>
            {/* CP */}
            <div>
              <label className="block text-[#0C1E28] font-medium text-xl mb-2">
                CP
              </label>
              <input
                type="text"
                placeholder="Nama"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="w-full px-4 py-3 rounded-full bg-white text-[#0C1E28] text-xl font-bold placeholder-gray-400 shadow-md focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Tombol Simpan */}
          <div className="flex justify-end">
            <button
              type="submit"
              className={`bg-[#B7DC3D] text-[#0C1E28] font-bold text-2xl px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center ${
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
      </main>

      {/* Footer */}
      <MinisterFooter2 />
    </div>
  );
};

export default AddAgendaPage;
