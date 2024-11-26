"use client";

import { useState, useEffect } from "react";
import MinisterHeader2 from "../../../../components/MinisterHeader2";
import MinisterFooter2 from "../../../../components/MinisterFooter2";
import { CheckIcon } from "@heroicons/react/24/solid";
import { FaSpinner } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import TextInput from "../../../../components/TextInput";
import TextArea from "../../../../components/TextArea";

const EditBantuanSosialPage = () => {
  const [selectedBansos, setSelectedBansos] = useState("");
  const [namaBansos, setNamaBansos] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const bantuanOptions = ["BLT", "PKH", "BPNT", "BSU"];

  useEffect(() => {
    // Set elemen root untuk react-modal setelah komponen dipasang
    if (typeof window !== "undefined") {
      const appElement = document.querySelector("#__next") || document.body;
      Modal.setAppElement(appElement);
    }
  }, []);

  const handleSelectChange = async (e) => {
    const selected = e.target.value;
    setSelectedBansos(selected);
    setIsLoading(true);

    // Simulasi pemanggilan API
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const bantuanData = {
      BLT: {
        nama: "BLT",
        deskripsi: "Bantuan Langsung Tunai (BLT) untuk membantu masyarakat.",
      },
      PKH: {
        nama: "PKH",
        deskripsi:
          "Program Keluarga Harapan (PKH) untuk keluarga kurang mampu.",
      },
      BPNT: {
        nama: "BPNT",
        deskripsi: "Bantuan Pangan Non-Tunai (BPNT) untuk masyarakat.",
      },
      BSU: {
        nama: "BSU",
        deskripsi: "Bantuan Subsidi Upah (BSU) untuk pekerja.",
      },
    };

    if (bantuanData[selected]) {
      setNamaBansos(bantuanData[selected].nama);
      setDeskripsi(bantuanData[selected].deskripsi);
    }

    setIsLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const confirmSubmit = async () => {
    setIsModalOpen(false);
    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      // Simulasi permintaan
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsSubmitting(false);
      setSubmitSuccess(true);
      toast.success("Bantuan Sosial berhasil diubah!");

      // Reset form
      setSelectedBansos("");
      setNamaBansos("");
      setDeskripsi("");

      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      setIsSubmitting(false);
      toast.error("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <MinisterHeader2 />

      {/* Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-1">
        {/* Judul */}
        <div className="text-center mb-8">
          <h4 className="mt-28 sm:mt-28 text-4xl sm:text-6xl font-bold text-gray-800">
            Edit
          </h4>
          <h2 className="text-6xl sm:text-8xl font-extrabold text-gray-800 mt-2">
            Bantuan Sosial
          </h2>
        </div>

        {/* Form Edit Bantuan Sosial */}
        <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-lg">
          {/* Pilih Bantuan Sosial */}
          <div className="mb-6 relative">
            <label htmlFor="bantuanSelect" className="sr-only">
              Pilih Bantuan Sosial
            </label>
            <select
              id="bantuanSelect"
              value={selectedBansos}
              onChange={handleSelectChange}
              className="w-full px-4 sm:px-6 py-2 sm:py-4 pr-16 rounded-full bg-gray-100 text-gray-800 text-lg sm:text-2xl font-semibold shadow focus:outline-none appearance-none transition duration-200 ease-in-out"
              required
              aria-required="true"
            >
              <option value="" disabled>
                Pilih Bantuan Sosial untuk Diedit
              </option>
              {bantuanOptions.map((bansos) => (
                <option key={bansos} value={bansos}>
                  {bansos}
                </option>
              ))}
            </select>
            {/* Panah Kustom */}
            <svg
              className="absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-none w-6 h-6 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {selectedBansos &&
            (isLoading ? (
              <div className="bg-gray-100 rounded-2xl p-8 shadow-inner mt-6">
                <Skeleton height={60} />
                <Skeleton count={5} className="mt-4" />
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 shadow-md mt-6"
              >
                {/* Nama Bantuan Sosial */}
                <div className="mb-6">
                  <label htmlFor="namaBansos" className="sr-only">
                    Nama Bantuan Sosial
                  </label>
                  <input
                    id="namaBansos"
                    type="text"
                    placeholder="Contoh: Bantuan Langsung Tunai (BLT)"
                    value={namaBansos}
                    onChange={(e) => setNamaBansos(e.target.value)}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-lg bg-gray-100 text-gray-800 text-lg sm:text-2xl font-medium placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200 ease-in-out"
                    required
                    aria-required="true"
                    aria-describedby="namaBansosHelp"
                  />
                  <p className="text-sm text-gray-600 mt-1" id="namaBansosHelp">
                    Nama bantuan sosial harus jelas dan mudah dipahami.
                  </p>
                </div>

                {/* Deskripsi Bantuan Sosial */}
                <div className="mb-6">
                  <label htmlFor="deskripsi" className="sr-only">
                    Deskripsi Bantuan Sosial
                  </label>
                  <textarea
                    id="deskripsi"
                    placeholder="Masukkan Deskripsi Bantuan Sosial"
                    value={deskripsi}
                    onChange={(e) => setDeskripsi(e.target.value)}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-lg bg-gray-100 text-gray-800 text-lg sm:text-2xl font-medium placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200 ease-in-out h-40 sm:h-64 resize-none"
                    required
                    aria-required="true"
                    aria-describedby="deskripsiHelp"
                  ></textarea>
                  <p className="text-sm text-gray-600 mt-1" id="deskripsiHelp">
                    Deskripsi harus mencakup informasi lengkap mengenai bantuan
                    sosial.
                  </p>
                </div>

                {/* Tombol Simpan */}
                <div className="flex justify-end mt-4">
                  <button
                    type="submit"
                    className={`bg-yellow-400 text-gray-800 font-semibold text-lg sm:text-2xl px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75 transition transform hover:scale-105 duration-300 flex items-center justify-center ${
                      isSubmitting ? "cursor-not-allowed opacity-50" : ""
                    }`}
                    disabled={isSubmitting}
                    aria-live="polite"
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner
                          className="animate-spin h-6 w-6 mr-2"
                          aria-hidden="true"
                        />
                        Menyimpan...
                      </>
                    ) : submitSuccess ? (
                      <>
                        <CheckIcon
                          className="h-6 w-6 mr-2"
                          aria-hidden="true"
                        />
                        Berhasil Disimpan
                      </>
                    ) : (
                      "Simpan"
                    )}
                  </button>
                </div>

                {/* Notifikasi Sukses */}
                {submitSuccess && (
                  <div
                    className="flex items-center bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4"
                    role="alert"
                  >
                    <CheckIcon className="h-6 w-6 mr-2" aria-hidden="true" />
                    <span className="block sm:inline">
                      Bantuan Sosial berhasil diubah.
                    </span>
                  </div>
                )}
              </form>
            ))}
        </div>
      </main>

      {/* Footer */}
      <MinisterFooter2 />

      {/* Modal Konfirmasi */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Konfirmasi Simpan"
        className="bg-white p-8 rounded-2xl max-w-lg w-full shadow-xl transform transition-all duration-300"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
      >
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Konfirmasi Simpan
          </h2>
          <p className="text-gray-700 mb-6">
            Apakah Anda yakin ingin menyimpan perubahan ini?
          </p>
          <div className="flex justify-end space-x-4">
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-200"
            >
              Batal
            </button>
            <button
              onClick={confirmSubmit}
              className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-lg hover:bg-yellow-500 transition duration-200"
            >
              Ya, Simpan
            </button>
          </div>
        </div>
      </Modal>

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />

      {/* Jika menggunakan Tailwind CSS, hapus atau komentari blok <style jsx> */}
    </div>
  );
};

export default EditBantuanSosialPage;
