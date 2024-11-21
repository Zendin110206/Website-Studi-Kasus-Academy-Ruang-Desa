"use client";

import Link from "next/link";
import Image from "next/image";
import MinisterHeader2 from "../../../components/MinisterHeader2"; 
import Footer2 from "../../../components/Footer2"; 
import { useState } from "react";

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
    // Add more agendas as needed
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <MinisterHeader2 />

      {/* Content */}
      <main className="container mx-auto px-6 md:px-12 py-24">
        {/* Title */}
        <div className="text-center mb-12">
          <h4 className="mt-12 text-3xl font-bold text-[#0C1E28]">Cireundeu</h4>
          <h2 className="text-8xl font-extrabold text-[#0C1E28] mt-2">Agenda</h2>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <Link href="/minister/agenda/add">
            <button className="bg-[#B7DC3D] text-[#0C1E28] font-bold text-2xl px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
              Tambah Agenda
            </button>
          </Link>
          <Link href="/minister/agenda/edit">
            <button className="bg-[#DCCC3D] text-[#0C1E28] font-bold text-2xl px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
              Edit Agenda
            </button>
          </Link>
          <Link href="/minister/agenda/delete">
            <button className="bg-[#DC673D] text-[#0C1E28] font-bold text-2xl px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
              Hapus Agenda
            </button>
          </Link>
        </div>

        {/* Agenda List */}
        <div className="space-y-8">
          {agendas.map((agenda) => (
            <div
              key={agenda.id}
              className="bg-[#DCCC3D] rounded-2xl p-6 shadow-lg relative"
            >
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

export default AgendaPage;
