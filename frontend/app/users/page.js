// frontend/app/users/page.js
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import UserHeader from "../../components/UserHeader";
import UserProgramSection from "../../components/UserProgramSection";
import UserAgendaSection from "../../components/UserAgendaSection";
import UserForumSection from "../../components/UserForumSection";
import UserLayananSection from "../../components/UserLayananSection";
import UserBantuanSosialSection from "../../components/UserBantuanSosialSection";
import UserFooter from "../../components/UserFooter";

const UserHomePage = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Mendapatkan data pengguna dari localStorage
    const storedUser = localStorage.getItem("user"); // Sesuaikan key jika perlu
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        if (user && user.username) {
          setUsername(user.username);
        }
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
      }
    }
  }, []);

  const handleExploreClick = () => {
    // Arahkan pengguna ke halaman tertentu, misalnya Program
    // Implementasikan sesuai kebutuhan Anda
    // Contoh:
    // router.push("/program");
  };

  return (
    <div className="relative bg-white w-full overflow-x-hidden">
      {/* Header */}
      <UserHeader />

      {/* Main Content */}
      <main className="pt-24">
        {/* Hero Section */}
        <section
          className="relative h-screen bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: "url('/assets/minister/Background Pict.png')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-60"></div>

          {/* Content */}
          <div className="relative z-10 text-center text-white px-6">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Selamat datang{username ? `, ${username}!` : "!"}
            </motion.h1>
            <motion.h2
              className="text-3xl md:text-5xl font-bold mt-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              PieceOfAul
            </motion.h2>
            <motion.p
              className="mt-6 text-base md:text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Semoga hari Anda menyenangkan
            </motion.p>
            <motion.button
              className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition transform hover:-translate-y-1 hover:scale-105 duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              onClick={handleExploreClick}
              aria-label="Jelajahi Sekarang"
            >
              Jelajahi Sekarang
            </motion.button>
          </div>
        </section>

        {/* Sections */}
        <UserBantuanSosialSection />
        <UserProgramSection />
        <UserAgendaSection />
        <UserForumSection />
        <UserLayananSection />
      </main>

      {/* Footer */}
      <UserFooter />
    </div>
  );
};

export default UserHomePage;
