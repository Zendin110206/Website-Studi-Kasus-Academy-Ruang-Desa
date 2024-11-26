// frontend/components/MinisterForumSection.js
"use client";

import { motion } from "framer-motion";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const MinisterForumSection = () => {
  const forums = [
    {
      category: "RT",
      subcategory: "Pemilihan",
      description:
        "Forum diskusi ini dapat menjadi kesempatan bagi kita untuk saling mengenal...",
    },
    {
      category: "Umum",
      subcategory: "Fasilitas",
      description:
        "Forum diskusi ini dapat menjadi momen bagi kita untuk bersama-sama...",
    },
    {
      category: "Lingkungan",
      subcategory: "Keamanan",
      description:
        "Forum diskusi ini dapat menjadi momen bagi kita untuk bersama-sama...",
    },
  ];

  const cardVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section className="py-12" id="forum">
      <div className="container mx-auto px-6 md:px-12 relative">
        {/* Tombol Settings */}
        <div className="absolute top-4 right-4">
          <a
            href="/minister/forum" // Ubah ini sesuai dengan URL yang ingin dituju
            className="flex items-center justify-center bg-gradient-to-r from-blue-700 to-blue-900 rounded-full p-3 shadow-xl hover:scale-110 transition-transform duration-300 focus:outline-none sm:p-4"
            aria-label="Settings"
          >
            <Cog6ToothIcon className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
          </a>
        </div>

        {/* Judul */}
        <div className="text-center mb-8">
          <h3 className="text-4xl font-bold text-gray-800">Forum</h3>
          <p className="text-lg text-gray-600">Cireundeu</p>
          <hr className="border-t-2 border-gray-800 mt-4 w-1/2 mx-auto" />
        </div>

        {/* Forum Cards */}
        <div className="flex flex-wrap justify-center gap-8 px-4 md:px-0">
          {forums.map((forum, index) => (
            <motion.div
              key={index}
              className="w-full md:w-1/3 mx-4"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="bg-yellow-400 rounded-lg overflow-hidden shadow-lg">
                <div className="bg-gray-800 p-4">
                  <h4 className="text-white text-xl font-bold">
                    {forum.category}
                  </h4>
                  <p className="text-white">{forum.subcategory}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-800 mb-4">{forum.description}</p>
                  <button className="bg-gray-800 text-white px-6 py-2 rounded-full transition transform hover:-translate-y-1 hover:scale-105 duration-300">
                    Lihat
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MinisterForumSection;
