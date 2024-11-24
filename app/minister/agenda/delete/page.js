// frontend/app/minister/agenda/delete/page.js

"use client";

import MinisterHeader2 from "../../../../components/MinisterHeader2";
import Footer2 from "../../../../components/Footer2";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import { FaSpinner } from "react-icons/fa"; // Pastikan untuk menginstal react-icons

const DeleteAgendaPage = () => {
  const [selectedAgendas, setSelectedAgendas] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  const agendas = [
    {
      id: 1,
      title: "Musyawarah Desa",
      date: "25/10/24",
      location: "Balai",
      time: "16.00-18.00",
      contact: "Pak Dhoni",
    },
    {
      id: 2,
      title: "Workshop Mie Singkong",
      date: "31/10/24",
      location: "Balai",
      time: "12.00-13.00",
      contact: "Bu Retno",
    },
    {
      id: 3,
      title: "Arisan",
      date: "1/11/24",
      location: "Balai",
      time: "12.00-13.00",
      contact: "Bu Retno",
    },
    // Tambahkan agenda lain jika diperlukan
  ];

  const toggleSelectAgenda = (id) => {
    setSelectedAgendas((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((agendaId) => agendaId !== id)
        : [...prevSelected, id]
    );
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    setDeleteSuccess(false);
    
    // Implementasikan logika penghapusan di sini
    // Misalnya, panggil API untuk menghapus agenda yang dipilih

    // Simulasi permintaan penghapusan dengan delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Setelah berhasil
    setIsDeleting(false);
    setDeleteSuccess(true);
    setSelectedAgendas([]);

    // Sembunyikan pesan sukses setelah beberapa detik
    setTimeout(() => setDeleteSuccess(false), 3000);
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
            Cireundeu
          </h4>
          <h2 className="text-6xl sm:text-8xl font-extrabold text-[#0C1E28] mt-2">
            Hapus Agenda
          </h2>
        </div>

        {/* Tombol Hapus */}
        {selectedAgendas.length > 0 && (
          <div className="flex justify-end mb-6">
            <button
              onClick={handleDelete}
              className={`bg-[#DC673D] text-[#0C1E28] font-bold text-lg sm:text-xl px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center ${
                isDeleting ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={isDeleting}
            >
              {isDeleting ? (
                <FaSpinner className="animate-spin h-6 w-6 mr-2" />
              ) : deleteSuccess ? (
                <CheckIcon className="h-6 w-6 mr-2" />
              ) : null}
              {isDeleting
                ? "Menghapus..."
                : deleteSuccess
                ? "Berhasil Dihapus"
                : "Hapus"}
            </button>
          </div>
        )}

        {/* Notifikasi Sukses */}
        {deleteSuccess && (
          <div className="flex items-center bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
            <CheckIcon className="h-6 w-6 mr-2" />
            <span className="block sm:inline">Agenda yang dipilih telah dihapus.</span>
          </div>
        )}

        {/* Daftar Agenda dengan Checkbox */}
        <div className="space-y-8">
          {agendas.map((agenda) => (
            <div
              key={agenda.id}
              className={`bg-[#DCCC3D] rounded-2xl p-6 sm:p-8 shadow-lg relative cursor-pointer ${
                selectedAgendas.includes(agenda.id) ? "border-4 border-green-500" : ""
              }`}
              onClick={() => toggleSelectAgenda(agenda.id)}
            >
              {/* Checkbox */}
              <div className="absolute top-4 right-4">
                <div
                  className={`w-8 h-8 rounded-full border-4 ${
                    selectedAgendas.includes(agenda.id)
                      ? "bg-green-500 border-green-500"
                      : "bg-white border-gray-300"
                  } flex items-center justify-center`}
                >
                  {selectedAgendas.includes(agenda.id) && (
                    <CheckIcon className="h-5 w-5 text-white" />
                  )}
                </div>
              </div>
              {/* Judul */}
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0C1E28] mb-4">
                {agenda.title}
              </h3>
              {/* Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-[#0C1E28]">
                <div>
                  <p className="font-medium text-xl sm:text-2xl">Tanggal</p>
                  <p className="font-bold text-xl sm:text-2xl">{agenda.date}</p>
                </div>
                <div>
                  <p className="font-medium text-xl sm:text-2xl">Lokasi</p>
                  <p className="font-bold text-xl sm:text-2xl">{agenda.location}</p>
                </div>
                <div>
                  <p className="font-medium text-xl sm:text-2xl">Waktu</p>
                  <p className="font-bold text-xl sm:text-2xl">{agenda.time}</p>
                </div>
                <div>
                  <p className="font-medium text-xl sm:text-2xl">CP</p>
                  <p className="font-bold text-xl sm:text-2xl">{agenda.contact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer2 />
    </div>
  );
};

export default DeleteAgendaPage;
