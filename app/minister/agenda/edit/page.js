"use client";

import MinisterHeader2 from "../../../../components/MinisterHeader2";
import Footer2 from "../../../../components/Footer2";
import { useState } from "react";

const EditAgendaPage = () => {
  const [selectedAgenda, setSelectedAgenda] = useState(null);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [contact, setContact] = useState("");

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
    setSelectedAgenda(agenda);
    setTitle(agenda.title);
    setDate(agenda.date);
    setLocation(agenda.location);
    setTime(agenda.time);
    setContact(agenda.contact);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle update logic here
    alert("Agenda berhasil diubah!");
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
            Edit Agenda
          </h2>
        </div>

        {/* Select Agenda to Edit */}
        <div className="mb-6">
          <select
            onChange={handleAgendaChange}
            className="w-full px-6 py-4 rounded-full bg-white text-[#0C1E28] text-2xl font-bold shadow-md focus:outline-none"
          >
            <option value="">Pilih Agenda untuk Diedit</option>
            {agendas.map((agenda) => (
              <option key={agenda.id} value={agenda.id}>
                {agenda.title}
              </option>
            ))}
          </select>
        </div>

        {selectedAgenda && (
          <form onSubmit={handleSubmit} className="bg-[#DCCC3D] rounded-2xl p-8 shadow-lg">
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

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#B7DC3D] text-[#0C1E28] font-bold text-2xl px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
              >
                Simpan
              </button>
            </div>
          </form>
        )}
      </main>

      {/* Footer2 */}
      <Footer2 />
    </div>
  );
};

export default EditAgendaPage;
