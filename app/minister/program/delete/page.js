"use client";

import Link from "next/link";
import Image from "next/image";
import MinisterHeader2 from "../../../../components/MinisterHeader2"; // Pastikan path sesuai
import Footer2 from "../../../../components/Footer2"; // Pastikan path sesuai
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

const HapusProgramPage = () => {
  const [selectedPrograms, setSelectedPrograms] = useState([]);

  const programs = [
    { id: 1, title: "Bantuan Sosial", image: "/assets/minister/bantuan sosial 1.png" },
    { id: 2, title: "Hiking", image: "/assets/minister/program hiking 1.png" },
    { id: 3, title: "Vaksinasi", image: "/assets/minister/vaksinasi 2.png" },
    // Tambahkan program lain jika ada
  ];

  const toggleSelectProgram = (id) => {
    setSelectedPrograms((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((programId) => programId !== id)
        : [...prevSelected, id]
    );
  };

  const handleDelete = () => {
    // Tambahkan logika untuk menghapus program yang dipilih
    alert("Program yang dipilih telah dihapus.");
    // Reset pilihan setelah menghapus
    setSelectedPrograms([]);
  };

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
            Hapus Program
          </h2>
        </div>

        {/* Daftar Program dengan Checkbox */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="relative group cursor-pointer"
              onClick={() => toggleSelectProgram(program.id)}
            >
              <Image
                src={program.image}
                alt={program.title}
                width={500}
                height={500}
                className={`w-full h-auto rounded-2xl object-cover ${
                  selectedPrograms.includes(program.id) ? "opacity-50" : ""
                }`}
              />
              <div className="absolute top-4 right-4">
                <div
                  className={`w-8 h-8 rounded-full border-4 ${
                    selectedPrograms.includes(program.id)
                      ? "bg-[#B7DC3D] border-[#B7DC3D]"
                      : "bg-white border-gray-300"
                  } flex items-center justify-center`}
                >
                  {selectedPrograms.includes(program.id) && (
                    <CheckIcon className="h-5 w-5 text-white" />
                  )}
                </div>
              </div>
              <div className="absolute bottom-0 bg-[#0C1E28] bg-opacity-80 w-full py-2 rounded-b-2xl">
                <h3 className="text-white text-center text-3xl font-bold">
                  {program.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol Hapus */}
        {selectedPrograms.length > 0 && (
          <div className="flex justify-end">
            <button
              onClick={handleDelete}
              className="bg-[#DC673D] text-[#0C1E28] font-bold text-2xl px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Hapus
            </button>
          </div>
        )}
      </main>

      {/* Footer2 */}
      <Footer2 />
    </div>
  );
};

export default HapusProgramPage;
