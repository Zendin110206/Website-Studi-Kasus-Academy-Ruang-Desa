// frontend/app/minister/agenda/edit/page.js

"use client";

import MinisterHeader2 from "../../../../components/MinisterHeader2";
import MinisterFooter2 from "../../../../components/MinisterFooter2";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import { FaSpinner } from "react-icons/fa"; // Pastikan untuk menginstal react-icons

const EditAgendaPage = () => {
  const [selectedAgenda, setSelectedAgenda] = useState(null);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [contact, setContact] = useState("");

  // State untuk mengelola status pengiriman
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const agendas = [
    {
      id: 1,
      title: "Musyawarah Desa",
      date: "2024-10-25",
      location: "Balai",
      time: "16.00-18.00",
      contact: "Pak Dhoni",
    },
    {
      id: 2,
      title: "Workshop Mie Singkong",
      date: "2024-10-31",
      location: "Balai",
      time: "12.00-13.00",
      contact: "Bu Retno",
    },
    {
      id: 3,
      title: "Arisan",
      date: "2024-11-01",
      location: "Balai",
      time: "12.00-13.00",
      contact: "Bu Retno",
    },
  ];

  const handleAgendaChange = (e) => {
    const agendaId = parseInt(e.target.value);
    const agenda = agendas.find((a) => a.id === agendaId);
    if (agenda) {
      setSelectedAgenda(agenda);
      setTitle(agenda.title);
      setDate(agenda.date);
      setLocation(agenda.location);
      setTime(agenda.time);
      setContact(agenda.contact);
      setErrorMessage("");
      setSubmitSuccess(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedAgenda) {
      setErrorMessage("Silakan pilih agenda yang akan diubah.");
      return;
    }

    setIsSubmitting(true); // Mulai proses pengiriman
    setSubmitSuccess(false); // Reset status sukses
    setErrorMessage("");

    try {
      // TODO: Implementasikan logika update di sini
      // Misalnya, panggil API untuk mengupdate agenda
      // Contoh:
      // await axios.put(`/api/agendas/${selectedAgenda.id}`, {
      //   title,
      //   date,
      //   location,
      //   time,
      //   contact,
      // });

      // Simulasi permintaan dengan delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Setelah berhasil
      setIsSubmitting(false); // Selesai proses pengiriman
      setSubmitSuccess(true); // Set status sukses
      alert("Agenda berhasil diubah!");

      // Reset setelah submit
      setSelectedAgenda(null);
      setTitle("");
      setDate("");
      setLocation("");
      setTime("");
      setContact("");

      // Sembunyikan status sukses setelah beberapa detik
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      // Tangani kesalahan yang terjadi selama pengeditan
      console.error("Error updating agenda:", error);
      setErrorMessage("Gagal mengubah agenda. Silakan coba lagi nanti.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <MinisterHeader2 />

      {/* Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-12 mt-16 sm:mt-28">
        {/* Judul */}
        <div className="text-center mb-8">
          <h4 className="mt-8 sm:mt-6 text-3xl sm:text-5xl font-bold text-[#0C1E28]">
            Cireundeu
          </h4>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-[#0C1E28] mt-2">
            Edit Agenda
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

        {/* Select Agenda to Edit */}
        <div className="mb-6">
          <div className="relative">
            <label htmlFor="select-agenda" className="sr-only">
              Pilih Agenda untuk Diedit
            </label>
            <select
              id="select-agenda"
              onChange={handleAgendaChange}
              value={selectedAgenda ? selectedAgenda.id : ""}
              className="w-full px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white text-[#0C1E28] text-base sm:text-lg font-semibold shadow-md focus:outline-none appearance-none"
            >
              <option value="" disabled>
                Pilih Agenda untuk Diedit
              </option>
              {agendas.map((agenda) => (
                <option key={agenda.id} value={agenda.id}>
                  {agenda.title}
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

        {/* Form Edit Agenda */}
        {selectedAgenda && (
          <form
            onSubmit={handleSubmit}
            className="bg-[#DCCC3D] rounded-2xl p-6 sm:p-8 shadow-lg"
          >
            {/* Judul Agenda */}
            <div className="mb-6">
              <label
                htmlFor="title"
                className="block text-[#0C1E28] font-medium text-lg sm:text-xl mb-2"
              >
                Judul Agenda
              </label>
              <input
                id="title"
                type="text"
                placeholder="Judul Agenda"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white text-[#0C1E28] text-base sm:text-lg font-semibold placeholder-gray-400 shadow-md focus:outline-none"
                required
              />
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Tanggal */}
              <div>
                <label
                  htmlFor="date"
                  className="block text-[#0C1E28] font-medium text-lg sm:text-xl mb-2"
                >
                  Tanggal
                </label>
                <input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white text-[#0C1E28] text-base sm:text-lg font-semibold placeholder-gray-400 shadow-md focus:outline-none"
                  required
                />
              </div>
              {/* Lokasi */}
              <div>
                <label
                  htmlFor="location"
                  className="block text-[#0C1E28] font-medium text-lg sm:text-xl mb-2"
                >
                  Lokasi
                </label>
                <input
                  id="location"
                  type="text"
                  placeholder="Tempat"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white text-[#0C1E28] text-base sm:text-lg font-semibold placeholder-gray-400 shadow-md focus:outline-none"
                  required
                />
              </div>
              {/* Waktu */}
              <div>
                <label
                  htmlFor="time"
                  className="block text-[#0C1E28] font-medium text-lg sm:text-xl mb-2"
                >
                  Waktu
                </label>
                <input
                  id="time"
                  type="text"
                  placeholder="xx.xx-xx.xx"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white text-[#0C1E28] text-base sm:text-lg font-semibold placeholder-gray-400 shadow-md focus:outline-none"
                  required
                />
              </div>
              {/* CP */}
              <div>
                <label
                  htmlFor="contact"
                  className="block text-[#0C1E28] font-medium text-lg sm:text-xl mb-2"
                >
                  CP
                </label>
                <input
                  id="contact"
                  type="text"
                  placeholder="Nama"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white text-[#0C1E28] text-base sm:text-lg font-semibold placeholder-gray-400 shadow-md focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Tombol Simpan */}
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
                <span className="block sm:inline">Agenda berhasil diubah.</span>
              </div>
            )}
          </form>
        )}
      </main>

      {/* Footer */}
      <MinisterFooter2 />
    </div>
  );
};

export default EditAgendaPage;
