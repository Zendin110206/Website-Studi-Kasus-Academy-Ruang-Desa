// frontend/app/users/bantuan/[name]/page.js

"use client";

import { useState } from "react";
import UserHeader from "../../../../components/UserHeader";
import Footer from "../../../../components/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter untuk navigasi

const BantuanPage = ({ params }) => {
  const { name } = params; // Mendapatkan nama bantuan dari URL
  const router = useRouter(); // Inisialisasi router

  // State untuk mengelola loading dan sukses
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Konten dinamis berdasarkan nama bantuan
  const bantuanDetails = {
    blt: {
      title: "Bantuan Langsung Tunai",
      tujuan:
        "Program ini bertujuan mengurangi kemiskinan, meningkatkan daya beli, dan menstabilkan ekonomi, terutama dalam situasi krisis.",
      persyaratan:
        "1. Warga negara Indonesia\n2. Terdaftar di KTP\n3. Memenuhi kriteria pendapatan",
      pendaftaran:
        "1. Kunjungi Website Resmi Kementerian Sosial\nAkses situs web resmi Kementerian Sosial di [cekbansos.kemensos.go.id](https://cekbansos.kemensos.go.id).\n\n2. Masukkan Data Pribadi\nMasukkan data pribadi sesuai dengan tempat tinggal Anda, seperti nama desa, kecamatan, kabupaten/kota, hingga provinsi berdasarkan KTP Anda.\n\n3. Isi Data Pribadi dengan Akurat\nPastikan data yang Anda masukkan sesuai dengan KTP untuk memverifikasi status Anda sebagai calon penerima bantuan.\n\n4. Tekan Tombol “Cari Data”\nSetelah mengisi semua informasi dengan benar, tekan tombol “Cari Data”. Sistem akan memproses data Anda dan mencarikannya dalam database penerima bantuan.\n\n5. Verifikasi Status Penerima\nJika Anda terdaftar, nama Anda akan muncul sebagai penerima Bansos PKH, termasuk BLT Mitigasi Risiko Pangan. Ini akan memberikan kepastian mengenai kelayakan Anda untuk menerima bantuan tersebut.",
      image: "/assets/minister/Background Pict.png", // Ganti sesuai kebutuhan
    },
    // Tambahkan bantuan lain jika diperlukan
  };

  const detail = bantuanDetails[name.toLowerCase()] || {
    title: "Bantuan Tidak Ditemukan",
    tujuan: "",
    persyaratan: "",
    pendaftaran: "",
    image: "/assets/minister/Background Pict.png",
  };

  // Handler untuk tombol Daftar
  const handleDaftar = () => {
    setIsLoading(true);
    setIsSuccess(false);

    // Simulasikan proses pendaftaran (misalnya panggilan API)
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);

      // Navigasi setelah berhasil (opsional)
      // router.push("/users/home");
    }, 2000); // 2 detik simulasi
  };

  return (
    <div className="relative bg-white w-full overflow-x-hidden min-h-screen">
      {/* Header */}
      <UserHeader />

      {/* Main Content */}
      <main className="pt-24 relative">
        {/* Page Title */}
        <section className="text-center mt-12">
          <h1 className="text-4xl font-bold text-[#0C1E28]">Bantuan</h1>
          <h2 className="text-8xl font-extrabold text-[#0C1E28] leading-none">
            Sosial
          </h2>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-6 md:px-12">
            {/* Content Wrapper */}
            <div className="bg-[#F2F2F2] rounded-2xl p-6 md:p-12 shadow-lg">
              {/* Title Section */}
              <div className="relative mb-12">
                {/* Title Background */}
                <div className="absolute inset-0 bg-[#0C1E28] rounded-2xl flex items-center">
                  {/* Yellow Accent */}
                  <div className="w-24 h-full bg-[#D6CF35] rounded-l-2xl"></div>
                  {/* Title Text */}
                  <h3 className="text-3xl md:text-4xl font-bold text-white ml-6">
                    {detail.title}
                  </h3>
                </div>
                {/* Spacer for Absolute Positioning */}
                <div className="h-20"></div>
              </div>

              {/* Tujuan */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#0C1E28] mb-4">
                  Tujuan
                </h2>
                <p className="text-lg md:text-xl text-[#0C1E28] whitespace-pre-line">
                  {detail.tujuan}
                </p>
              </div>

              {/* Persyaratan */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#0C1E28] mb-4">
                  Persyaratan
                </h2>
                <p className="text-lg md:text-xl text-[#0C1E28] whitespace-pre-line">
                  {detail.persyaratan}
                </p>
              </div>

              {/* Pendaftaran */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#0C1E28] mb-4">
                  Pendaftaran
                </h2>
                <p className="text-lg md:text-xl text-[#0C1E28] whitespace-pre-line">
                  {detail.pendaftaran}
                </p>
              </div>

              {/* Daftar Button */}
              <div className="flex justify-end items-center">
                <button
                  onClick={handleDaftar}
                  className={`relative bg-[#DCCC3D] text-[#0C1E28] font-bold text-xl px-8 py-3 rounded-full shadow-lg hover:bg-[#CBB736] transition duration-300 flex items-center ${
                    isLoading || isSuccess
                      ? "cursor-not-allowed opacity-70"
                      : ""
                  }`}
                  disabled={isLoading || isSuccess}
                >
                  {isLoading ? (
                    // Spinner
                    <svg
                      className="animate-spin h-6 w-6 mr-3 text-[#0C1E28]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                    </svg>
                  ) : null}
                  {isSuccess ? "Berhasil!" : "Daftar"}
                </button>
              </div>

              {/* Success Message */}
              {isSuccess && (
                <div className="mt-4 text-center">
                  <div className="flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-green-500 font-semibold text-lg">
                      Pendaftaran Berhasil!
                    </span>
                  </div>
                  {/* Navigasi setelah sukses (opsional) */}
                  <button
                    onClick={() => router.push("/users")}
                    className="mt-4 bg-[#DCCC3D] text-[#0C1E28] font-bold text-xl px-6 py-2 rounded-full shadow-lg hover:bg-[#CBB736] transition duration-300"
                  >
                    Kembali ke Beranda
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BantuanPage;
