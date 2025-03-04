// frontend/components/UserLayananSection.js

"use client";

import { motion } from "framer-motion";

const UserLayananSection = () => {
  const layananList = [
    {
      title: "Surat Keterangan Domisili",
      file: "/templates/Formulir-Surat-Keterangan-Domisili.pdf",
    },
    {
      title: "Surat Keterangan Pindah",
      file: "/templates/Formulir-Surat-Keterangan-Pindah.pdf",
    },
    {
      title: "Surat Keterangan Kematian",
      file: "/templates/Formulir-Surat-Keterangan-Kematian.pdf",
    },
    {
      title: "Surat Keterangan Lahir",
      file: "/templates/Formulir-Surat-Keterangan-Kelahiran.pdf",
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
    // Trigger file download when the div is clicked
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileUrl.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-12 bg-gray-50" id="layanan">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
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
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              onClick={() => handleDownload(layanan.file)}
            >
              <div className="bg-gray-800 rounded-lg p-6 text-center cursor-pointer">
                <h4 className="text-white text-xl font-bold">
                  {layanan.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserLayananSection;
