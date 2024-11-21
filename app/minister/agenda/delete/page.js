"use client";

import MinisterHeader2 from "../../../../components/MinisterHeader2";
import Footer2 from "../../../../components/Footer2";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

const DeleteAgendaPage = () => {
  const [selectedAgendas, setSelectedAgendas] = useState([]);

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
    // Add more agendas as needed
  ];

  const toggleSelectAgenda = (id) => {
    setSelectedAgendas((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((agendaId) => agendaId !== id)
        : [...prevSelected, id]
    );
  };

  const handleDelete = () => {
    // Implement delete logic here
    alert("Agenda yang dipilih telah dihapus.");
    // Reset selected agendas
    setSelectedAgendas([]);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <MinisterHeader2 />

      {/* Content */}
      <main className="container mx-auto px-6 md:px-12 py-24">
        {/* Title */}
        <div className="text-center mb-12">
          <h4 className="mt-12 text-3xl font-bold text-[#0C1E28]">Cireundeu</h4>
          <h2 className="text-8xl font-extrabold text-[#0C1E28] mt-2">
            Hapus Agenda
          </h2>
        </div>

        {/* Delete Button */}
        {selectedAgendas.length > 0 && (
          <div className="flex justify-end mb-6">
            <button
              onClick={handleDelete}
              className="bg-[#DC673D] text-[#0C1E28] font-bold text-2xl px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Hapus
            </button>
          </div>
        )}

        {/* Agenda List */}
        <div className="space-y-8">
          {agendas.map((agenda) => (
            <div
              key={agenda.id}
              className="bg-[#DCCC3D] rounded-2xl p-6 shadow-lg relative cursor-pointer"
              onClick={() => toggleSelectAgenda(agenda.id)}
            >
              {/* Checkbox */}
              <div className="absolute top-4 right-4">
                <div
                  className={`w-8 h-8 rounded-full border-4 ${
                    selectedAgendas.includes(agenda.id)
                      ? "bg-[#B7DC3D] border-[#B7DC3D]"
                      : "bg-white border-gray-300"
                  } flex items-center justify-center`}
                >
                  {selectedAgendas.includes(agenda.id) && (
                    <CheckIcon className="h-5 w-5 text-white" />
                  )}
                </div>
              </div>
              {/* Title */}
              <h3 className="text-4xl font-extrabold text-[#0C1E28] mb-4">
                {agenda.title}
              </h3>
              {/* Details */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-[#0C1E28]">
                <div>
                  <p className="font-medium text-2xl">Tanggal</p>
                  <p className="font-bold text-2xl">{agenda.date}</p>
                </div>
                <div>
                  <p className="font-medium text-2xl">Lokasi</p>
                  <p className="font-bold text-2xl">{agenda.location}</p>
                </div>
                <div>
                  <p className="font-medium text-2xl">Waktu</p>
                  <p className="font-bold text-2xl">{agenda.time}</p>
                </div>
                <div>
                  <p className="font-medium text-2xl">CP</p>
                  <p className="font-bold text-2xl">{agenda.contact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer2 */}
      <Footer2 />
    </div>
  );
};

export default DeleteAgendaPage;
