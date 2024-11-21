"use client";

import { motion } from "framer-motion";

const UserAgendaSection = () => {
  const agendas = [
    {
      id: 1,
      title: "Musyawarah Desa",
      date: "25/10/24",
      time: "16.00 - 18.00",
      location: "Balai Desa",
      contact: "Pak Dhoni",
    },
    {
      id: 2,
      title: "Workshop Mie Singkong",
      date: "31/10/24",
      time: "12.00 - 13.00",
      location: "Balai Desa",
      contact: "Bu Retno",
    },
    {
      id: 3,
      title: "Arisan",
      date: "01/11/24",
      time: "12.00 - 13.00",
      location: "Balai Desa",
      contact: "Bu Retno",
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
    <section className="py-16 bg-gray-50" id="agenda">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">Agenda</h2>
          <p className="mt-2 text-lg text-gray-700">Cireundeu</p>
          <hr className="border-t-2 border-gray-800 mt-6 w-24 mx-auto" />
        </div>

        {/* Agenda Items */}
        <div className="space-y-8 px-4 md:px-0">
          {agendas.map((agenda) => (
            <motion.article
              key={agenda.id}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-6 shadow-lg mx-4 md:mx-0 transform hover:scale-105 transition-transform duration-300"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-black mb-4">
                {agenda.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <p className="font-semibold text-black">Tanggal</p>
                  <p className="text-black">{agenda.date}</p>
                </div>
                <div>
                  <p className="font-semibold text-black">Lokasi</p>
                  <p className="text-black">{agenda.location}</p>
                </div>
                <div>
                  <p className="font-semibold text-black">Waktu</p>
                  <p className="text-black">{agenda.time}</p>
                </div>
                <div>
                  <p className="font-semibold text-black">Kontak</p>
                  <p className="text-black">{agenda.contact}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserAgendaSection;
