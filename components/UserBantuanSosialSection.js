"use client";

import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Link from "next/link";

const UserBantuanSosialSection = () => {
  const bantuanItems = [
    { name: "BLT" },
    { name: "PKH" },
    { name: "BPNT" },
    { name: "BSU" },
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
    <section className="py-12 bg-[#0C1E28]" id="bantuan-sosial">
      <div className="container mx-auto px-6 md:px-12 relative">
        
        {/* Judul */}
        <div className="text-center mb-8">
          <h4 className="text-3xl font-bold text-white">Bantuan</h4>
          <h2 className="text-6xl font-extrabold text-white mt-2">Sosial</h2>
          <div className="w-1/2 mx-auto border-t border-white my-4"></div>
        </div>

        {/* Bantuan Items */}
        <motion.div
          className="grid grid-cols-2 gap-8"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            onscreen: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {bantuanItems.map((item, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Link href={`/users/bantuan/${item.name.toLowerCase()}`}>
                <div className="bg-[#DCCC3D] rounded-xl p-8 text-center shadow-lg h-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300">
                  <h4 className="text-[#0C1E28] text-3xl font-bold">
                    {item.name}
                  </h4>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default UserBantuanSosialSection;
