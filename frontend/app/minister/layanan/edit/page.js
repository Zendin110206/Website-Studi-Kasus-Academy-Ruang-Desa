// frontend/app/minister/layanan/edit/page.js

"use client";

import MinisterHeader2 from "../../../../components/MinisterHeader2";
import MinisterFooter2 from "../../../../components/MinisterFooter2";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import { FaSpinner } from "react-icons/fa";

const EditLayananPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const services = [
    {
      id: 1,
      title: "Surat Keterangan Domisili",
      url: "http://example.com/domisili",
    },
    { id: 2, title: "Surat Pindah", url: "http://example.com/pindah" },
    {
      id: 3,
      title: "Surat Keterangan Kematian",
      url: "http://example.com/kematian",
    },
    { id: 4, title: "Surat Keterangan Lahir", url: "http://example.com/lahir" },
  ];

  const handleServiceChange = (e) => {
    const serviceId = parseInt(e.target.value);
    const service = services.find((s) => s.id === serviceId);
    setSelectedService(service);
    setTitle(service.title);
    setUrl(service.url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedService) return;

    setIsSubmitting(true);
    setSubmitSuccess(false);

    // Implementasikan logika pembaruan di sini, misalnya panggil API

    // Simulasi permintaan dengan delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Setelah berhasil
    setIsSubmitting(false);
    setSubmitSuccess(true);
    alert("Layanan berhasil diubah!");

    // Reset form setelah submit
    setSelectedService(null);
    setTitle("");
    setUrl("");

    // Sembunyikan status sukses setelah beberapa detik
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <MinisterHeader2 />

      {/* Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-12 mt-24 sm:mt-32">
        {/* Judul */}
        <div className="text-center mb-8">
          <h4 className="mt-20  text-4xl sm:text-6xl font-bold text-[#0C1E28]">
            Cireundeu
          </h4>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-[#0C1E28] mt-2">
            Edit Layanan
          </h2>
        </div>

        {/* Pilih Layanan untuk Diedit */}
        <div className="mb-6">
          <label htmlFor="serviceSelect" className="sr-only">
            Pilih Layanan
          </label>
          <select
            id="serviceSelect"
            onChange={handleServiceChange}
            className="w-full px-6 py-4 rounded-full bg-white text-[#0C1E28] text-lg sm:text-xl font-bold shadow-md focus:outline-none"
            defaultValue=""
          >
            <option value="" disabled>
              Pilih Layanan untuk Diedit
            </option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.title}
              </option>
            ))}
          </select>
        </div>

        {selectedService && (
          <form onSubmit={handleSubmit}>
            <div className="bg-[#F2F2F2] rounded-2xl p-6 sm:p-8 shadow-lg">
              {/* Judul Surat */}
              <div className="mb-6">
                <label htmlFor="title" className="sr-only">
                  Judul Surat
                </label>
                <div className="flex items-center">
                  <div className="w-24 h-20 bg-[#D6CF35] rounded-l-2xl"></div>
                  <input
                    id="title"
                    type="text"
                    placeholder="Judul Surat"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="flex-1 bg-white rounded-r-2xl py-4 px-6 text-[#0C1E28] text-lg sm:text-xl font-bold placeholder-gray-400 focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* URL Surat */}
              <div className="mb-6">
                <label htmlFor="url" className="sr-only">
                  Link URL
                </label>
                <input
                  id="url"
                  type="url"
                  placeholder="Link URL"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-full bg-white rounded-2xl py-4 px-6 text-[#0C1E28] text-lg sm:text-xl font-bold placeholder-gray-400 focus:outline-none"
                  required
                />
              </div>

              {/* Tombol Simpan dengan Animasi */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className={`bg-[#B7DC3D] text-[#0C1E28] font-bold text-lg sm:text-xl px-6 sm:px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center ${
                    isSubmitting ? "cursor-not-allowed opacity-50" : ""
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <FaSpinner className="animate-spin h-5 w-5 mr-2" />
                  ) : submitSuccess ? (
                    <CheckIcon className="h-5 w-5 mr-2" />
                  ) : null}
                  {isSubmitting
                    ? "Menyimpan..."
                    : submitSuccess
                    ? "Berhasil Disimpan"
                    : "Simpan"}
                </button>
              </div>
            </div>
          </form>
        )}
      </main>

      {/* Footer */}
      <MinisterFooter2 />
    </div>
  );
};

export default EditLayananPage;
