"use client";

import MinisterHeader2 from "../../../../components/MinisterHeader2";
import Footer2 from "../../../../components/Footer2";
import { useState } from "react";

const EditLayananPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const services = [
    { id: 1, title: "Surat Keterangan Domisili", url: "http://example.com/domisili" },
    { id: 2, title: "Surat Pindah", url: "http://example.com/pindah" },
    { id: 3, title: "Surat Keterangan Kematian", url: "http://example.com/kematian" },
    { id: 4, title: "Surat Keterangan Lahir", url: "http://example.com/lahir" },
  ];

  const handleServiceChange = (e) => {
    const serviceId = parseInt(e.target.value);
    const service = services.find((s) => s.id === serviceId);
    setSelectedService(service);
    setTitle(service.title);
    setUrl(service.url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle update logic here
    alert("Layanan berhasil diubah!");
    // Reset form fields
    setSelectedService(null);
    setTitle("");
    setUrl("");
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
            Edit Layanan
          </h2>
        </div>

        {/* Select Service to Edit */}
        <div className="mb-6">
          <select
            onChange={handleServiceChange}
            className="w-full px-6 py-4 rounded-full bg-white text-[#0C1E28] text-2xl font-bold shadow-md focus:outline-none"
          >
            <option value="">Pilih Layanan untuk Diedit</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.title}
              </option>
            ))}
          </select>
        </div>

        {selectedService && (
          <form onSubmit={handleSubmit}>
            <div className="bg-[#F2F2F2] rounded-2xl p-6 shadow-lg">
              {/* Title Input */}
              <div className="mb-6">
                <div className="flex items-center">
                  <div className="w-24 h-20 bg-[#D6CF35] rounded-l-2xl"></div>
                  <input
                    type="text"
                    placeholder="Judul Surat"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="flex-1 bg-white rounded-r-2xl py-4 px-6 text-[#0C1E28] text-2xl font-bold placeholder-gray-400 focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* URL Input */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Link URL"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-full bg-white rounded-2xl py-4 px-6 text-[#0C1E28] text-2xl font-bold placeholder-gray-400 focus:outline-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#B7DC3D] text-[#0C1E28] font-bold text-2xl px-8 py-3 rounded-full shadow-lg hover:bg-[#A6CC36] transition duration-300"
                >
                  Simpan
                </button>
              </div>
            </div>
          </form>
        )}
      </main>

      {/* Footer2 */}
      <Footer2 />
    </div>
  );
};

export default EditLayananPage;
