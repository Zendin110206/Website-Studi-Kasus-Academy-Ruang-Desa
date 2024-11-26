// frontend/app/minister/layanan/delete/page.js

"use client";

import MinisterHeader2 from "../../../../components/MinisterHeader2";
import MinisterFooter2 from "../../../../components/MinisterFooter2";
import { useState } from "react";
import { CheckIcon, ExclamationCircleIcon } from "@heroicons/react/24/solid";
import { FaSpinner } from "react-icons/fa";

/**
 * DeleteLayananPage Component
 * Memungkinkan minister untuk memilih dan menghapus beberapa layanan (layanan).
 */
const DeleteLayananPage = () => {
  // State untuk melacak ID layanan yang dipilih
  const [selectedServices, setSelectedServices] = useState([]);

  // State untuk menunjukkan apakah proses penghapusan sedang berlangsung
  const [isSubmitting, setIsSubmitting] = useState(false);

  // State untuk menunjukkan apakah penghapusan berhasil
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // State untuk menangani pesan kesalahan
  const [errorMessage, setErrorMessage] = useState("");

  // Daftar layanan yang tersedia
  const services = [
    { id: 1, title: "Surat Keterangan Domisili" },
    { id: 2, title: "Surat Pindah" },
    { id: 3, title: "Surat Keterangan Kematian" },
    { id: 4, title: "Surat Keterangan Lahir" },
  ];

  /**
   * Fungsi untuk men-toggle pemilihan layanan.
   * @param {number} id - ID layanan yang akan di-toggle.
   */
  const toggleSelectService = (id) => {
    setSelectedServices((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((serviceId) => serviceId !== id)
        : [...prevSelected, id]
    );
  };

  /**
   * Menangani penghapusan layanan yang dipilih.
   * Termasuk konfirmasi untuk mencegah penghapusan tidak sengaja.
   */
  const handleDelete = async () => {
    // Jika tidak ada layanan yang dipilih, hentikan fungsi
    if (selectedServices.length === 0) return;

    // Tampilkan dialog konfirmasi kepada pengguna
    const isConfirmed = window.confirm(
      "Apakah Anda yakin ingin menghapus layanan yang dipilih?"
    );

    // Jika pengguna membatalkan penghapusan, hentikan fungsi
    if (!isConfirmed) return;

    // Mulai proses penghapusan
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setErrorMessage("");

    try {
      // TODO: Implementasikan logika penghapusan sebenarnya di sini.
      // Misalnya, panggil API untuk menghapus layanan yang dipilih.
      // Contoh:
      // await axios.delete('/api/services', { data: { ids: selectedServices } });

      // Simulasikan permintaan jaringan dengan delay 2 detik
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Setelah penghapusan berhasil, perbarui state
      setSubmitSuccess(true);
      alert("Layanan yang dipilih telah berhasil dihapus.");

      // Reset layanan yang dipilih
      setSelectedServices([]);
    } catch (error) {
      // Tangani setiap kesalahan yang terjadi selama penghapusan
      console.error("Error deleting services:", error);
      setErrorMessage("Gagal menghapus layanan. Silakan coba lagi nanti.");
    } finally {
      // Akhiri proses penghapusan
      setIsSubmitting(false);

      // Opsional: Reset pesan sukses dan kesalahan setelah beberapa detik
      setTimeout(() => {
        setSubmitSuccess(false);
        setErrorMessage("");
      }, 5000);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      {/* Bagian Header */}
      <MinisterHeader2 />

      {/* Konten Utama */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-12 mt-24 sm:mt-32">
        {/* Bagian Judul */}
        <div className="text-center mb-8">
          <h4 className="mt-18 text-4xl sm:text-6xl font-bold text-[#0C1E28]">
            Cireundeu
          </h4>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-[#0C1E28] mt-2">
            Hapus Layanan
          </h2>
        </div>

        {/* Pesan Sukses */}
        {submitSuccess && (
          <div className="flex items-center bg-green-100 text-green-700 p-4 rounded mb-6">
            <CheckIcon className="h-6 w-6 mr-2" aria-hidden="true" />
            <span>Layanan yang dipilih telah berhasil dihapus.</span>
          </div>
        )}

        {/* Pesan Kesalahan */}
        {errorMessage && (
          <div className="flex items-center bg-red-100 text-red-700 p-4 rounded mb-6">
            <ExclamationCircleIcon
              className="h-6 w-6 mr-2"
              aria-hidden="true"
            />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Tombol Hapus */}
        {selectedServices.length > 0 && (
          <div className="flex justify-end mb-6">
            <button
              onClick={handleDelete}
              className={`bg-[#DC673D] text-[#0C1E28] font-bold text-lg sm:text-xl px-6 sm:px-8 py-3 rounded-full shadow-lg hover:bg-[#e57c4f] transition-colors duration-300 flex items-center justify-center ${
                isSubmitting ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <FaSpinner
                    className="animate-spin h-5 w-5 mr-2"
                    aria-hidden="true"
                  />
                  Menghapus...
                </>
              ) : (
                "Hapus"
              )}
            </button>
          </div>
        )}

        {/* Daftar Layanan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const isSelected = selectedServices.includes(service.id);
            return (
              <div
                key={service.id}
                className={`relative rounded-2xl p-6 flex items-center cursor-pointer transform transition-all duration-300 border ${
                  isSelected
                    ? "border-red-500 bg-red-50"
                    : "border-gray-300 hover:shadow-lg hover:border-gray-400"
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                onClick={() => toggleSelectService(service.id)}
                tabIndex={0} // Membuat div dapat difokuskan untuk navigasi keyboard
                onKeyDown={(e) => {
                  // Memungkinkan pemilihan melalui tombol Enter atau Spasi
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleSelectService(service.id);
                  }
                }}
                aria-pressed={isSelected} // Menandakan status toggle untuk aksesibilitas
                role="button" // Mendefinisikan peran sebagai button untuk aksesibilitas
              >
                {/* Placeholder untuk ikon atau gambar layanan */}
                <div className="w-24 h-24 bg-[#D6CF35] rounded-l-2xl flex-shrink-0"></div>

                {/* Judul Layanan */}
                <h3 className="text-lg sm:text-xl font-bold text-[#0C1E28] ml-6">
                  {service.title}
                </h3>

                {/* Indikator Seleksi (Opsional) */}
                {isSelected && (
                  <CheckIcon
                    className="absolute top-2 right-2 h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                )}
              </div>
            );
          })}
        </div>
      </main>

      {/* Bagian Footer */}
      <MinisterFooter2 />
    </div>
  );
};

export default DeleteLayananPage;
