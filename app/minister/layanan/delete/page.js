"use client";

import MinisterHeader2 from "../../../../components/MinisterHeader2";
import Footer2 from "../../../../components/Footer2";
import { useState } from "react";

const DeleteLayananPage = () => {
  const [selectedServices, setSelectedServices] = useState([]);

  const services = [
    { id: 1, title: "Surat Keterangan Domisili" },
    { id: 2, title: "Surat Pindah" },
    { id: 3, title: "Surat Keterangan Kematian" },
    { id: 4, title: "Surat Keterangan Lahir" },
  ];

  const toggleSelectService = (id) => {
    setSelectedServices((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((serviceId) => serviceId !== id)
        : [...prevSelected, id]
    );
  };

  const handleDelete = () => {
    // Implement delete logic here
    alert("Layanan yang dipilih telah dihapus.");
    // Reset selected services
    setSelectedServices([]);
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
            Hapus Layanan
          </h2>
        </div>

        {/* Delete Button */}
        {selectedServices.length > 0 && (
          <div className="flex justify-end mb-6">
            <button
              onClick={handleDelete}
              className="bg-[#DC673D] text-[#0C1E28] font-bold text-2xl px-8 py-3 rounded-full shadow-lg hover:bg-[#C85F36] transition duration-300"
            >
              Hapus
            </button>
          </div>
        )}

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const isSelected = selectedServices.includes(service.id);
            return (
              <div
                key={service.id}
                className={`rounded-2xl p-6 flex items-center cursor-pointer transform transition-all duration-300 ${
                  isSelected ? "bg-[#DCCC3D] scale-105" : "bg-[#0C1E28]"
                }`}
                onClick={() => toggleSelectService(service.id)}
              >
                <div className="w-24 h-24 bg-[#D6CF35] rounded-l-2xl"></div>
                <h3 className="text-3xl font-bold text-white ml-6">
                  {service.title}
                </h3>
              </div>
            );
          })}
        </div>
      </main>

      {/* Footer2 */}
      <Footer2 />
    </div>
  );
};

export default DeleteLayananPage;
