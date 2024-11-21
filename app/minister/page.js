"use client";// app/minister/page.js

import MinisterHeader from "../../components/MinisterHeader";
import Footer from "../../components/Footer";
import BantuanSosialSection from "../../components/BantuanSosialSection";
import ProgramSection from "../../components/ProgramSection";
import AgendaSection from "../../components/AgendaSection";
import ForumSection from "../../components/ForumSection";
import LayananSection from "../../components/LayananSection";
import { motion } from "framer-motion";

export default function MinisterHomePage() {
  return (
    <div className="relative bg-white">
      <MinisterHeader />
      <main className="pt-20">
        {/* Hero Section */}
        <section
          className="relative h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/minister/Background Pict.png')" }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="container mx-auto relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Selamat datang!
            </motion.h1>
            <motion.h2
              className="text-4xl md:text-6xl font-bold mt-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Kemensos
            </motion.h2>
            <motion.p
              className="mt-6 text-lg md:text-2xl max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Semoga hari anda menyenangkan
            </motion.p>
            <motion.button
              className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition transform hover:-translate-y-1 hover:scale-105 duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              Jelajahi Sekarang
            </motion.button>
          </div>
        </section>

        {/* Bantuan Sosial Section */}
        <BantuanSosialSection />

        {/* Sections */}
        <ProgramSection />
        <AgendaSection />
        <ForumSection />
        <LayananSection />
      </main>
      <Footer />
    </div>
  );
}
