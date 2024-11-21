"use client";

import Link from "next/link";
import Image from "next/image";
import MinisterHeader2 from "../../../../components/MinisterHeader2"; // Pastikan path sesuai
import Footer2 from "../../../../components/Footer2"; // Pastikan path sesuai
import { useState } from "react";

const EditProgramPage = () => {
  const [selectedProgram, setSelectedProgram] = useState("Pilih Program");

  const programs = ["Bantuan Sosial", "Hiking", "Vaksinasi"];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <MinisterHeader2 />

      {/* Content */}
      <main className="container mx-auto px-6 md:px-12 py-24">
        {/* Judul */}
        <div className="text-center mb-12">
          <h4 className="mt-12 text-3xl font-bold text-[#0C1E28]">Cireundeu</h4>
          <h2 className="text-8xl font-extrabold text-[#0C1E28] mt-2">
            Edit Program
          </h2>
        </div>

        {/* Form Edit Program */}
        <div className="bg-[#F2F2F2] rounded-2xl p-8">
          {/* Pilih Program */}
          <div className="mb-6">
            <select
              value={selectedProgram}
              onChange={(e) => setSelectedProgram(e.target.value)}
              className="w-full px-6 py-4 rounded-full bg-white text-[#0C1E28] text-2xl font-bold shadow-lg focus:outline-none"
            >
              <option disabled>Pilih Program untuk Diedit</option>
              {programs.map((program, index) => (
                <option key={index} value={program}>
                  {program}
                </option>
              ))}
            </select>
          </div>

          {/* Judul Program */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Judul"
              value={selectedProgram !== "Pilih Program" ? selectedProgram : ""}
              className="w-full px-6 py-4 rounded-full bg-white text-[#0C1E28] text-2xl font-bold placeholder-gray-500 shadow-lg focus:outline-none"
            />
          </div>

          {/* Upload Gambar */}
          <div className="mb-6">
            <div className="flex flex-col items-center justify-center border-4 border-dashed border-gray-300 rounded-2xl bg-white py-20">
              <svg
                className="w-24 h-24 text-gray-400 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 30V42H42V30"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M24 6V33"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M33 15L24 6L15 15"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <p className="text-gray-500 text-xl font-bold">
                Masukkan file foto program di sini
              </p>
            </div>
          </div>

          {/* Tombol Simpan */}
          <div className="flex justify-end">
            <button className="bg-[#DCCC3D] text-[#0C1E28] font-bold text-2xl px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
              Simpan
            </button>
          </div>
        </div>
      </main>

      {/* Footer2 */}
      <Footer2 />
    </div>
  );
};

export default EditProgramPage;
