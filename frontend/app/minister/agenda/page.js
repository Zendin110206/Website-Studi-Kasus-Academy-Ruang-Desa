// frontend/app/minister/agenda/page.js

"use client";

import Link from "next/link";
import MinisterHeader2 from "../../../components/MinisterHeader2";
import MinisterFooter2 from "../../../components/MinisterFooter2";

const AgendaPage = () => {
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

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <MinisterHeader2 />

      {/* Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-12 mt-24 sm:mt-32">
        {/* Judul */}
        <div className="text-center mb-8">
          <h4 className="mt-16 sm:mt-28 text-4xl sm:text-6xl font-bold text-[#0C1E28]">
            Cireundeu
          </h4>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-[#0C1E28] mt-2">
            Agenda
          </h2>
        </div>

        {/* Tombol Aksi */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12">
          <Link href="/minister/agenda/add">
            <button className="w-full bg-[#B7DC3D] text-[#0C1E28] font-bold text-lg sm:text-xl px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
              Tambah Agenda
            </button>
          </Link>
          <Link href="/minister/agenda/edit">
            <button className="w-full bg-[#DCCC3D] text-[#0C1E28] font-bold text-lg sm:text-xl px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
              Edit Agenda
            </button>
          </Link>
          <Link href="/minister/agenda/delete">
            <button className="w-full bg-[#DC673D] text-[#0C1E28] font-bold text-lg sm:text-xl px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
              Hapus Agenda
            </button>
          </Link>
        </div>

        {/* Daftar Agenda */}
        <div className="space-y-6 sm:space-y-8">
          {agendas.map((agenda) => (
            <div
              key={agenda.id}
              className="bg-[#DCCC3D] rounded-2xl p-4 sm:p-6 shadow-lg"
            >
              {/* Judul */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0C1E28] mb-3 sm:mb-4">
                {agenda.title}
              </h3>
              {/* Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 text-[#0C1E28]">
                <div>
                  <p className="font-medium text-base sm:text-lg">Tanggal</p>
                  <p className="font-bold text-base sm:text-lg">
                    {agenda.date}
                  </p>
                </div>
                <div>
                  <p className="font-medium text-base sm:text-lg">Lokasi</p>
                  <p className="font-bold text-base sm:text-lg">
                    {agenda.location}
                  </p>
                </div>
                <div>
                  <p className="font-medium text-base sm:text-lg">Waktu</p>
                  <p className="font-bold text-base sm:text-lg">
                    {agenda.time}
                  </p>
                </div>
                <div>
                  <p className="font-medium text-base sm:text-lg">CP</p>
                  <p className="font-bold text-base sm:text-lg">
                    {agenda.contact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <MinisterFooter2 />
    </div>
  );
};

export default AgendaPage;
