// components/LayananSection.js
"use client";

import { motion } from "framer-motion";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import Link from "next/link";


const LayananSection = () => {
  const layananList = [
    {
      title: "Surat Keterangan Domisili",
      file: "/templates/surat_keterangan_domisili.docx", // Ganti dengan URL file Anda
    },
    {
      title: "Surat Keterangan Pindah",
      file: "/templates/surat_pindah.docx", // Ganti dengan URL file Anda
    },
    {
      title: "Surat Keterangan Kematian",
      file: "/templates/surat_keterangan_kematian.docx", // Ganti dengan URL file Anda
    },
    {
      title: "Surat Keterangan Lahir",
      file: "/templates/surat_keterangan_lahir.docx", // Ganti dengan URL file Anda
    },
  ];

  const cardVariants = {
    offscreen: { opacity: 0, x: 50 },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const handleDownload = (fileUrl) => {
    // Memicu pengunduhan file saat div diklik
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileUrl.split('/').pop();  // Nama file dari URL
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-12 bg-gray-50" id="layanan">
      <div className="container mx-auto px-6 md:px-12 relative">
        {/* Tombol Settings */}
        <div className="absolute top-4 right-4">
          <a
            href="/minister/layanan"  // Ubah ini sesuai dengan URL yang ingin dituju
            className="flex items-center justify-center bg-gradient-to-r from-blue-700 to-blue-900 rounded-full p-4 shadow-xl hover:scale-110 transition-transform duration-300 hover:bg-blue-600 focus:outline-none"
            aria-label="Settings"
          >
            <Cog6ToothIcon className="h-12 w-12 text-white" />
          </a>
        </div>

        {/* Judul */}
        <div className="text-center mb-8">
          <h3 className="text-4xl font-bold text-gray-800">Layanan</h3>
          <p className="text-lg text-gray-600">Cireundeu</p>
          <hr className="border-t-2 border-gray-800 mt-4 w-1/2 mx-auto" />
        </div>

        {/* Layanan Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-4 md:px-0">
          {layananList.map((layanan, index) => (
            <motion.div
              key={index}
              className="w-full"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.1 }}
              // Efek hover untuk membesar
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              onClick={() => handleDownload(layanan.file)} // Memicu pengunduhan saat div diklik
            >
              <div className="bg-gray-800 rounded-lg p-6 text-center cursor-pointer">
                <h4 className="text-white text-xl font-bold">{layanan.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LayananSection;
