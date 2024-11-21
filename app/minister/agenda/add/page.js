"use client";

import MinisterHeader2 from "../../../../components/MinisterHeader2";
import Footer2 from "../../../../components/Footer2";
import { useState } from "react";

const AddAgendaPage = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Agenda berhasil ditambahkan!");
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
            Tambah Agenda
          </h2>
        </div>

        {/* Form */}
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
      </main>

      {/* Footer2 */}
      <Footer2 />
    </div>
  );
};

export default AddAgendaPage;
