"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const UserForumSection = () => {
  const forums = [
    {
      id: 1,
      category: "RT",
      subcategory: "Pemilihan",
      description:
        "Forum diskusi ini dapat menjadi kesempatan bagi kita untuk saling mengenal...",
    },
    {
      id: 2,
      category: "Umum",
      subcategory: "Fasilitas",
      description:
        "Forum diskusi ini dapat menjadi momen bagi kita untuk bersama-sama...",
    },
    {
      id: 3,
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
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-4xl font-bold text-gray-800">Forum</h3>
          <p className="text-lg text-gray-600">Cireundeu</p>
          <hr className="border-t-2 border-gray-800 mt-4 w-1/2 mx-auto" />
        </div>

        {/* Forum Cards */}
        <div className="flex flex-wrap justify-center gap-8 px-4 md:px-0">
          {forums.map((forum) => (
            <motion.div
              key={forum.id}
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
                  {/* Wrap the button with Link to navigate to the forum detail page */}
                  <Link href={`/users/forum/${forum.id}`}>
                    <button className="bg-gray-800 text-white px-6 py-2 rounded-full transition transform hover:-translate-y-1 hover:scale-105 duration-300">
                      Lihat
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserForumSection;
